// import { useState } from 'react';
// import { vigenereEncrypt, vigenereDecrypt } from '../utils/vigenere';

// function VigenereCipher() {
//   const [text, setText] = useState('');
//   const [key, setKey] = useState('');
//   const [result, setResult] = useState('');
//   const [mode, setMode] = useState('encrypt');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const processedResult = mode === 'encrypt' 
//       ? vigenereEncrypt(text, key)
//       : vigenereDecrypt(text, key);
//     setResult(processedResult);
//   };

//   return (
//     <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6">Vigenère Cipher</h1>

//       <div className="mb-6">
//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={() => setMode('encrypt')}
//             className={`px-4 py-2 rounded-lg transition-colors ${
//               mode === 'encrypt'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Encrypt
//           </button>
//           <button
//             onClick={() => setMode('decrypt')}
//             className={`px-4 py-2 rounded-lg transition-colors ${
//               mode === 'decrypt'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             Decrypt
//           </button>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
//         <div>
//           <label className="block mb-2 font-medium">Text:</label>
//           <textarea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none min-h-[100px]"
//             placeholder={mode === 'encrypt' ? 'Enter text to encrypt' : 'Enter text to decrypt'}
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">Key:</label>
//           <input
//             type="text"
//             value={key}
//             onChange={(e) => setKey(e.target.value)}
//             className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
//             placeholder="Enter encryption/decryption key"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2">Result:</h2>
//           <div className="p-4 bg-gray-50 rounded-lg border">
//             <pre className="whitespace-pre-wrap break-words">{result}</pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VigenereCipher;


import { useState } from 'react';
import { vigenereEncrypt, vigenereDecrypt } from '../utils/vigenere';

const VigenereCipher = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('encrypt');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !key) {
      alert("Both text and key are required!");
      return;
    }

    try {
      const processedResult = mode === 'encrypt'
        ? vigenereEncrypt(text, key)
        : vigenereDecrypt(text, key);
      setResult(processedResult);
    } catch (error) {
      console.error("Error processing the text:", error);
      alert("An error occurred while processing the text.");
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Vigenère Cipher</h1>

      <div className="mb-6">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setMode('encrypt')}
            className={`px-4 py-2 rounded-lg transition-colors ${mode === 'encrypt'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Encrypt
          </button>
          <button
            onClick={() => setMode('decrypt')}
            className={`px-4 py-2 rounded-lg transition-colors ${mode === 'decrypt'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Decrypt
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block mb-2 font-medium">Text:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none min-h-[100px]"
            placeholder={mode === 'encrypt' ? 'Enter text to encrypt' : 'Enter text to decrypt'}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Key:</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
            placeholder="Enter encryption/decryption key"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <pre className="whitespace-pre-wrap break-words">{result}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default VigenereCipher;
