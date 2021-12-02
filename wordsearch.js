const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

const transpose = function(matrix) {
    let arr = [];
  
    for (let j = 0; j < matrix[0].length; j++) { //outer aka colmn
      let subArr = [];
      for (let i = 0; i < matrix.length; i++) { // inner aka row
        subArr.push(matrix[i][j]); // equal to transpose[i][j]
      }
      arr.push(subArr);
    }
    return arr;
  }

module.exports = wordSearch