function arrUnshift(arr, value) {
    // expected output [5,10,20,40]
    let newArr = []
    for(let i=0;i<arr.length;i++) {
        newArr[i+1] = arr[i]
    }
    newArr[0] = value;
    return newArr;
}

arrUnshift([10,20,40], 5)