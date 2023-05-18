//multidimensional arrays
let nestedArray = [ 
    ['deep'], 
    [['deeper'], ['deeper']], 
    [[['deepest'], ['deepest']],[[['deepest-est?']]]] 
];
console.table(nestedArray)

//---------------------------------
//Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
console.log(foods.apples)
function checkUnit(fruitValue) {
// Only change code below this line
return foods[fruitValue];
// Only change code above this line
}

console.log(checkUnit("apples"));
console.log(checkUnit("bananas"));
console.log(checkUnit("strawberries"));