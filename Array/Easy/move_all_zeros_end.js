const moveAllZerosToEnd = (array) => {
    let j = array.findIndex(element=> element === 0);
    
    for (let i = j + 1; i < array.length; i++)  {
        if (array[i] !== 0) {
            [array[i], array[j]] = [array[j], array[i]];
            j++;
        }
    }
    
    return array;
}


const array = [2, 3, 4, 5, 0, 8, 0, 6, 5, 0, 4, 3, 0, 0];
console.log(moveAllZerosToEnd(array));
