const calculateTotalPrice = (produkty) => {
    return produkty.reduce((suma, produkt) => suma + produkt.cena, 0);
};