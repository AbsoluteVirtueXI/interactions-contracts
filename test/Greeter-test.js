/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('Greeter', async function () {
  let Greeter, greeter;
  beforeEach(async function () {
    Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.deploy();
    await greeter.deployed();
  });

  it('Should return "Hello world!"', async function () {
    expect(await greeter.sayHello()).to.equal('Hello world!');
  });
  it('Should return "Goodbye"', async function () {
    expect(await greeter.sayGoodbye()).to.equal('Goodbye');
  });
});
