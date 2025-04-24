function countWords(text) {

    if (!text) {
        return {};
    }

    const lowertext = text.toLowerCase();

    // Usuwa znaki interpunkcyjne, pomijając litery, cyfry i spacje
    const cleanedText = lowertext.replace(/[^\p{L}\p{N}\s]/gu, '');

    // Dzieli tekst na poszczególne słowa
    const words = cleanedText.split(/\s+/).filter(word => word !== '');

    //tworzenie słownika i sprawdzanie (TIN jest fajny) ilości występowania danego słowa
    const wordCount = {};
    for (const word of words) {
        if (wordCount[word]) { //jeśli te słowo wystąpiło, to do dodajemy o jeden, jeśli nie to dodajemy słowo do tablicy
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
}


