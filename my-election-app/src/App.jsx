"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/home-page"
import AllElectionsPage from "./pages/all-elections-page"
import ElectionPage from "./pages/election-page"
import ElectionResultsPage from "./pages/election-results-page"

function App() {
  // Wallet connection state (just UI, actual implementation will be done by user)
  const [walletConnected, setWalletConnected] = useState(false)

  const connectWallet = () => {
    setWalletConnected(true)
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar walletConnected={walletConnected} connectWallet={connectWallet} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/elections" element={<AllElectionsPage />} />
            <Route path="/election/:id" element={<ElectionPage />} />
            <Route path="/results" element={<ElectionResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

