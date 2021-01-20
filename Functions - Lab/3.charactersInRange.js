function charactersInRange(firstChar, lastChar) {
  let first = getNumberValue(firstChar);
  let last = getNumberValue(lastChar);

  let min = Math.min(first, last);
  let max = Math.max(first, last);

  getCharsInRange(min, max);

  function getNumberValue(char) {
    return char.charCodeAt(0);
  }

  function getCharValue(number) {
    return String.fromCharCode(number);
  }

  function getCharsInRange(start, end) {
    let characters = [];

    for (let i = start + 1; i < end; i++) {
      let symbol = getCharValue(i);
      characters.push(symbol);
    }
    //return characters;
    console.log(characters.join(' '));
  }
}

charactersInRange('C',
'#'
);
