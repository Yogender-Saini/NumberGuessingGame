// Morse Code
document.getElementById('morse-encode-btn').addEventListener('click', () => {
    const input = document.getElementById('morse-input').value.trim();
    const output = morseEncode(input);
    document.getElementById('morse-output').value = output;
  });
  
  document.getElementById('morse-decode-btn').addEventListener('click', () => {
    const input = document.getElementById('morse-input').value.trim();
    const output = morseDecode(input);
    document.getElementById('morse-output').value = output;
  });
  
  function morseEncode(text) {
    const morseCodeMap = {
      'A': '.-',
      'B': '-...',
      'C': '-.-.',
      'D': '-..',
      'E': '.',
      'F': '..-.',
      'G': '--.',
      'H': '....',
      'I': '..',
      'J': '.---',
      'K': '-.-',
      'L': '.-..',
      'M': '--',
      'N': '-.',
      'O': '---',
      'P': '.--.',
      'Q': '--.-',
      'R': '.-.',
      'S': '...',
      'T': '-',
      'U': '..-',
      'V': '...-',
      'W': '.--',
      'X': '-..-',
      'Y': '-.--',
      'Z': '--..',
      '0': '-----',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      '.': '.-.-.-',
      ',': '--..--',
      '?': '..--..',
      "'": '.----.',
      '!': '-.-.--',
      '/': '-..-.',
      '(': '-.--.',
      ')': '-.--.-',
      '&': '.-...',
      ':': '---...',
      ';': '-.-.-.',
      '=': '-...-',
      '+': '.-.-.',
      '-': '-....-',
      '_': '..--.-',
      '"': '.-..-.',
      '$': '...-..-',
      '@': '.--.-.',
      ' ': '/'
    };
  
    text = text.toUpperCase();
    let encodedText = '';
  
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (morseCodeMap.hasOwnProperty(character)) {
        encodedText += morseCodeMap[character] + ' ';
      }
    }
  
    return encodedText.trim();
  }
  
  function morseDecode(code) {
    const morseCodeMap = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '.-.-.-': '.',
      '--..--': ',',
      '..--..': '?',
      '.----.': "'",
      '-.-.--': '!',
      '-..-.': '/',
      '-.--.': '(',
      '-.--.-': ')',
      '.-...': '&',
      '---...': ':',
      '-.-.-.': ';',
      '-...-': '=',
      '.-.-.': '+',
      '-....-': '-',
      '..--.-': '_',
      '.-..-.': '"',
      '...-..-': '$',
      '.--.-.': '@',
      '/': ' '
    };
  
    const codeArray = code.split(' ');
    let decodedText = '';
  
    for (let i = 0; i < codeArray.length; i++) {
      const codeChar = codeArray[i];
      if (morseCodeMap.hasOwnProperty(codeChar)) {
        decodedText += morseCodeMap[codeChar];
      }
    }
  
    return decodedText;
  }
  
  // Binary
  document.getElementById('binary-encode-btn').addEventListener('click', () => {
    const input = document.getElementById('binary-input').value.trim();
    const output = binaryEncode(input);
    document.getElementById('binary-output').value = output;
  });
  
  document.getElementById('binary-decode-btn').addEventListener('click', () => {
    const input = document.getElementById('binary-input').value.trim();
    const output = binaryDecode(input);
    document.getElementById('binary-output').value = output;
  });
  
  function binaryEncode(text) {
    let encodedText = '';
  
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      const binaryCode = character.charCodeAt(0).toString(2);
      encodedText += binaryCode.padStart(8, '0') + ' ';
    }
  
    return encodedText.trim();
  }
  
  function binaryDecode(code) {
    const codeArray = code.split(' ');
    let decodedText = '';
  
    for (let i = 0; i < codeArray.length; i++) {
      const binaryCode = codeArray[i];
      const character = String.fromCharCode(parseInt(binaryCode, 2));
      decodedText += character;
    }
  
    return decodedText;
  }
  
  // ASCII
  document.getElementById('ascii-encode-btn').addEventListener('click', () => {
    const input = document.getElementById('ascii-input').value.trim();
    const output = asciiEncode(input);
    document.getElementById('ascii-output').value = output;
  });
  
  document.getElementById('ascii-decode-btn').addEventListener('click', () => {
    const input = document.getElementById('ascii-input').value.trim();
    const output = asciiDecode(input);
    document.getElementById('ascii-output').value = output;
  });
  
  function asciiEncode(text) {
    let encodedText = '';
  
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      const asciiCode = character.charCodeAt(0);
      encodedText += asciiCode.toString() + ' ';
    }
  
    return encodedText.trim();
  }
  
  function asciiDecode(code) {
    const codeArray = code.split(' ');
    let decodedText = '';
  
    for (let i = 0; i < codeArray.length; i++) {
      const asciiCode = parseInt(codeArray[i]);
      const character = String.fromCharCode(asciiCode);
      decodedText += character;
    }
  
    return decodedText;
  }
  
  // Base64
  document.getElementById('base64-encode-btn').addEventListener('click', () => {
    const input = document.getElementById('base64-input').value.trim();
    const output = base64Encode(input);
    document.getElementById('base64-output').value = output;
  });
  
  document.getElementById('base64-decode-btn').addEventListener('click', () => {
    const input = document.getElementById('base64-input').value.trim();
    const output = base64Decode(input);
    document.getElementById('base64-output').value = output;
  });
  
  function base64Encode(text) {
    const encodedText = btoa(text);
    return encodedText;
  }
  
  function base64Decode(code) {
    const decodedText = atob(code);
    return decodedText;
  }
  
  // Caesar Cipher
  document.getElementById('caesar-encode-btn').addEventListener('click', () => {
    const input = document.getElementById('caesar-input').value.trim();
    const shiftAmount = parseInt(document.getElementById('caesar-shift').value);
    const output = caesarEncode(input, shiftAmount);
    document.getElementById('caesar-output').value = output;
  });
  
  document.getElementById('caesar-decode-btn').addEventListener('click', () => {
    const input = document.getElementById('caesar-input').value.trim();
    const shiftAmount = parseInt(document.getElementById('caesar-shift').value);
    const output = caesarDecode(input, shiftAmount);
    document.getElementById('caesar-output').value = output;
  });
  
  function caesarEncode(text, shiftAmount) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textUpper = text.toUpperCase();
    let encodedText = '';
  
    for (let i = 0; i < textUpper.length; i++) {
      const character = textUpper[i];
      if (character === ' ') {
        encodedText += ' ';
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
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const codeUpper = code.toUpperCase();
    let decodedText = '';
  
    for (let i = 0; i < codeUpper.length; i++) {
      const character = codeUpper[i];
      if (character === ' ') {
        decodedText += ' ';
      } else {
        const index = alphabet.indexOf(character);
        const shiftedIndex = (index - shiftAmount + 26) % 26;
        const decodedCharacter = alphabet[shiftedIndex];
        decodedText += decodedCharacter;
      }
    }
  
    return decodedText;
  }
  