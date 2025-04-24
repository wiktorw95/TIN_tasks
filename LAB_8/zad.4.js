const filterStringsByLength = (stringsArray, minLength) => {
    return stringsArray.filter(num => num.length > minLength);
}