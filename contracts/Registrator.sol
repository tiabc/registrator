pragma solidity ^0.4.4;

import "Ownable.sol";

contract Registrator is Ownable {
  struct Meta {
    address sender;
    uint time;
  }

  event StatusEvent(bytes32);
  mapping (bytes32  => Meta) public records;
  function register(bytes32 hash) onlyOwner {
    if (records[hash].time != 0){
      StatusEvent(0);
      return;
    }
    records[hash].sender = msg.sender;
    records[hash].time = now;
    StatusEvent(hash);
    return;
  }

  function GetRecord(bytes32 hash) returns (address sender, uint time) {
    return (records[hash].sender, records[hash].time);
  }
}
