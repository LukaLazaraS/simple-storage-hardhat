import { ethers, run, network } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

async function main() {
  const SimpleStorageFactory: SimpleStorage__factory = await ethers.getContractFactory("SimpleStorage");
  const SimpleStorage: SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Contract deploed to + ${SimpleStorage.address}`);

  if (network.name !== "hardhat" && process.env.ETHERSCAN_API_KEY) {
    await SimpleStorage.deployTransaction.wait(6);
    verify(SimpleStorage.address, []);
  }
}

async function verify(contractAddress: string, args: any[]) {
  console.log("verifying");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constuctorArguments: args,
    });
  } catch (e: unknown) {
    console.log(e);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
