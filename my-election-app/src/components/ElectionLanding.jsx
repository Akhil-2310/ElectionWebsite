import React from 'react';

const ElectionLanding = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center w-screen">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">India's Largest Blockchain-Based Election</h1>
        <p className="text-xl text-gray-300 mb-8">
          Ensuring secure, transparent, and decentralized voting for a stronger democracy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-white">28 States Participating</h2>
            <p className="text-gray-400 mt-2">Every state in India is contributing to a historic decentralized election.</p>
          </div>
          <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-white">900M+ Voters</h2>
            <p className="text-gray-400 mt-2">Join millions of citizens in shaping the future of the nation.</p>
          </div>
          <div className="bg-gray-800 p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-white">Blockchain Secured</h2>
            <p className="text-gray-400 mt-2">Decentralized and tamper-proof voting to ensure fair elections.</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-8 shadow-lg rounded-lg text-left w-full">
          <h2 className="text-4xl font-semibold text-blue-400 mb-6">Meet the Candidates</h2>
          <p className="text-gray-300 text-lg mb-4">Get to know the leaders who are shaping the future of the country.</p>
          <ul className="list-disc list-inside text-gray-400 text-lg">
            <li>Candidate A - Party XYZ - Focus on economic growth and technology.</li>
            <li>Candidate B - Party ABC - Advocating for social justice and equality.</li>
            <li>Candidate C - Independent - Bringing a fresh perspective to politics.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElectionLanding;
