// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ExperienceTimeline {
    struct TimelineEvent {
        string category; // "Experience", "Education", "Certification"
        string date;
        string title;
        string company;
        string description;
    }

    TimelineEvent[] public timeline;
    mapping(address => bool) public admins;
    address public contractOwner;

    event TimelineEventAdded(uint256 eventId, string title);
    event TimelineEventUpdated(uint256 eventId, string title);
    event TimelineEventDeleted(uint256 eventId);

    constructor() {
        contractOwner = msg.sender;
        admins[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admins can perform this action");
        _;
    }

    function addTimelineEvent(
        string memory _category,
        string memory _date,
        string memory _title,
        string memory _company,
        string memory _description
    ) public onlyAdmin {
        timeline.push(TimelineEvent({
            category: _category,
            date: _date,
            title: _title,
            company: _company,
            description: _description
        }));
        emit TimelineEventAdded(timeline.length - 1, _title);
    }

    function updateTimelineEvent(
        uint256 _eventId,
        string memory _category,
        string memory _date,
        string memory _title,
        string memory _company,
        string memory _description
    ) public onlyAdmin {
        require(_eventId < timeline.length, "Event does not exist");
        TimelineEvent storage eventToUpdate = timeline[_eventId];
        eventToUpdate.category = _category;
        eventToUpdate.date = _date;
        eventToUpdate.title = _title;
        eventToUpdate.company = _company;
        eventToUpdate.description = _description;
        emit TimelineEventUpdated(_eventId, _title);
    }

    function deleteTimelineEvent(uint256 _eventId) public onlyAdmin {
        require(_eventId < timeline.length, "Event does not exist");
        for (uint i = _eventId; i < timeline.length - 1; i++) {
            timeline[i] = timeline[i+1];
        }
        timeline.pop();
        emit TimelineEventDeleted(_eventId);
    }

    function getTimeline() public view returns (TimelineEvent[] memory) {
        return timeline;
    }
}
