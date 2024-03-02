function reverseAlphabet(input) {
  const letters = input.match(/[a-zA-Z]/g); 
  const reversedLetters = letters.reverse(); 
  let reversedString = '';

  let letterIndex = 0;
  for (let i = 0; i < input.length; i++) {
    if (/[a-zA-Z]/.test(input[i])) {
      reversedString += reversedLetters[letterIndex];
      letterIndex++;
    } else {
      reversedString += input[i];
    }
  }

  return reversedString;
}

console.log(reverseAlphabet('asdasdqwdjwheifudkjfhiweufh'))
