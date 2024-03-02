function countDuplicate(INPUT, QUERY) {
  const occure = [];
  
  for (const query of QUERY) {
    let count = 0;
    
    for (const input of INPUT) {
      if (input === query) {
        count++;
      }
    }
    
    occure.push(count);
  }
  
  return occure;
}

const inputArray = ['xc', 'dz', 'bbb', 'dz'];
const queryArray = ['bbb', 'ac', 'dz'];
const result = countDuplicate(inputArray, queryArray);
console.log(result)