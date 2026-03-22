function printNumberDiamondSpacedNoRepeat(n: number): void {
    // Top half
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Spaces for centering (manual loop instead of .repeat)
        for (let s = 0; s < n - i; s++) {
            row += " ";
        }

        // Numbers with spaces
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row.trimEnd());
    }

    // Bottom half
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // Spaces for centering
        for (let s = 0; s < n - i; s++) {
            row += " ";
        }

        // Numbers with spaces
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }

        console.log(row.trimEnd());
    }
}

// Example
printNumberDiamondSpacedNoRepeat(5);