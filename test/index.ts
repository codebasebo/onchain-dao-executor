// tests/CryptoDevsDAO.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CryptoDevsDAO", function () {
  let cryptoDevsDAO, nftMarketplace, cryptoDevsNFT;
  let deployer, member1, member2;

  beforeEach(async function () {
    [deployer, member1, member2] = await ethers.getSigners();

    // Deploy contracts
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    nftMarketplace = await NFTMarketplace.deploy();

    const CryptoDevsNFT = await ethers.getContractFactory("CryptoDevsNFT");
    cryptoDevsNFT = await CryptoDevsNFT.deploy();

    const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
    cryptoDevsDAO = await CryptoDevsDAO.deploy(nftMarketplace.address, cryptoDevsNFT.address);
  });

  describe("Deployment", function () {
    it("Should deploy contracts successfully", async function () {
      expect(nftMarketplace.address).to.be.properAddress;
      expect(cryptoDevsNFT.address).to.be.properAddress;
      expect(cryptoDevsDAO.address).to.be.properAddress;
    });
  });

  describe("Membership", function () {
    it("Should allow members to join", async function () {
      await cryptoDevsNFT.safeTransferFrom(deployer.address, member1.address, 1, "");
      await cryptoDevsDAO.connect(member1).onERC721Received(member1.address, 1, "");

      expect(await cryptoDevsDAO.members(member1.address).lockedNFTs).to.have.lengthOf(1);
    });

    it("Should not allow non-members to participate in proposals", async function () {
      await expect(cryptoDevsDAO.connect(member2).createProposal(1, 0)).to.be.revertedWith("NOT_A_MEMBER");
    });
  });

  describe("Proposals", function () {
    it("Should allow members to create proposals", async function () {
      await cryptoDevsNFT.safeTransferFrom(deployer.address, member1.address, 1, "");
      await cryptoDevsDAO.connect(member1).onERC721Received(member1.address, 1, "");

      const proposalId = await cryptoDevsDAO.connect(member1).createProposal(1, 0);
      expect(proposalId).to.be.a("number");
    });

    it("Should allow members to vote on proposals", async function () {
      await cryptoDevsNFT.safeTransferFrom(deployer.address, member1.address, 1, "");
      await cryptoDevsDAO.connect(member1).onERC721Received(member1.address, 1, "");

      const proposalId = await cryptoDevsDAO.connect(member1).createProposal(1, 0);
      await cryptoDevsDAO.connect(member1).voteOnProposal(proposalId, 0);

      expect(await cryptoDevsDAO.proposals(proposalId).forVotes).to.be.equal(1);
    });

    it("Should execute proposals after deadline", async function () {
      await cryptoDevsNFT.safeTransferFrom(deployer.address, member1.address, 1, "");
      await cryptoDevsDAO.connect(member1).onERC721Received(member1.address, 1, "");

      const proposalId = await cryptoDevsDAO.connect(member1).createProposal(1, 0);
      await cryptoDevsDAO.connect(member1).voteOnProposal(proposalId, 0);

      // Fast forward to deadline
      await ethers.provider.send("evm_setNextBlockTimestamp", [Math.floor(Date.now() / 1000) + 86400]);
      await ethers.provider.send("evm_mine");

      await cryptoDevsDAO.executeProposal(proposalId);

      // Check if proposal was executed successfully
      expect(await cryptoDevsDAO.proposals(proposalId).executed).to.be.true;
    });
  });
});