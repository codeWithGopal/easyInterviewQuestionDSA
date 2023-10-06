const twoSum = function (arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (obj[target - val] >= 0) {
      return [obj[target - val], i];
    } else {
      obj[val] = i;
    }
  }
};
console.log(twoSum([1, 25, 21, 11, 17], 28));

//[1,2,4,4] , 8 => [4,4]

async function getData() {
  return await Promise.resolve("Hello!");
}

const data = getData();
console.log(data);
