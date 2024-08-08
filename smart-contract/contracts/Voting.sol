// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Voting {
    // struct for all the proposals.
    struct Proposal {
        uint voteCount;
        string title;
        string description;
        address creator;
    }
    // struct for all the voters
    struct Voter {
        bool hasVoted;
    }

    mapping(address => Voter) public voters;
    uint public proposalCount;   
    // List of all proposals
    Proposal[] public proposals;

    event CreateProposal(string title, string description, address creator);
    event Voted(string title, address voter);

    modifier proposalExists(uint proposalId) {
        require (proposalId < proposals.length, "Proposal does not exist.");
        _;
    }
    modifier hasNotVoted() {
        require (!voters[msg.sender].hasVoted, "You have already voted!");
        _;
    }

    // To vote a proposal
    function vote(uint proposalId) public proposalExists(proposalId) hasNotVoted{
        voters[msg.sender].hasVoted = true;
        proposals[proposalId].voteCount++;
        emit Voted( proposals[proposalId].title, msg.sender);
    }

    // To create new proposal
    function newProposal(string memory _title, string memory _description) public {
        proposals.push(Proposal({
            title: _title,
            voteCount: 0,
            creator: msg.sender,
            description: _description
        }));
        emit CreateProposal(_title, _description, msg.sender );
        proposalCount++;
    }
    // To get list of all proposals
    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
    // To get vote count of a proposal
    function getVoteCount(uint proposalId) public view proposalExists(proposalId) returns (uint) {
        return proposals[proposalId].voteCount;
    }
    // To get the details of a proposal
    function getProposalDetails(uint proposalId) public view proposalExists(proposalId) returns (string memory, string memory, uint, address) {
        Proposal memory proposal = proposals[proposalId];
        return (proposal.title, proposal.description, proposal.voteCount, proposal.creator);
    }  
}