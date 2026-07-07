const formatters = new Map<string, Intl.NumberFormat>();

function getFormatter(currency: string): Intl.NumberFormat {
  let formatter = formatters.get(currency);
  if (!formatter) {
    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    });
    formatters.set(currency, formatter);
  }
  return formatter;
}

/**
 * Formats a monetary amount for display. Amounts arrive from the API as
 * decimal strings (e.g. "12.99"), never raw-rendered.
 */
export function formatAmount(amount: string, currency: string): string {
  const value = Number(amount);
  if (Number.isNaN(value)) {
    throw new Error(`formatAmount: invalid amount "${amount}"`);
  }
  return getFormatter(currency).format(value);
}
