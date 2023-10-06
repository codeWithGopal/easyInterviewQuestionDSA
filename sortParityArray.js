const sortParityArray = function (arr) {
  let even = [];
  let odd = [];
  arr.filter((el) => {
    if (el % 2 == 0) {
      even.push(el);
    } else {
      odd.push(el);
    }
  });
  return [...even, ...odd];
};

console.log(sortParityArray([3, 1, 2, 4]));
