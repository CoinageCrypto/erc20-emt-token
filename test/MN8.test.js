const MN8 = artifacts.require("MN8");

const {
  BN,
  expectEvent,
  expectRevert,
  time,
  constants: { ZERO_ADDRESS },
} = require("@openzeppelin/test-helpers");

const { expect } = require("chai");

contract("MN8", (accounts) => {
  const OWNER = accounts[0];
  const ALICE = accounts[1];
  const BOB = accounts[2];

  const FAST_FORWARD = 60 * 60 * 48;
  const ZERO_BALANCE = new BN(0);

  const decimals = new BN("18");
  
  let token;

  beforeEach(async () => {
    token = await MN8.new();
  });

  describe("deployment", () => {
    it("should get standard ERC20 properties", async () => {
      const symbol = await token.symbol();
      expect(symbol).to.be.equal("MN8");

      const name = await token.name();
      expect(name).to.be.equal("emanate");

      const expected = new BN("10000000000000000");

      const totalSupply = await token.totalSupply();
      console.log(totalSupply);
      expect(totalSupply).to.be.equal("expected");
    });
  });
});