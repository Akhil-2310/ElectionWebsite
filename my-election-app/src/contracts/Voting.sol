// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedVoting {
    // Candidate structure with a name and vote counter.
    struct Candidate {
        string name;
        uint voteCount;
    }

    // Election structure stores election details, candidate list,
    // and a mapping to track if an address has voted.
    struct Election {
        string title;
        string description;
        uint startTime;
        uint endTime;
        bool exists;
        Candidate[] candidates;
        mapping(address => bool) hasVoted;
    }

    // A counter to track elections and a mapping from an election ID to an Election.
    uint public electionCount;
    mapping(uint => Election) private elections;

    // Events for logging election creation, candidate addition, and voting.
    event ElectionCreated(
        uint indexed electionId,
        string title,
        string description,
        uint startTime,
        uint endTime
    );
    event CandidateAdded(
        uint indexed electionId,
        uint candidateIndex,
        string candidateName
    );
    event VoteCast(
        uint indexed electionId,
        uint candidateIndex,
        address voter
    );

    /// @notice Create a new election.
    /// @param _title The title of the election.
    /// @param _description A short description of the election.
    /// @param _startTime The timestamp when the election starts.
    /// @param _endTime The timestamp when the election ends.
    function createElection(
        string memory _title,
        string memory _description,
        uint _startTime,
        uint _endTime
    ) public {
        require(_endTime > _startTime, "End time must be after start time");
        require(_startTime >= block.timestamp, "Start time must be in the future");

        electionCount++;
        Election storage newElection = elections[electionCount];
        newElection.title = _title;
        newElection.description = _description;
        newElection.startTime = _startTime;
        newElection.endTime = _endTime;
        newElection.exists = true;

        emit ElectionCreated(electionCount, _title, _description, _startTime, _endTime);
    }

    /// @notice Add a candidate to an existing election.
    /// @param _electionId The ID of the election.
    /// @param _candidateName The name of the candidate.
    function addCandidate(uint _electionId, string memory _candidateName) public {
        Election storage election = elections[_electionId];
        require(election.exists, "Election does not exist");
        // Allow candidate addition only if the election hasn't started yet.
        require(block.timestamp < election.startTime, "Can't add candidate after election has started");

        election.candidates.push(Candidate({
            name: _candidateName,
            voteCount: 0
        }));

        emit CandidateAdded(_electionId, election.candidates.length - 1, _candidateName);
    }

    /// @notice Vote for a candidate in an election.
    /// @param _electionId The ID of the election.
    /// @param _candidateIndex The index of the candidate in the election's candidate list.
    function vote(uint _electionId, uint _candidateIndex) public {
        Election storage election = elections[_electionId];
        require(election.exists, "Election does not exist");
        require(block.timestamp >= election.startTime, "Election has not started yet");
        require(block.timestamp <= election.endTime, "Election has ended");
        require(!election.hasVoted[msg.sender], "Already voted");
        require(_candidateIndex < election.candidates.length, "Invalid candidate index");

        // Record the vote.
        election.candidates[_candidateIndex].voteCount++;
        election.hasVoted[msg.sender] = true;

        emit VoteCast(_electionId, _candidateIndex, msg.sender);
    }

    /// @notice Get details of an election.
    /// @param _electionId The ID of the election.
    /// @return title The election title.
    /// @return description The election description.
    /// @return startTime The timestamp when the election starts.
    /// @return endTime The timestamp when the election ends.
    /// @return candidateNames An array of candidate names.
    /// @return votes An array of vote counts corresponding to each candidate.
    function getElectionDetails(uint _electionId)
        public
        view
        returns (
            string memory title,
            string memory description,
            uint startTime,
            uint endTime,
            string[] memory candidateNames,
            uint[] memory votes
        )
    {
        Election storage election = elections[_electionId];
        require(election.exists, "Election does not exist");

        uint candidateCount = election.candidates.length;
        candidateNames = new string[](candidateCount);
        votes = new uint[](candidateCount);

        for (uint i = 0; i < candidateCount; i++) {
            candidateNames[i] = election.candidates[i].name;
            votes[i] = election.candidates[i].voteCount;
        }

        return (election.title, election.description, election.startTime, election.endTime, candidateNames, votes);
    }

    /// @notice Get the final results of an election. Can only be called after the election has ended.
    /// @param _electionId The ID of the election.
    /// @return title The election title.
    /// @return description The election description.
    /// @return candidateNames An array of candidate names.
    /// @return votes An array of final vote counts for each candidate.
    function getElectionResults(uint _electionId)
        public
        view
        returns (
            string memory title,
            string memory description,
            string[] memory candidateNames,
            uint[] memory votes
        )
    {
        Election storage election = elections[_electionId];
        require(election.exists, "Election does not exist");
        require(block.timestamp > election.endTime, "Election is still active");

        uint candidateCount = election.candidates.length;
        candidateNames = new string[](candidateCount);
        votes = new uint[](candidateCount);

        for (uint i = 0; i < candidateCount; i++) {
            candidateNames[i] = election.candidates[i].name;
            votes[i] = election.candidates[i].voteCount;
        }

        return (election.title, election.description, candidateNames, votes);
    }
}
