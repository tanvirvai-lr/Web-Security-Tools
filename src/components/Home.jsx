// import { Link } from 'react-router-dom';
// import { FaShieldAlt, FaLock } from 'react-icons/fa';

// function Home() {
//   return (
//     <div className="container mx-auto p-4 sm:p-6">
//       <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Web Security Tools</h1>

//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         <Link 
//           to="/vulnerability-check"
//           className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <FaShieldAlt className="text-3xl text-blue-600" />
//             <h2 className="text-2xl font-semibold">Vulnerability Scanner</h2>
//           </div>
//           <p className="text-gray-600 mb-4">
//             Check websites for common security vulnerabilities and misconfigurations.
//             Our tool analyzes headers, certificates, and common security practices.
//           </p>
//           <ul className="list-disc list-inside text-gray-600 space-y-2">
//             <li>XSS Protection Analysis</li>
//             <li>Content Security Policy Check</li>
//             <li>SSL/TLS Configuration</li>
//             <li>Security Headers Inspection</li>
//           </ul>
//         </Link>

//         <Link 
//           to="/vigenere"
//           className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <FaLock className="text-3xl text-blue-600" />
//             <h2 className="text-2xl font-semibold">Vigenère Cipher</h2>
//           </div>
//           <p className="text-gray-600 mb-4">
//             A classical polyalphabetic substitution cipher for encrypting and
//             decrypting text using a keyword-based method.
//           </p>
//           <ul className="list-disc list-inside text-gray-600 space-y-2">
//             <li>Text Encryption</li>
//             <li>Text Decryption</li>
//             <li>Custom Key Support</li>
//             <li>Preserves Non-Alphabetic Characters</li>
//           </ul>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;


import { Link } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaKey } from 'react-icons/fa';

function Home() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Web Security Tools</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link
          to="/vulnerability-check"
          className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold">Vulnerability Scanner</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Check websites for common security vulnerabilities and misconfigurations.
            Our tool analyzes headers, certificates, and common security practices.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>XSS Protection Analysis</li>
            <li>Content Security Policy Check</li>
            <li>SSL/TLS Configuration</li>
            <li>Security Headers Inspection</li>
          </ul>
        </Link>

        <Link
          to="/vigenere"
          className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLock className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold">Vigenère Cipher</h2>
          </div>
          <p className="text-gray-600 mb-4">
            A classical polyalphabetic substitution cipher for encrypting and
            decrypting text using a keyword-based method.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Text Encryption</li>
            <li>Text Decryption</li>
            <li>Custom Key Support</li>
            <li>Preserves Non-Alphabetic Characters</li>
          </ul>
        </Link>

        <Link
          to="/password-generator"
          className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaKey className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-semibold">Strong Password Generator</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Generate a random strong password with a mix of uppercase, lowercase, numbers, and special characters.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
