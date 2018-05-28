const compute: (concatenatedCharacters: string) => string = (concatenatedCharacters) => {
  try {
    return new Function('return ' + concatenatedCharacters)();
  } catch {
    return 'Expression error';
  }
};

export default compute;