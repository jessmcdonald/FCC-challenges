let list1 = ["apple", "banana", "kiwi"];

let list2 = ["kiwi", "mango", "pineapple"];

innerFruits = (arr1, arr2, arr3) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.find(fruit => fruit === arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
};

findFruits = (arr1, arr2) => {
  let arr3 = [];
  innerFruits(arr1, arr2, arr3);
  innerFruits(arr2, arr1, arr3);
  return arr3;
};

console.log(findFruits(list1, list2));
