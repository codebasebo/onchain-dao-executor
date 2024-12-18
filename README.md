# CryptoDevs DAO

A decentralized autonomous organization (DAO) built on Ethereum that allows NFT holders to participate in governance with automatic proposal execution.

## Overview

This project consists of three main smart contracts:
- [`CryptoDevsNFT`](contracts/CryptoDevsNFT.sol): ERC721 NFT contract for minting Crypto Devs NFTs
- [`NFTMarketplace`](contracts/NFTMarketplace.sol): Contract for trading NFTs
- [`CryptoDevsDAO`](contracts/CryptoDevsDAO.sol): DAO governance contract

## Prerequisites

- Node.js 14+ 
- npm or yarn
- Hardhat

## Features

- NFT-based membership system
- Automated proposal execution
- Treasury management
- On-chain voting
- Buy/Sell NFT proposals
- Automatic vote counting

## Architecture

- Members join by depositing NFTs into the DAO
- Each NFT represents 1 vote
- Proposals automatically execute after deadline if passed
- Members can quit after 30 days and receive treasury share

## Usage

### Installation

```bash
npm install
npx hardhat run scripts/deploy.ts
```

## Technical Details
### Proposal Lifecycle
Member creates proposal (Buy/Sell NFT)
24 hour voting period starts
Members vote with NFT-based voting power
After deadline, anyone can trigger execution
If passed, proposal executes automatically

### Security Features
Membership NFTs locked during voting
Vote delegation not allowed
One vote per NFT
30 day minimum membership period
Automatic treasury share calculation