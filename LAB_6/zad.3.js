function areBracketsBalanced(str) {
    const stack = [];

    // Mapa odpowiadających sobie nawiasów
    // Tam, gdzie jest zamknięcie nawiasu, powinno być jego otwarcie i vice versa
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Iteracja przez każdy znak w ciągu
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Jeśli to nawias otwierający, dodaj go na stos
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        // Jeśli to nawias zamykający
        else if (char === ')' || char === ']' || char === '}') {
            // Jeśli stos jest pusty lub ostatni otwarty nawias nie pasuje do aktualnego
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
        else {
            return false;
        }
    }

    // Sprawdź, czy wszystkie nawiasy zostały zamknięte, czyli czy stos jest pusty
    return stack.length === 0;
}




