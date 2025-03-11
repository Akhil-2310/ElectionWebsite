"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"

const ElectionPage = () => {
  const { id } = useParams()
  const [showAddCandidateForm, setShowAddCandidateForm] = useState(false)

  // Mock election data - in a real app, this would be fetched from the blockchain
  const [election, setElection] = useState({
    id: Number.parseInt(id),
    name: "Board of Directors Election",
    description: "Annual election for the board of directors",
    startTime: "2023-06-01T09:00",
    endTime: "2023-06-07T18:00",
    status: "Active",
    candidates: [
      { id: 1, name: "John Doe", description: "Current board member, 5 years experience" },
      { id: 2, name: "Jane Smith", description: "Financial expert, new candidate" },
    ],
  })

  const [newCandidate, setNewCandidate] = useState({
    name: "",
    description: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewCandidate({
      ...newCandidate,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would connect to the blockchain
    const newId = election.candidates.length + 1
    setElection({
      ...election,
      candidates: [
        ...election.candidates,
        {
          id: newId,
          ...newCandidate,
        },
      ],
    })
    setNewCandidate({
      name: "",
      description: "",
    })
    setShowAddCandidateForm(false)
  }

  const handleVote = (candidateId) => {
    // In a real app, this would connect to the blockchain to cast a vote
    alert(`Vote cast for candidate ${candidateId}! (This would connect to the blockchain in a real app)`)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{election.name}</h1>
            <p className="mt-1 text-sm text-gray-500">{election.description}</p>
            <div className="mt-2 flex items-center">
              <div
                className={`flex-shrink-0 flex ${
                  election.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : election.status === "Completed"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{election.status}</p>
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {new Date(election.startTime).toLocaleString()} - {new Date(election.endTime).toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAddCandidateForm(!showAddCandidateForm)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {showAddCandidateForm ? "Cancel" : "Add Candidate"}
          </button>
        </div>

        {/* Add Candidate Form */}
        {showAddCandidateForm && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Candidate</h3>
              <form onSubmit={handleSubmit} className="mt-5 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={newCandidate.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    value={newCandidate.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowAddCandidateForm(false)}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Candidates List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Candidates</h3>
            <p className="mt-1 text-sm text-gray-500">
              Vote for your preferred candidate by clicking the "Vote" button.
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {election.candidates.map((candidate) => (
              <li key={candidate.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{candidate.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{candidate.description}</p>
                  </div>
                  <button
                    onClick={() => handleVote(candidate.id)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Vote
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ElectionPage

