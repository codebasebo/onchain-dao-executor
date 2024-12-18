// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

// Interface for the NFTMarketplace
interface INFTMarketplace {
    /// @dev nftPurchasePrice() reads the value of the public uint256 variable `nftPurchasePrice`
    function nftPurchasePrice() external view returns (uint256);

    /// @dev available() returns whether or not the given _tokenId has already been purchased
    /// @return Returns a boolean value - true if available, false if not
    function available(uint256 _tokenId) external view returns (bool);

    /// @dev ownerOf() returns the owner of a given _tokenId from the NFT marketplace
    /// @return returns the address of the owner
    function ownerOf(uint256 _tokenId) external view returns (address);

    /// @dev purchase() purchases an NFT from the NFTMarketplace
    /// @param _tokenId - the  NFT tokenID to purchase
    function purchase(uint256 _tokenId) external payable;

    /// @dev sell() pays the NFT owner `nftSalePrice` ETH and takes`tokenId` ownership back
    /// @param _tokenId the  NFT token Id to sell back
    function sell(uint256 _tokenId) external;
}

// Minimal interface for CryptoDevs NFT containing the functions we care about
interface ICryptoDevsNFT {
    /// @dev balanceOf returns the number of NFTs owned by the given address
    /// @param owner - address to fetch number of NFTs for
    /// @return Returns the number of NFTs owned
    function balanceOf(address owner) external view returns (uint256);

    /// @dev tokenOfOwnerByIndex returns a tokenID at given index for owner
    /// @param owner - address to fetch the NFT TokenID for
    /// @param index - index of NFT in owned tokens array to fetch
    /// @return Returns the TokenID of the NFT
    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256);

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

    /// @dev Returns the owner of the `tokenId` token.
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

/**
 * @title CryptoDevsDAO
 * @dev A DAO contract for managing proposals to buy or sell NFTs from a marketplace.
 */
contract CryptoDevsDAO is IERC721Receiver {
    // Interfaces for interacting with the NFT marketplace and CryptoDevs NFT.
    INFTMarketplace public nftMarketplace;
    ICryptoDevsNFT public cryptoDevsNFT;

    // Enum for proposal types.
    enum ProposalType {
        BUY,
        SELL
    }
    enum VoteType {
        AGAINST,
        FOR
    }

    // Struct to represent a proposal.
    struct Proposal {
        uint256 nftTokenId;
        uint256 deadline;
        uint256 againstVotes;
        uint256 forVotes;
        bool executed;
        ProposalType proposalType;
        mapping(address => bool) votes;
    }

    // Struct to represent a DAO member.
    struct Member {
        uint256 joinedAt;
        uint256[] lockedNFTs;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(address => Member) public members;
    mapping(uint256 => bool) public tokenLocked;

    uint256 public numProposals;
    uint256 public totalVotingPower;

    modifier memberOnly() {
        require(members[msg.sender].lockedNFTs.length > 0, "NOT_A_MEMBER");
        _;
    }

    /**
     * @dev Contract constructor.
     * @param _nftMarketplace Address of the NFT marketplace.
     * @param _nftContract Address of the CryptoDevs NFT contract.
     */
    constructor(address _nftMarketplace, address _nftContract) {
        nftMarketplace = INFTMarketplace(_nftMarketplace);
        cryptoDevsNFT = ICryptoDevsNFT(_nftContract);
    }

    function createProposal(uint256 _forTokenId, ProposalType __proposalType) external memberOnly returns (uint256) {
        if (__proposalType == ProposalType.BUY) {
            require(nftMarketplace.available(_forTokenId), "NFT_NOT_AVAILABLE");
        } else {
            require(nftMarketplace.ownerOf(_forTokenId) == address(this), "NFT_NOT_OWNED");
        }

        Proposal storage proposal = proposals[numProposals];
        proposal.nftTokenId = _forTokenId;
        proposal.deadline = block.timestamp + 1 days;
        proposal.proposalType = __proposalType;

        numProposals++;
        return numProposals - 1;
    }

    function voteOnProposal(uint256 _proposalId, VoteType _vote) external memberOnly {
        Proposal storage proposal = proposals[_proposalId];
        require(block.timestamp < proposal.deadline, "VOTING_ENDED");
        require(!proposal.votes[msg.sender], "ALREADY_VOTED");

        proposal.votes[msg.sender] = true;
        uint256 votingPower = members[msg.sender].lockedNFTs.length;

        if (_vote == VoteType.FOR) {
            proposal.forVotes += votingPower;
        } else {
            proposal.againstVotes += votingPower;
        }

        if (block.timestamp >= proposal.deadline) {
            executeProposal(_proposalId);
        }
    }

    function executeProposal(uint256 _proposalId) public {
        Proposal storage proposal = proposals[_proposalId];
        require(block.timestamp >= proposal.deadline, "VOTING_NOT_ENDED");
        require(!proposal.executed, "ALREADY_EXECUTED");

        proposal.executed = true;
        if (proposal.forVotes > proposal.againstVotes) {
            if (proposal.proposalType == ProposalType.BUY) {
                uint256 purchasePrice = nftMarketplace.nftPurchasePrice();
                require(address(this).balance >= purchasePrice, "INSUFFICIENT_FUNDS");
                nftMarketplace.purchase{value: purchasePrice}(proposal.nftTokenId);
            } else {
                nftMarketplace.sell(proposal.nftTokenId);
            }
        }
    }

    function onERC721Received(address, address from, uint256 tokenId, bytes calldata)
        external
        override
        returns (bytes4)
    {
        require(!tokenLocked[tokenId], "ALREADY_LOCKED");
        Member storage member = members[from];

        if (member.lockedNFTs.length == 0) {
            member.joinedAt = block.timestamp;
        }

        tokenLocked[tokenId] = true;
        totalVotingPower += 1;
        member.lockedNFTs.push(tokenId);

        return this.onERC721Received.selector;
    }

    function quit() external memberOnly {
        Member storage member = members[msg.sender];
        require(block.timestamp - member.joinedAt > 30 days, "NOT_ELIGIBLE_TO_QUIT");

        uint256 votingPower = member.lockedNFTs.length;
        uint256 share = (address(this).balance * votingPower) / totalVotingPower;

        for (uint256 i = 0; i < votingPower; i++) {
            uint256 tokenId = member.lockedNFTs[i];
            tokenLocked[tokenId] = false;
            cryptoDevsNFT.safeTransferFrom(address(this), msg.sender, tokenId, "");
        }

        totalVotingPower -= votingPower;
        payable(msg.sender).transfer(share);
        delete members[msg.sender];
    }

    receive() external payable {}

    fallback() external payable {}
}
