const findMostExpensiveProduct = (orders) => {
    return orders.reduce((maxProduct, currentProduct) => {
        return currentProduct.cena > maxProduct.cena ? currentProduct : maxProduct;
    }, { produkt: "", cena: 0 });
};