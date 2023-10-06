function firstUniqueChar(s) {
  let obj = {};
  for (let el of s) {
    obj[el] = (obj[el] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueChar("leetcode"));
