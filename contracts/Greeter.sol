// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IGreeter.sol";

contract Greeter is IGreeter {
    function sayHello() public pure override returns (string memory) {
        return "Hello world!";
    }

    function sayGoodbye() public pure override returns (string memory) {
        return "Goodbye";
    }
}
