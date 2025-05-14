import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import VulnerabilityCheck from './components/VulnerabilityCheck';
import VigenereCipher from './components/VigenereCipher';
import PasswordGenerator from './components/PasswordGenerator'; // Import PasswordGenerator
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vulnerability-check" element={<VulnerabilityCheck />} />
            <Route path="/vigenere" element={<VigenereCipher />} />
            <Route path="/password-generator" element={<PasswordGenerator />} /> {/* Add PasswordGenerator Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
