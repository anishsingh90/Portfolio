// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ProjectRegistry.sol";
import "./ExperienceTimeline.sol";
import "./VisitorBook.sol";
import "./AchievementNFT.sol";

contract Portfolio is ProjectRegistry, ExperienceTimeline, VisitorBook {
    address public owner;
    string public ensName;

    mapping(address => bool) public endorsers;

    event Endorsed(address indexed endorser);
    event ENSNameUpdated(string newName);

    constructor(string memory _ensName) {
        owner = msg.sender;
        ensName = _ensName;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function verifySignature(bytes32 _messageHash, bytes memory _signature) public pure returns (address) {
        return recoverSigner(_messageHash, _signature);
    }

    function getMessageHash(string memory _message) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n", Strings.toString(bytes(_message).length), _message));
    }

    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature) internal pure returns (address) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory sig) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig.length == 65, "Invalid signature length");
        assembly {
            r := mload(add(sig, 32))
            s := mload(add(sig, 64))
            v := byte(0, mload(add(sig, 96)))
        }
    }

    function endorse() public {
        require(msg.sender != owner, "Owner cannot endorse themselves");
        endorsers[msg.sender] = true;
        emit Endorsed(msg.sender);
    }

    function setENSName(string memory _newName) public onlyOwner {
        ensName = _newName;
        emit ENSNameUpdated(_newName);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }
}
