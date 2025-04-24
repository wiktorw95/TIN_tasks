function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Argument musi być nieujemną liczbą całkowitą.");
    }

    function fibTailRec(n, a = 0, b = 1) {
        if (n === 0){ return a };
        return fibTailRec(n - 1, b, a + b);
    }

    return fibTailRec(n);
}