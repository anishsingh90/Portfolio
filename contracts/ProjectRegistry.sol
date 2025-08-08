// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ProjectRegistry is Ownable {
    struct Project {
        string title;
        string description;
        string[] tags;
        string githubLink;
        string liveDemoLink;
    }

    Project[] private _projects;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addProject(
        string memory title,
        string memory description,
        string[] memory tags,
        string memory githubLink,
        string memory liveDemoLink
    ) public onlyOwner {
        _projects.push(Project(title, description, tags, githubLink, liveDemoLink));
    }

    function getProjects() public view returns (Project[] memory) {
        return _projects;
    }

    function getProjectCount() public view returns (uint256) {
        return _projects.length;
    }
}
