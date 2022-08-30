function matrixDisplay(arr) {
    let arrText = ''
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++) {
            console.log(arr[i][j] + ' ')
        }
        console.log("\n")
        // arrText = "";
    }
}

matrixDisplay([[1,2,3],[5,6,7]])