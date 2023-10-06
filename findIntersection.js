const interSection = function (arr) {
  let arr1 = arr[0].split(", ");
  let arr2 = arr[1].split(", ");
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result.join(", ");
};

console.log(interSection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
