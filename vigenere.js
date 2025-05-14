export const vigenereEncrypt = (text, key) => {
  console.log("Encrypting text:", text, "with key:", key);
  let result = '';
  const normalizedKey = key.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const keyChar = normalizedKey[i % normalizedKey.length];
    const keyOffset = keyChar.charCodeAt(0) % 32;

    if (char >= 'A' && char <= 'Z') {
      const encryptedChar = ((char.charCodeAt(0) - 65 + keyOffset) % 26) + 65;
      result += String.fromCharCode(encryptedChar);
    } else if (char >= 'a' && char <= 'z') {
      const encryptedChar = ((char.charCodeAt(0) - 97 + keyOffset) % 26) + 97;
      result += String.fromCharCode(encryptedChar);
    } else if (char >= '0' && char <= '9') {
      const encryptedChar = ((char.charCodeAt(0) - 48 + keyOffset) % 10) + 48;
      result += String.fromCharCode(encryptedChar);
    } else {
      result += char;
    }
  }

  console.log("Encrypted Result:", result);
  return result;
};

export const vigenereDecrypt = (text, key) => {
  console.log("Decrypting text:", text, "with key:", key);
  let result = '';
  const normalizedKey = key.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const keyChar = normalizedKey[i % normalizedKey.length];
    const keyOffset = keyChar.charCodeAt(0) % 32;

    if (char >= 'A' && char <= 'Z') {
      const decryptedChar = ((char.charCodeAt(0) - 65 - keyOffset + 26) % 26) + 65;
      result += String.fromCharCode(decryptedChar);
    } else if (char >= 'a' && char <= 'z') {
      const decryptedChar = ((char.charCodeAt(0) - 97 - keyOffset + 26) % 26) + 97;
      result += String.fromCharCode(decryptedChar);
    } else if (char >= '0' && char <= '9') {
      const decryptedChar = ((char.charCodeAt(0) - 48 - keyOffset + 10) % 10) + 48;
      result += String.fromCharCode(decryptedChar);
    } else {
      result += char;
    }
  }

  console.log("Decrypted Result:", result);
  return result;
};
