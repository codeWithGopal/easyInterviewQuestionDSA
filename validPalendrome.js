function validPalindrome(s) {
  let chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let temp = [];
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (chars.includes(s[i])) {
      temp.push(s[i]);
    }
  }
  let str1 = temp.join("");
  let str2 = temp.reverse().join("");
  return str1 === str2;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
