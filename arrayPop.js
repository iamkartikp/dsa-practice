function arrayPop(arr) {
    let lastElement = arr[arr.length-1];
    arr.length = arr.length-1
    return lastElement;
}

arrayPop([10,20,40,50])