// Podstawowa funkcja która tworzy nasze operacje
const operation = (fn) => fn;

// Kompozycja operacji, gdzie tworzymy operację razem z podaną wartością
const compose = (...operations) => (value) =>
    operations.reduce((result, op) => op(result), value);

// Wykonanie operacji na wartości. Gromadzi wszystkie operacje i przypisuje im podaną przez nas wartość
const calculate = (operation, value) => operation(value);

// Sekwencja operacji (podobna do compose, ale bardziej czytelna dla sekwencyjnych kroków)
const sequence = (...operations) => compose(...operations);

// Podstawowe operacje matematyczne, gdzie na początku sprawdzamy czy wartość jest tablicą
// Jeśli tak, używamy "map" do przypisania każdej wartości w tablicy daną operację
// Jeśli nie, używamy naszą operację do jednej wartości
const add = (x) => (value) =>
    Array.isArray(value) ? value.map(v => v + x) : value + x;

const subtract = (x) => (value) =>
    Array.isArray(value) ? value.map(v => v - x) : value - x;

const multiply = (x) => (value) =>
    Array.isArray(value) ? value.map(v => v * x) : value * x;

const divide = (x) => (value) => {
    if (x === 0) throw new Error("Nie można dzielić przez zero");
    return Array.isArray(value) ? value.map(v => v / x) : value / x;
};

const power = (x) => (value) =>
    Array.isArray(value) ? value.map(v => Math.pow(v, x)) : Math.pow(value, x);

const negate = () => (value) =>
    Array.isArray(value) ? value.map(v => -v) : -value;

const sum = () => (array) => {
    if (!Array.isArray(array)) return array;
    return array.reduce((acc, val) => acc + val, 0); // Sumuje wszystkie elementy i zaczyna on od 0.
};