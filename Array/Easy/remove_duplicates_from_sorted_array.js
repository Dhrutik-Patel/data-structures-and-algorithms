const removeDuplicates = (array) => {
    let previous = -1;
    const result = [];
    
    for (let i = 0; i < array.length; i++)  {
        if (array[i] === previous)  continue;
        
        result.push(array[i]);
        previous = array[i];
    }
    
    return result;
}


const array = [1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 7];
console.log(removeDuplicates(array));
