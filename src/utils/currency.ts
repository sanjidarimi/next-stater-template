/**
 * Formats a number as a currency string.
 */
export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US",
  options?: Intl.NumberFormatOptions
): string {
  if (isNaN(amount)) {
    return "$0.00";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...options,
  }).format(amount);
}
