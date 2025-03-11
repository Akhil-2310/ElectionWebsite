"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const ElectionResultsPage = () => {
  // Mock election results data - in a real app, this would be fetched from the blockchain
  const [elections, setElections] = useState([
    {
      id: 1,
      name: "Board of Directors Election",
      description: "Annual election for the board of directors",
      status: "Active",
      results: [
        { candidateId: 1, candidateName: "John Doe", votes: 24 },
        { candidateId: 2, candidateName: "Jane Smith", votes: 18 },
      ],
      totalVotes: 42,
    },
    {
      id: 2,
      name: "Community Proposal Vote",
      description: "Vote on the new community center proposal",
      status: "Completed",
      results: [
        { candidateId: 1, candidateName: "Proposal A", votes: 156 },
        { candidateId: 2, candidateName: "Proposal B", votes: 89 },
        { candidateId: 3, candidateName: "Proposal C", votes: 112 },
      ],
      totalVotes: 357,
    },
  ])

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Election Results</h1>

        {elections.map((election) => (
          <div key={election.id} className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{election.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{election.description}</p>
                </div>
                <div
                  className={`flex-shrink-0 flex ${
                    election.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{election.status}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h4 className="text-md font-medium text-gray-900 mb-4">Results</h4>
              <div className="space-y-4">
                {election.results.map((result) => (
                  <div key={result.candidateId} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium text-gray-700">{result.candidateName}</div>
                      <div className="text-sm font-medium text-gray-900">
                        {result.votes} votes ({Math.round((result.votes / election.totalVotes) * 100)}%)
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${(result.votes / election.totalVotes) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-gray-500">Total votes: {election.totalVotes}</div>
              <div className="mt-4">
                <Link
                  to={`/election/${election.id}`}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View Election Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ElectionResultsPage

