function reverseWords(example){
    let split = example.split(' ')
    let result = ""

    for(let i=0; i<split.length; i++) {
        result += split[i].split('').reverse().join('') + " "
    }
    return result
}