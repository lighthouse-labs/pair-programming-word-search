const wordSearch = (letters, word) => {
  if (!Array.isArray(letters) || word === undefined || word === "") {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  if (searchForWord(horizontalJoin, word)) {
    return true;
  }

  const verticalJoin = [];
  let temp = "";

  for (let i = 0; i < letters[0].length; i++) {
    temp = "";
    for (let j = 0; j < letters.length; j++) {
      temp += letters[j][i];
    }
    verticalJoin.push(temp);
  }
  if (searchForWord(verticalJoin, word)) {
    return true;
  }

  return false;
};

const searchForWord = (array, word) => {
  for (l of array) {
    if (l.includes(word)) return true;
  }
};
