function findLongestPalindrome(s) {
    const isPalindrome = (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    };

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.slice(i, j);
            if (substring.length <= longest.length){ continue };

            if (isPalindrome(substring)) {
                longest = substring;
            }
        }
    }
    const cleanedLongest = longest.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedLongest.length > 1 ? cleanedLongest : '';
}