function chocolateSplit(s, d, m) {
    let sum = 0;
    let ways = 0;
    for (let i=0;i<m;i++){
        console.log("FIRST", i)
            sum += s[i];
    }
    for (let i=0;i<s.length-m+1;i++) {
        console.log(i)
        if (sum==d) {
                ways++;
        }
        if (i+m <s.length){
                sum =sum-s[i]+s[i+m];
        }
    }
        
    // return ways
}

chocolateSplit([1,2,3,4,2,1], 3, 2)