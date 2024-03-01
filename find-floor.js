// function findFloor(arr, x) {
//   return arr
//     .filter((n) => n <= Math.floor(x))
//     .reduce((a, b) => Math.max(a, b), -Infinity);
// }

// function findFloor(arr, x) {
//   return Math.max(...arr.filter((n) => n <= Math.floor(x)));
// }

function findFloor(arr, x) {
  let filteredArr = arr.filter((n) => n <= Math.floor(x));
  return filteredArr.length > 0
    ? Math.max(...arr.filter((n) => n <= Math.floor(x)))
    : -1;
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 50));
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20));
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));

module.exports = findFloor;
