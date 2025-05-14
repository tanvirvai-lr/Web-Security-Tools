import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <FaShieldAlt className="text-2xl" />
            <span>WebSecurityTools</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/vulnerability-check" className="hover:text-gray-300">Vulnerability Check</Link>
            <Link to="/vigenere" className="hover:text-gray-300">Vigenère Cipher</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block hover:text-gray-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/vulnerability-check"
              className="block hover:text-gray-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vulnerability Check
            </Link>
            <Link
              to="/vigenere"
              className="block hover:text-gray-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vigenère Cipher
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;