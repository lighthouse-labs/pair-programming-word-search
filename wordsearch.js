// Pair programming with Anita Toth, Victor Fung

const wordSearch = (letters, word) => {
  //console.log("=============================start of function");
  if (letters[0].length === 0) {
    //console.log("return false from 0 length")
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {     //loop through rows
    if (l.includes(word)) {          //if row includes word return true
      //console.log("returning true");
      return true;
    }
  }
  let verticalJoin = [];
  let verticalWord;

  for (let i = 0; i < letters[i].length; i++) {
    verticalJoin = [];
    for (let j = 0; j < letters.length; j++) {
      verticalJoin.push(letters[j][i]);
      verticalWord = verticalJoin.join("");
      if (verticalWord.includes(word)) {
        //console.log("returning true");
        return true;
      }
    }
    // console.log("vertialjoin: ", verticalJoin);
    // console.log("verticalWord: " + verticalWord);
  }
  //console.log("returning false");
  return false;
};


module.exports = wordSearch;

