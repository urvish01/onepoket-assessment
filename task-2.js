
let arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// function return sum of array
function dataManipulation(arrayOfIntegers) {

    if (!Array.isArray(arrayOfIntegers)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        if (typeof arrayOfIntegers[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        sum += arrayOfIntegers[i];
    }
    return sum;
    
}
// print sum of array =>
console.log("🚀 ~ file: task-2.js:18 ~ sum:", dataManipulation(arrayOfIntegers))
