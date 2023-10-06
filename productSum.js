const substractProductSym = function (num) {
  let temp = num.toString().split("");
  console.log(temp);
  let product = +temp.reduce((acc, val) => acc * +val, 1);
  let sum = +temp.reduce((acc, val) => acc + +val, 0);
  return product - sum;
};

console.log(substractProductSym(234));
