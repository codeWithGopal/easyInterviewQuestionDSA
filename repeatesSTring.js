const repeatedString = function (str, n) {
  let count = str.split("a").length - 1;
  let mod = n % str.length;
  if (mod === 0) {
    (n / str.length) * count;
  } else {
    let subStr = string.substring(mod, 0);
    return ((n - mod) / str.length) * count + (subStr.split("a").length - 1);
  }
};

console.log(repeatedString("a", 100000000000));
// abcab , 10
// abcab

// console.log("GOPAL".substring(3, 0));
