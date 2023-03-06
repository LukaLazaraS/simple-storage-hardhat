import { ethers } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deploed to + ${SimpleStorage.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
