/**
 * Splits a string into an array of lines.
 *
 * If the `keeplinebreaks` parameter is `true`, the line breaks are included
 * in the resulting array elements. Otherwise, the line breaks are excluded.
 *
 * @param {boolean} keeplinebreaks - A flag indicating whether to keep line breaks in the resulting array elements.
 * @return {Array<string>} The array of lines, with or without line breaks based on the `keeplinebreaks` parameter.
 */
String.prototype.splitLines = function(keeplinebreaks = false) {
  const array = this.split(/(\r?\n|\r|\n)/).reduce((acc, curr, index, array) => {
    if (index % 2 === 0) {
      acc.push(curr + (array[index + 1] || ""));
    }
    return acc;
  }, []).filter(Boolean);

  if (keeplinebreaks === true) {
    return array;
  } else {
    return array.map(line => line.replace(/\r?\n|\r|\n/g, ""));
  }
}
