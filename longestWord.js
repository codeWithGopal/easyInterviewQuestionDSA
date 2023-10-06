const longestWord = function (str) {
  let tempString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return tempString
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .at(0);
};
console.log(longestWord("fun&!! time"));
