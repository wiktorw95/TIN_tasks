function numberToWords(number) {
    if (number < 0 || number > 999) {
        return "Liczba poza zakresem";
    }

    const jedności = ["", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć"];
    const naście = ["dziesięć", "jedenaście", "dwanaście", "trzynaście", "czternaście", "piętnaście", "szesnaście", "siedemnaście", "osiemnaście", "dziewiętnaście"];
    const dziesiątki = ["", "dziesięć", "dwadzieścia", "trzydzieści", "czterdzieści", "pięćdziesiąt", "sześćdziesiąt", "siedemdziesiąt", "osiemdziesiąt", "dziewięćdziesiąt"];
    const setki = ["", "sto", "dwieście", "trzysta", "czterysta", "pięćset", "sześćset", "siedemset", "osiemset", "dziewięćset"];

    // Jeśli liczba to 0
    if (number === 0) {
        return "zero";
    }

    let słowa = [];

    // Analiza setek
    const setka = Math.floor(number / 100);
    if (setka > 0) {
        słowa.push(setki[setka]);
    }

    const reszta = number % 100;

    if (reszta > 0) {
        if (reszta < 10) {
            // Tylko jedności
            słowa.push(jedności[reszta]);
        } else if (reszta < 20) {
            // Liczby naście
            słowa.push(naście[reszta - 10]);
        } else {
            // Dziesiątki i jedności
            const dziesiątka = Math.floor(reszta / 10);
            const jedność = reszta % 10;

            słowa.push(dziesiątki[dziesiątka]);

            if (jedność > 0) {
                słowa.push(jedności[jedność]);
            }
        }
    }

    return słowa.join(" ");
}




