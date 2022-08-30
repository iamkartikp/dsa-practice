function printStep(n) {
    // for(let i=1;i<=n;i++) {
    //     for(let j=1;j<=i;j++) {
    //         console.log("#")
            
    //     }
    //     console.log('\n');
    // }
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

printStep(6)