const { transpose } = require('./transpose');
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word))
            return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word))
            return true;
    }
    const reverseHorizontalJoin = letters.map(ls => ls.reverse().join(''));
    for (l of reverseHorizontalJoin) {
        if (l.includes(word))
            return true;
    }
    const reverseVerticalJoin = transpose(letters).map(ls => ls.reverse().join(''));
    for (l of reverseVerticalJoin) {
        if (l.includes(word))
            return true;
    }
    return false;
}

module.exports = wordSearch