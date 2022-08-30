function scores(scores) {
    let max = scores[0];
    let min = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for(let i=1;i<=scores.length;i++) {
        if(i > max) {
            maxCount++
        }
        if(i < min) {
            minCount++
        }
    }
    console.log(maxCount, minCount);
}

scores([1,2,3,4,5,6,7,8])

