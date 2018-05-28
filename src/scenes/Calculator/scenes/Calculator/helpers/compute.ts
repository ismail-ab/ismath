const replaceDisplayedCharactersBySymbolsForCompute: (concatenatedCharacters: string)
  => string = (concatenatedCharacters) => concatenatedCharacters
    .replace('−', '-')
    .replace('×', '*')
    .replace('÷', '/');

const compute: (concatenatedCharacters: string) => string = (concatenatedCharacters) => {
  try {
    return new Function('return ' + replaceDisplayedCharactersBySymbolsForCompute(concatenatedCharacters))();
  } catch {
    return 'Expression error';
  }
};

export default compute;