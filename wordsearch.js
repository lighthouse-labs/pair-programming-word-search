const wordSearch = (letters, word) => {

    if (letters.length === 0) {
      return false;
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    for (const line of horizontalJoin) {
      if (line.includes(word)) {
        return true;
      }
    }
  
    let newArr = [];
    letters[0].forEach(() => newArr.push([]));
    //loop through 2D array with nested loop
    for (let r = 0; r < letters.length; r++) {
      for (let c = 0; c < letters[r].length; c++) {
        //identify each item in [0] of each row, push value to transposed array
        newArr[c].push(letters[r][c]);
      }
          
    }
  
    const verticalJoin = newArr.map(ls => ls.join(''));
  
    for (const line of verticalJoin) {
      if (line.includes(word)) {
        return true;
      }
    }
      
    return false;
  
  
    //return newArr;
  };
  
  
  module.exports = wordSearch;
  
  