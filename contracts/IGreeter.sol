// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IGreeter {
    function sayHello() external pure returns (string memory);

    function sayGoodbye() external pure returns (string memory);
}
