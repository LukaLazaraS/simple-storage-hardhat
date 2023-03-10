import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { expect, assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SImpleStorage", () => {
  let simpleStorage: SimpleStorage;
  let simpleStorageFactory: SimpleStorage__factory;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start wiht a favorite number of 0", async () => {
    const currentValue: BigNumber = await simpleStorage.retrieve();
    const expectedValue: number = 0;

    // assert.equal(currentValue, expectedValue);
    expect(currentValue).to.equal(expectedValue);
  });

  it("should update when we call store", async () => {
    const expectedValue: number = 13;
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue: BigNumber = await simpleStorage.retrieve();

    // assert.equal(currentValue, expectedValue);
    expect(currentValue).to.equal(expectedValue);
  });
});
