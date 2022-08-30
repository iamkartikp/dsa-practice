function firstRecurringChar(arr) {
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i]===arr[j])
                return arr[i];
        }
    }
}

firstRecurringChar([1,2,3,4,5,2,1,3])