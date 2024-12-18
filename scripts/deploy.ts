import { ethers } from "hardhat";

async function main() {
  //Max NFTs
  const MAX_NFTS = 100;

  // Deploy the CryptoDevsNFT contract first
  const CryptoDevsNFT = await ethers.getContractFactory("CryptoDevsNFT");
  const cryptoDevsNFT = await CryptoDevsNFT.deploy(MAX_NFTS);
  await cryptoDevsNFT.deployed();
  console.log("Deployed CryptoDevsNFT contract at address:", cryptoDevsNFT.address);

  // Deploy the FakeNFTMarketplace contract
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const NftMarketplace = await NFTMarketplace.deploy();
  await NftMarketplace.deployed();
  console.log("Deployed FakeNFTMarketplace at address:", NftMarketplace.address);

  // Deploy the DAO Contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    NftMarketplace.address,
    cryptoDevsNFT.address
  );
  await cryptoDevsDAO.deployed();
  console.log("Deployed CryptoDevsDAO at address:", cryptoDevsDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
