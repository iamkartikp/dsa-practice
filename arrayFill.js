function arrayFill(arr, value, start) {
    let newArr = [];
    
    for(let i=0;i<start;i++) {
        newArr[i] = arr[i]
    }
    
    for(let i=start;i<arr.length;i++) {
        newArr[i] = value
    }

    return newArr;
}

arrayFill([1,2,3,4], 'x', 2)