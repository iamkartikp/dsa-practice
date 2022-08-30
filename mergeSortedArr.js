function mergeSortedArr(arr1, arr2) {
    let sortedArray = [];
    arr1.forEach(item => {
        sortedArray.push(item)
    })
    arr2.forEach(item => {
        sortedArray.push(item)
    })

    return sortedArray.sort();
}

mergeSortedArr([1,2,4],[3,5,6])