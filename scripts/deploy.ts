// scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ProjectRegistry = await ethers.getContractFactory("ProjectRegistry");
  const projectRegistry = await ProjectRegistry.deploy();

  await projectRegistry.waitForDeployment();

  const contractAddress = await projectRegistry.getAddress();
  console.log("ProjectRegistry deployed to:", contractAddress);
  
  // You can now call functions to add initial data if needed
  console.log("Adding initial projects...");
  await projectRegistry.addProject(
    "Decentralized Voting System",
    "A secure and transparent voting application built on the Ethereum blockchain, ensuring tamper-proof results.",
    ["Solidity", "React", "Ethers.js", "Hardhat", "IPFS"],
    "https://github.com/anishsingh90/d-vote",
    "https://d-vote.anishkumar.dev"
  );
   await projectRegistry.addProject(
    "NFT Marketplace",
    "A full-featured platform for minting, buying, and selling Non-Fungible Tokens (NFTs) with low gas fees.",
    ["Next.js", "TypeScript", "Solidity", "Polygon", "Tailwind CSS"],
    "https://github.com/anishsingh90/nft-market",
    "https://nft-market.anishkumar.dev"
  );
  console.log("Initial projects added.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
