const hre = require("hardhat");

async function main() {
  const tokenName = "USDT";
  const symbol = "USDT";
  const totalSupply = 10**6;
  const decimals = 18;

  const USDTToken = await hre.ethers.getContractFactory("USDTToken");

  const token = await USDTToken.deploy(tokenName, symbol, decimals, totalSupply);
  await token.deployed();
  console.log("Token deployed to:", token.address);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });



  