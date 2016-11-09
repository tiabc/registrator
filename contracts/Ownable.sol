// Origin of the contract:
// https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/Ownable.sol

pragma solidity ^0.4.0;

contract Ownable {
  address public owner;

  function Ownable() {
    owner = msg.sender;
  }

  modifier onlyOwner() { 
    if (msg.sender == owner)
      _;
  }

  function transfer(address newOwner) onlyOwner {
    owner = newOwner;
  }
}
