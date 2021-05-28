/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('Say', async function () {
  let Say, say, Greeter, greeter;
  beforeEach(async function () {
    Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.deploy();
    await greeter.deployed();
    Say = await ethers.getContractFactory('Say');
    say = await Say.deploy(greeter.address);
    await say.deployed();
  });

  it('Should return "Hello world!"', async function () {
    expect(await say.hello()).to.equal('Hello world!');
  });
  it('Should return "Goodbye"', async function () {
    expect(await say.bye()).to.equal('Goodbye');
  });
  it('Should return Greeter address', async function () {
    expect(await say.greeter()).to.equal(greeter.address);
  });
});
