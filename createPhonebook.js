const processData = function (input) {
  let phoneBook = new Map();
  let arr = input.split("\n");
  let stringVal = "";
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].split(" ");
    if (val.length > 1) {
      phoneBook.set(val[0], val[1]);
    }
    if (phoneBook.has(val[0])) {
      stringVal += val[0] + "=" + phoneBook.get(val[0]) + "\n";
    } else {
      stringVal += "Not Found" + "\n";
    }
  }
  return stringVal;
};

console.log(processData("3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry"));
