function transformArray(numbers) {
    const doubled_v2 = numbers.map(function(n){
        if((n % 5) == 0){
            return "Five";
        }
        if((n % 2) == 0){
            return n *= 2;

        }
        else{
            return n *= 3;
        }
    });
    return doubled_v2
}