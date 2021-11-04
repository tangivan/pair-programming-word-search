const transpose = function(matrix) {
  let newArr = [];
  matrix[0].map((columns, i) => newArr.push(matrix.map(rows => rows[i])));
  return newArr;
};

module.exports = { transpose };