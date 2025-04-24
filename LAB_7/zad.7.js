const groupBy = (key, collection = []) =>
    collection.reduce((result, item) => {
        const keyValue = item[key]; // Pobieramy wybrany przez nas element
        return { ...result, [keyValue]: [...(result[keyValue] || []), item] };
        // kopiuje tablice i tworzy nową tablicę która zawiera elementy dla tego klucza (lub pustą tablice) i na końcu dodajemy nazwe elementu.
    }, {});

const sumBy = (key, collection = []) =>
    collection.reduce((sum, item) => sum + (Number(item[key]) || 0), 0);
//do sumy dodajemy wartość przekonwertowaną na liczbę (oczywiście jeśli konwert się nie uda, daje 0)

const maxBy = (key, collection = []) =>
    collection.length ? collection.reduce((max, item) =>
        item[key] > max[key] ? item : max, collection[0]) : null;
// Sprawdzamy czy nasza kolekcja ma elementy i następnie przechodzimy przez każdy element, porównując go do maksimum.

const minBy = (key, collection = []) =>
    collection.length ? collection.reduce((min, item) =>
        item[key] < min[key] ? item : min, collection[0]) : null;
// To samo co wyżej ale z minimum

const sortBy = (key, collection = []) =>
    [...collection].sort((a, b) => (a[key] > b[key]) - (a[key] < b[key]));
// kopiujemy naszą kolekcję, sortujemy ją i robimy to poprzez skorzystanie z funkcji porównującej
// Działą ona tak, żę jeśli pierwszy element jest prawdziwy a drugi nie, zwraca wartość "1"
// Jeśli odwrotnie, to "-1". Jeśli oba nie są spełnione (czyli np. są sobie równe) to daje "0"

const countBy = (predicate, collection = []) =>
    collection.filter(predicate).length;
//zwraca liczbę elementów, które spełniają podany predicate. Filtrujemy te wyniki i tworzymy nową tablicę z samymi elementami "true"

// Funkcje złożone
const getPopularCategories = (products = [], limit) => {
    const categories = Object.entries(groupBy('category', products)) // Tworzymy objekt z tablicą par i używamy stworzonej przez nas wcześniej funkcji "groupBy"
        .map(([category, items]) => ({ category, count: items.length }));
    //Rozdrabnia i składa objekt na nowo, dodając do niej nazwę kategorii i liczbę produktów
    return sortBy('count', categories)
        .reverse()
        .slice(0, limit || categories.length) // Daje tylko ograniczoną ilość elementówm, jeśli jest podany limit
        .map(item => item.category); //Wyciąga tylko nazwę kategorii
};

const getDiscountedProducts = (products = [], threshold) =>
    products.filter(product => {
        const originalPrice = product.originalPrice || 0;
        const currentPrice = product.price || 0;
        return originalPrice > 0 &&
            ((originalPrice - currentPrice) / originalPrice * 100) > threshold;
    }); //Tworzymy tu tablicę, która jest ograniczona (przefiltrowana) na wyniki spełniające podany warunek

const getProductStats = (products = []) => {
    if (!products.length) return { averagePrice: 0, minPrice: 0, maxPrice: 0, count: 0 };

    const count = products.length;
    const totalPrice = sumBy('price', products);
    const minProduct = minBy('price', products);
    const maxProduct = maxBy('price', products);

    return {
        averagePrice: totalPrice / count,
        minPrice: minProduct?.price || 0, // Pobiera cenę jeśli ona istnieje. Jeśli nie, to daje 0
        maxPrice: maxProduct?.price || 0,
        count
    };
};