// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Counters.sol";

contract VisitorBook {
    using Counters for Counters.Counter;
    Counters.Counter private _messageIds;

    struct Message {
        uint256 id;
        address sender;
        string name;
        string message;
        uint256 timestamp;
    }

    Message[] public messages;
    uint256 public fee = 0.001 ether;

    event MessageSent(uint256 id, address indexed sender, string name, string message);

    function sendMessage(string memory _name, string memory _message) public payable {
        require(msg.value >= fee, "A small fee is required to prevent spam");
        
        _messageIds.increment();
        uint256 newMessageId = _messageIds.current();

        messages.push(Message({
            id: newMessageId,
            sender: msg.sender,
            name: _name,
            message: _message,
            timestamp: block.timestamp
        }));
        
        emit MessageSent(newMessageId, msg.sender, _name, _message);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }

    function updateFee(uint256 _newFee) public {
        // In a real scenario, this would be restricted (e.g., only owner)
        fee = _newFee;
    }

    function withdraw() public {
        // In a real scenario, this would be restricted (e.g., only owner)
        payable(msg.sender).transfer(address(this).balance);
    }
}
