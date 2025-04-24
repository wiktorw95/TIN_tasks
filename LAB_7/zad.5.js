function updateNestedProperty(obj, path, updater) {
    if (path.length === 0) {
        return typeof updater === 'function' ? updater(obj) : updater;
        //Sprawdzamy czy nasz updater jest funkcją. Jeśli tak to wywołujemy ją z wartością. Jeśli nie to po prostu przekazujemy wartość.
    }

    const [key, ...rest] = path; //z path pobieramy pierwszy element jako klucz a z reszty tworzymy nową tablicę
    const isObj = obj !== null && typeof obj === 'object'; //Sprawdzamy czy "obj" jest rzeczywiście objektem lub tablicą
    const base = isObj ? obj : (Number.isInteger(Number(key)) ? [] : {}); // Sprawdzamy czy to objekt, czy tablica. W przypadku tablicy sprawdzamy czy podany klucz jest liczbą. Jeśli tak to tworzymy tablicę, w przeciwnym wypadku tworzymy obiekt
    const value = isObj ? base[key] : undefined; //Jeżeli isObj jest spełniony, pobieramy z niego wartość
    const newValue = updateNestedProperty(
        value !== undefined ? value : (Number.isInteger(Number(rest[0])) ? [] : {}),
        rest,
        updater
        //Robimy tu rekurencję, gdzie sprawdzamy pozostałą część naszej ścieżki.
        //W pierwszym parametrze sprawdzamy czy value istnieje. Jeśli tak, to tu robimy stop i używamy jej. Jeśli nie to sprawdzamy pierwszy element pozostałej ścieżki
        //Drugi parametr jest do przekazania pozostałej części ścieżki
        //Trzeci parametr to przekazanie naszej funkcji/wartości aktualizującej
    );

    return Array.isArray(base)
        ? [...base.slice(0, key), newValue, ...base.slice(Number(key) + 1)]
        : { ...base, [key]: newValue };
    //Tutaj sprawdzamy czy nasza baza jest tablicą
    // Jeśli tak to kopiujemy elementy przed indeksem key, dodajemy nową wartość i przepisujemy resztę elementów
    // Jeśli nie to tworzy kopię obiektu i dodaje do niej nasz klucz z nową wartością
}