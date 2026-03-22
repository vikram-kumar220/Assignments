function pow(x: number, n: number): number {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

      return result;
}
console.log(pow(2, 10));
console.log(pow(2, -2));