export const formatPrice = (amount: string, currency: string): string => {
  const price = parseFloat(amount);

  if (isNaN(price)) {
    return amount;
  }

  const currencySymbol = getCurrencySymbol(currency);
  const formattedPrice = `${currencySymbol} ${price.toFixed(2)}`;

  return formattedPrice;
};

const getCurrencySymbol = (currency: string): string => {
  switch (currency.toUpperCase()) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return currency;
  }
};
