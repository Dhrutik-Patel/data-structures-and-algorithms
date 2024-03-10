const findUnion = (array_1, array_2) => {
    let i = 0;
    let j = 0;
    const result = [];
    
    while (i < array_1.length && j < array_2.length) {
        if (array_1[i] < array_2[j]) {
            result.push(array_1[i]);
            i++;
        } else if (array_1[i] > array_2[j]) {
            result.push(array_2[j]);
            j++;
        } else {
            result.push(array_1[i]);
            i++;
            j++;
        }
    }
    
    while (i < array_1.length) {
        result.push(array_1[i]);
        i++;
    }
    
    while (j < array_2.length) {
        result.push(array_2[j]);
        j++;
    }
    
    return result;
}

const findIntersection = (array_1, array_2) => {
    let i = 0;
    let j = 0;
    const result = [];
    
    while (i < array_1.length && j < array_2.length) {
        if (array_1[i] < array_2[j]) {
            i++;
        } else if (array_1[i] > array_2[j]) {
            j++;
        } else {
            result.push(array_1[i]);
            i++;
            j++;
        }
    }
    
    return result;
}

const array_1 = [1, 2, 3, 4, 5, 6, 7];
const array_2 = [2, 4, 6, 8, 10, 12];

console.log(findUnion(array_1, array_2));
console.log(findIntersection(array_1, array_2));

