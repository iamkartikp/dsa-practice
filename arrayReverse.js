function arrayReverse(arr) {
    // for(let i=arr.length-1;i>=0;i--) {
    //     arr[i] = arr[length-1];
    // }
    
    // let temp;
    // let start = 0;
    // let end = arr.length;
    // while(start < end) {
    //     temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     start++;
    //     end--;
    // }

    for(let i=0;i<(arr.length/2);i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp
    }

    return arr;
}

arrayReverse([30,20,10,5,2])