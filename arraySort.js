// 28 August, 2022
function findArrayMin(arr) {
    // for(let i=0;i<arr.length;i++) {
        
    // }
    let min = arr[0];
    arr.forEach((item, index) => {
        item < arr[index]
        min = arr[index]
    })

    return min
}

findArrayMin([5,2,6,8,1])