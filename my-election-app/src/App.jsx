import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import StickyNavbar from './components/Navbar.jsx'
import ElectionLanding from './components/ElectionLanding.jsx'
import Footer from './components/Footer.jsx'
import AuthScreen from './components/AuthScreen.jsx'
import VotingPage from './components/VotingPage.jsx'

function App() {
  return(
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <div>
              <StickyNavbar />
              <ElectionLanding />
              <Footer />
            </div>
          }
        />
        <Route
          path="/voting"
          element={
            <div>
              <StickyNavbar />
              <VotingPage />
              <Footer />
            </div>
          }
        />

        {/* Route without Navbar and Footer */}
        <Route path="/auth" element={<AuthScreen />} />
      </Routes>
    </Router>
  )
}

export default App
