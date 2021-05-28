// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./Greeter.sol" works too
import "./IGreeter.sol";

contract Say {
    IGreeter private _greeter;

    constructor(address greeterAddress) {
        _greeter = IGreeter(greeterAddress);
    }

    function hello() public view returns (string memory) {
        return _greeter.sayHello();
    }

    function bye() public view returns (string memory) {
        return _greeter.sayGoodbye();
    }

    function greeter() public view returns (address) {
        return address(_greeter);
    }
}
