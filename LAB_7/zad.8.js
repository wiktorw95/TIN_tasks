// Główna funkcja walidująca
const validate = (value, validator) => validator(value); // Jest to element uruchamiający naszą walidację

// Podstawowe walidatory
const required = (message = "Wartość jest wymagana") => (value) => {
    const valid = value !== null && value !== undefined && value !== '';
    return {
        valid, errors: valid ? [] : [message]
    };
    //Tutaj sprawdzamy czy wartość została podana. Zwracamy "walidację" i jeśli wystąpił błąd, to dodaje do naszej walidacji podaną przez nas w skrypcie wiadomość
};

const minLength = (length, message = `Wartość jest za krótka`) => (value) => {
    if (value === null || value === undefined) {
        return { valid: false, errors: [message] };
    }
    const valid = value.length >= length;
    return {
        valid, errors: valid ? [] : [message]
    };
    //Tutaj sprawdzamy czy minimalna długość naszej wartości jest poprawna. Zwracamy to co wcześniej z odpowiednią informacją błędu jeśli potrzebne.
};

const maxLength = (length, message = `Wartość jest za długa`) => (value) => {
    if (value === null || value === undefined) {
        return { valid: false, errors: [message] };
    }
    const valid = value.length <= length;
    return {
        valid, errors: valid ? [] : [message]
    };
    //To samo co wyżej ale sprawdza górną granicę
};

const pattern = (email, message = "Wartość nie pasuje do wymaganego wzorca") => (value) => {
    if (value === null || value === undefined) {
        return { valid: false, errors: [message] };
    }
    const valid = email.test(value);
    return {
        valid, errors: valid ? [] : [message]
    };
    //Sprawdzamy czy nasza wartość jest zgodna z podanym wzorcem. Jeśli tak lub nie, stosujemy to co powyżej.
};

const isEmail = (message = "Niepoprawny adres email") => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Podajemy tu wzorzec maila.
    return pattern(emailRegex, message);
};

const isNumber = (message = "Wartość musi być liczbą") => (value) => {
    const valid = typeof value === 'number' && !isNaN(value);
    return {
        valid, errors: valid ? [] : [message]
    };
};

const min = (minValue, message = `Wartość musi być większa lub równa ${minValue}`) => (value) => {
    const numberValidator = isNumber();
    const isNumberResult = numberValidator(value);

    if (!isNumberResult.valid) {
        return isNumberResult;
    }

    const valid = value >= minValue;
    return {
        valid, errors: valid ? [] : [message]
    };
};

const max = (maxValue, message = `Wartość musi być mniejsza lub równa ${maxValue}`) => (value) => {
    const numberValidator = isNumber();
    const isNumberResult = numberValidator(value);

    if (!isNumberResult.valid) {
        return isNumberResult;
    }

    const valid = value <= maxValue;
    return {
        valid, errors: valid ? [] : [message]
    };
};

// Kompozycja walidatorów
const all = (...validators) => (value) => {
    const results = validators.map(validator => validator(value)); // Uruchamiamy wszystkie walidatory na naszą wartość.
    const valid = results.every(result => result.valid); // Sprawdzamy tutaj czy każda walidacja zwróci true
    const errors = results.flatMap(result => result.errors || []); // W tym miejscu zbieramy wszystkie komunikaty o błędach

    return {
        valid, errors: valid ? [] : errors
    };
};

const any = (...validators) => (value) => {
    const results = validators.map(validator => validator(value));
    const valid = results.some(result => result.valid); // Tu Patrzymy czy przynajmniej jeden walidator zwróci true
    const errors = results.flatMap(result => result.errors || []);

    return {
        valid, errors: valid ? [] : errors
    };
};

const not = (validator, message = "Walidacja nie powinna przejść") => (value) => {
    const result = validator(value);
    const valid = !result.valid; // W tym przypadku żadna walidacja się nie udała i ją w całości neguje.

    return {
        valid, errors: valid ? [] : [message]
    };
};