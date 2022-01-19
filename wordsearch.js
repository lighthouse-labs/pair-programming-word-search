const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log(l)
        if (l.includes(word)) return true
    }
    const verticalArraysnumber = letters[0].length
    // console.log(verticalArraysnumber)
    let vertical = []
    for (let r = 0; r < letters[0].length; r++) {
        let verticalWordArray = []
        for (let c = 0; c <= verticalArraysnumber; c++) {
            verticalWordArray.push(letters[c][r])
        }
        let verticalWord = verticalWordArray.join('')
        vertical.push(verticalWord)
    }
    // console.log(vertical)
    for (item of vertical) {
        console.log(item)
        console.log(item.includes(word)) 
        if (item.includes(word)) {
            return true;
        }
    }
    return false
}

module.exports = wordSearch