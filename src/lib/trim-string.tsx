
/**
 * 
 * @param string The string to be trimmed
 * @param numChars The number of characters to trim it down to.
 * @returns A trimmed string ending with ellipsis `...`
 * @example
 * ```js
 * trimString("I love to code in Python, Sometimes Typescript but I prefer NextJS for Typescript", 10)
 * // I love to ...
 * ```
 * @description And there you have it!
 */
export const trimString = (string: string, numChars?: number): string => {
    if (string.length <= (numChars || 36)) {
        return string;
    } else {
        return string.slice(0, numChars) + "...";
    }
}
