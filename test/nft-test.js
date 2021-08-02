const { expect } = require("chai");
describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("PolygonNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0x77Fb5C4889E87B17cb3F6ab2fe297337C831015C", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});