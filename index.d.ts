/**
 * Splits a string into an array of lines.
 *
 * If the `keeplinebreaks` parameter is `true`, the line breaks are included
 * in the resulting array elements. Otherwise, the line breaks are excluded.
 *
 * @param {boolean} keeplinebreaks - A flag indicating whether to keep line breaks in the resulting array elements.
 * @return {Array<string>} The array of lines, with or without line breaks based on the `keeplinebreaks` parameter.
 */
interface String {
  splitLines(keeplinebreaks?: boolean): Array<string>;
}
