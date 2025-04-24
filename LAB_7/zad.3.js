const compose = (...funcs) => {
    if (funcs.length === 0 || funcs.length === 1) {
        return (x) => x;
    }

    return funcs.reduce((acc, fn) => {
        return (x) => acc(fn(x));
    });
};