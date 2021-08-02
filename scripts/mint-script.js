const hre = require("hardhat");
require('dotenv').config();


const WALLET_ADDRESS=process.env.WALLET_ADDRESS;
const CONTRACT_ADDRESS=process.env.CONTRACT_ADDRESS;

async function main() {
  const NFT = await hre.ethers.getContractFactory("PolygonNFT");
  const URI = "ipfs://QmVz6fyNRpPzMwodAbszYmqaGPUjibid3LxMW12cXL4dv9"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});