function findLongestWord(sentence) {
  const words = sentence.split(' '); // Memisahkan kalimat menjadi array kata
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("Saya sangat senang mengerjakan soal algoritma"))