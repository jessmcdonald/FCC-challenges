function updateInventory(arr1, arr2) {

    const getIndex = function(arr, item){
        for(let i = 0; i < arr.length; i++){
            if(arr[i][1] == item){
                return i
            }
        }
        return undefined
    }
    
    for (let j = 0; j < arr2.length; j++){
        let index = getIndex(arr1, arr2[j][1]);
        if(index === undefined){
            arr1.push(arr2[j])
        } else {
            arr1[index][0] += arr2[j][0]
        }
    }
    arr1.sort((a, b) => a[1].localeCompare(b[1]))
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

