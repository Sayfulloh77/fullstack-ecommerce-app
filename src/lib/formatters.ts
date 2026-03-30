// Currency Formatter (USD)
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

// Function to format currency
export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

// Number Formatter
const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

// Function to format numbers
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}