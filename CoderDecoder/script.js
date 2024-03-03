// Morse Code
const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };
  
  const reverseMorseCodeMap = {};
  for (let key in morseCodeMap) {
    reverseMorseCodeMap[morseCodeMap[key]] = key;
  }
  
  // Morse Code Functions
  function morseEncode(text) {
    const encodedText = text
      .toUpperCase()
      .split("")
      .map((char) => morseCodeMap[char] || "")
      .join(" ");
    return encodedText;
  }
  
  function morseDecode(code) {
    const decodedText = code
      .split(" ")
      .map((morse) => reverseMorseCodeMap[morse] || "")
      .join("");
    return decodedText;
  }
  

  
  
  // Binary
  function binaryEncode(text) {
    const binaryText = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    return binaryText;
  }
  
  function binaryDecode(code) {
    const decodedText = code
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
    return decodedText;
  }
  
  // ASCII
  function asciiEncode(text) {
    const encodedText = text
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
    return encodedText;
  }
  
  function asciiDecode(code) {
    const decodedText = code
      .split(" ")
      .map((ascii) => String.fromCharCode(parseInt(ascii)))
      .join("");
    return decodedText;
  }
  
  // Base64
  function base64Encode(text) {
    const encodedText = btoa(text);
    return encodedText;
  }
  
  function base64Decode(code) {
    const decodedText = atob(code);
    return decodedText;
  }
  
  // Caesar Cipher
  function caesarEncode(text, shiftAmount) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textUpper = text.toUpperCase();
    let encodedText = "";
  
    for (let i = 0; i < textUpper.length; i++) {
      const character = textUpper[i];
      if (character === " ") {
        encodedText += " ";
      } else {
        const index = alphabet.indexOf(character);
        const shiftedIndex = (index + shiftAmount) % 26;
        const encodedCharacter = alphabet[shiftedIndex];
        encodedText += encodedCharacter;
      }
    }
  
    return encodedText;
  }
  
  function caesarDecode(code, shiftAmount) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const codeUpper = code.toUpperCase();
    let decodedText = "";
  
    for (let i = 0; i < codeUpper.length; i++) {
      const character = codeUpper[i];
      if (character === " ") {
        decodedText += " ";
      } else {
        const index = alphabet.indexOf(character);
        const shiftedIndex = (index - shiftAmount + 26) % 26;
        const decodedCharacter = alphabet[shiftedIndex];
        decodedText += decodedCharacter;
      }
    }
  
    return decodedText;
  }
  
  document.getElementById("encode-btn").addEventListener("click", () => {
    const codeType = document.getElementById("code-type-select").value;
    const input = document.getElementById("input-text").value.trim();
    let output = "";
  
    switch (codeType) {
      case "morse":
        output = morseEncode(input);
        break;
      case "binary":
        output = binaryEncode(input);
        break;
      case "ascii":
        output = asciiEncode(input);
        break;
      case "base64":
        output = base64Encode(input);
        break;
      case "caesar":
        const shiftAmount = parseInt(
          prompt("Enter the shift amount for Caesar Cipher:")
        );
        output = caesarEncode(input, shiftAmount);
        break;
      default:
        output = "Invalid code type";
        break;
    }
  
    document.getElementById("output-text").value = output;
  });
  
  document.getElementById("decode-btn").addEventListener("click", () => {
    const codeType = document.getElementById("code-type-select").value;
    const input = document.getElementById("input-text").value.trim();
    let output = "";
  
    switch (codeType) {
      case "morse":
        output = morseDecode(input);
        break;
      case "binary":
        output = binaryDecode(input);
        break;
      case "ascii":
        output = asciiDecode(input);
        break;
      case "base64":
        output = base64Decode(input);
        break;
      case "caesar":
        const shiftAmount = parseInt(
          prompt("Enter the shift amount for Caesar Cipher:")
        );
        output = caesarDecode(input, shiftAmount);
        break;
      default:
        output = "Invalid code type";
        break;
    }
  
    document.getElementById("output-text").value = output;
  });
  
  // Custom Morse Code Decode Function
  function morseDecode(code) {
    const decodedText = code
      .split(" ")
      .map((morse) => reverseMorseCodeMap[morse] || "")
      .join("");
    return decodedText;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get code type select element
    const codeTypeSelect = document.getElementById("code-type-select");
    
    // Get code info sections
    const morseInfo = document.getElementById("morse-info");
    const binaryInfo = document.getElementById("binary-info");
    const asciiInfo = document.getElementById("ascii-info");
    const base64Info = document.getElementById("base64-info");
    const caesarInfo = document.getElementById("caesar-info");
    
    // Hide all code info sections initially
    hideAllCodeInfo();
    
    // Show code info section for the selected code type
    codeTypeSelect.addEventListener("change", function() {
      const selectedCodeType = codeTypeSelect.value;
      hideAllCodeInfo();
      
      if (selectedCodeType === "morse") {
        morseInfo.style.display = "block";
      } else if (selectedCodeType === "binary") {
        binaryInfo.style.display = "block";
      } else if (selectedCodeType === "ascii") {
        asciiInfo.style.display = "block";
      } else if (selectedCodeType === "base64") {
        base64Info.style.display = "block";
      } else if (selectedCodeType === "caesar") {
        caesarInfo.style.display = "block";
      }
    });
    
    // Function to hide all code info sections
    function hideAllCodeInfo() {
      morseInfo.style.display = "none";
      binaryInfo.style.display = "none";
      asciiInfo.style.display = "none";
      base64Info.style.display = "none";
      caesarInfo.style.display = "none";
    }
  });

  