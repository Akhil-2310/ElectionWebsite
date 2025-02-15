import React from 'react';

const candidates = [
  { id: 1, name: 'Candidate A', age: 45, constituency: 'District 1' },
  { id: 2, name: 'Candidate B', age: 50, constituency: 'District 2' },
  { id: 3, name: 'Candidate C', age: 42, constituency: 'District 3' },
  { id: 4, name: 'Candidate D', age: 38, constituency: 'District 4' }
];

const VotingPage = () => {
  const handleVote = (candidateName) => {
    alert(`You have voted for ${candidateName}`);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Vote for Your Candidate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full">
            <h2 className="text-2xl font-semibold mb-2">{candidate.name}</h2>
            <p className="text-gray-400">Age: {candidate.age}</p>
            <p className="text-gray-400 mb-4">Constituency: {candidate.constituency}</p>
            <button
              onClick={() => handleVote(candidate.name)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Cast Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingPage;
