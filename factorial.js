const factorial = function (num) {
  let result = 1;
  if (num <= 0) return result;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
};
