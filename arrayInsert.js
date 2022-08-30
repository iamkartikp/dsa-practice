function arrayInsert(value, index) {
    let arr = [10,20,30,40]; 
    
   arr.length++;
    for(let i=arr.length-1;i>=index;i--) {
        arr[i] = arr[i-1]
    }
    arr[index] = value;
    return arr;
}

arrayInsert(25, 2)