const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));

  if (letters.length === 0) {
    return false;
  }
  
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let row = 0; row < letters.length; row++) {
    let string = "";
    for (let col = 0; col < horizontalJoin[0].length; col++) {
      string += letters[col][row];
      if (string.includes(word)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = wordSearch