import { } from 'jest';
import {
  compute,
  replaceDisplayedCharactersBySymbolsForCompute
} from './compute';

describe('compute', () => {
  it('should return 10', () => {
    const concatenatedCharacters = '20−10';

    expect(compute(concatenatedCharacters)).toEqual(10);
  });

  it('should throw error', () => {
    const concatenatedCharacters = '÷20−10×';

    expect(compute(concatenatedCharacters)).toEqual('Expression error');
  });
});

describe('replaceDisplayedCharactersBySymbolsForCompute', () => {
  it('should return 10', () => {
    const concatenatedCharacters = '20−10';

    expect(replaceDisplayedCharactersBySymbolsForCompute(concatenatedCharacters)).toEqual('20-10');
  });

  it('should throw error', () => {
    const concatenatedCharacters = '2÷20−10×2';

    expect(replaceDisplayedCharactersBySymbolsForCompute(concatenatedCharacters)).toEqual('2/20-10*2');
  });
});