import { useState } from 'react';

function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [inputPassword, setInputPassword] = useState('');
  const [generatedPasswordStrength, setGeneratedPasswordStrength] = useState(0);
  const [inputPasswordStrength, setInputPasswordStrength] = useState(0);


  const generatePassword = (length) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setGeneratedPassword(password);
    calculateStrength(password, 'generated');
  };


  const calculateStrength = (password, type) => {
    let strength = 0;

    // Length: Add points for longer passwords
    if (password.length >= 8) strength += 20;
    if (password.length >= 12) strength += 20;
    if (password.length >= 16) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/\d/.test(password)) strength += 20;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 20;

    if (type === 'generated') {
      setGeneratedPasswordStrength(Math.min(strength, 100)); 
    } else {
      setInputPasswordStrength(Math.min(strength, 100)); 
    }
  };


  const handleInputChange = (e) => {
    const password = e.target.value;
    setInputPassword(password);
  };


  const checkUserPasswordStrength = () => {
    calculateStrength(inputPassword, 'input'); 
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Random Password Generator</h1>

      <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white">
        {/* Password Length Control for Generated Password */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Password Length</label>
          <input
            type="number"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>


        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Generated Password</label>
          <input
            type="text"
            value={generatedPassword}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>


        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Generated Password Strength</label>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${generatedPasswordStrength}%` }}
            ></div>
          </div>
          <span>{generatedPasswordStrength}%</span>
        </div>

   
        <button
          onClick={() => generatePassword(passwordLength)}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Generate Password
        </button>

   
        <div className="mt-6">
          <label className="block text-lg font-medium mb-2">Check Your Password Strength</label>
          <input
            type="text"
            value={inputPassword}
            onChange={handleInputChange}
            placeholder="Paste your password here"
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>

        <button
          onClick={checkUserPasswordStrength}
          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mt-4"
        >
          Check Password Strength
        </button>

      
        <div className="mt-4">
          <label className="block text-lg font-medium mb-2">Your Password Strength</label>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${inputPasswordStrength}%` }}
            ></div>
          </div>
          <span>{inputPasswordStrength}%</span>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;

