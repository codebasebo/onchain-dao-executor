// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NFTMarketplace {
    /// @dev Maintain a mapping of  TokenID to Owner addresses
    mapping(uint256 => address) public tokens;
    /// @dev Set the purchase price for each  NFT
    uint256 public constant nftPurchasePrice = 0.001 ether;
    uint256 public constant nftSalePrice = 0.002 ether;

    constructor() payable {}

    /// @dev purchase() accepts ETH and marks the owner of the given `tokenId` as the caller address
    /// @param _tokenId - the  NFT token Id to purchase
    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPurchasePrice, "NOT_ENOUGH_ETH_SUPPLIED");
        require(tokens[_tokenId] == address(0), "NOT_FOR_SALE");
        tokens[_tokenId] = msg.sender;
    }

    /// @dev sell() pays the NFT owner `nftSalePrice` ETH and takes`tokenId` ownership back
    /// @param _tokenId the  NFT token Id to sell back
    function sell(uint256 _tokenId) external {
        require(tokens[_tokenId] == msg.sender, "INVALID_OWNER");
        require(address(this).balance >= nftSalePrice, "NOT_ENOUGH_FUNDS");
        tokens[_tokenId] = address(0);
        payable(msg.sender).transfer(nftSalePrice);
    }

    /// @dev available() checks whether the given tokenId has already been sold or not
    /// @param _tokenId - the tokenId to check for
    function available(uint256 _tokenId) external view returns (bool) {
        // address(0) = 0x0000000000000000000000000000000000000000
        // This is the default value for addresses in Solidity
        if (tokens[_tokenId] == address(0)) {
            return true;
        }
        return false;
    }

    /// @dev ownerOf() returns the owner of the given tokenId
    /// @param _tokenId - the tokenId to check for
    function ownerOf(uint256 _tokenId) external view returns (address) {
        return tokens[_tokenId];
    }
}
