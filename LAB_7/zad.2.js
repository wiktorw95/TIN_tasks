function countWordFrequency(words) {
    const lowerword = words.map(wordek => wordek.toLowerCase())
    const wordCount = lowerword.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    return wordCount;
}