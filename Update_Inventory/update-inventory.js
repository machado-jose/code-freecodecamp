function updateInventory(arr1, arr2) {
    
    let inventory = {};

    arr1.forEach(list=>{
        inventory[list[1]] = list[0];
    });

    arr2.forEach(list=>{

        Object.keys(inventory).includes(list[1]) ? inventory[list[1]] += list[0] : inventory[list[1]] = list[0];
    
    });

    arr1 = [];

    Object.keys(inventory).sort().forEach(key=>{
        let list = [];
        list[0] = inventory[key];
        list[1] = key;
        arr1.push(list);
    });

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