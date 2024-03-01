function countZeroes(arr) {
  return arr.filter((x) => x == 0).length;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));

module.exports = countZeroes;
