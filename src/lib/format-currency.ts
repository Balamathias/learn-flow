/**
 * Formats a given number as a currency value in USD.
 * 
 * @param amount - The number to be formatted.
 * @returns The formatted currency value.
 */
export function formatToUSD(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}
