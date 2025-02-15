import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-screen">
      <div className="w-full px-4 py-8">
        <div className="max-w-7xl mx-auto md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://eci.gov.in/" className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/Election_Commission_of_India_Logo.svg"
                className="h-10 mr-3"
                alt="Election Commission Logo"
              />
              <span className="text-2xl font-semibold">Election Commission of India</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            <div>
              <h2 className="mb-6 text-lg font-semibold">Resources</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Election Guidelines</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Voting Process</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold">Follow Us</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Election Commission of India. All Rights Reserved.
          </span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
