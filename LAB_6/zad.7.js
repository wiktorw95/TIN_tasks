function formatCreditCard(cardNumber) {
    const digitsOnly = cardNumber.replace(/\D/g, '');

    if (digitsOnly.length < 8 || digitsOnly.length > 19) {
        return "Invalid card number";
    }

    const lastFourDigits = digitsOnly.slice(-4);

    // Zastąpienie wszystkich cyfr poza ostatnimi czterema gwiazdkami
    const maskedPart = '*'.repeat(digitsOnly.length - 4);

    const maskedNumber = maskedPart + lastFourDigits;

    // Pogrupowanie cyfr po 4
    const formattedNumber = maskedNumber.match(/.{1,4}/g).join(' ');

    return formattedNumber;
}