import cocktailShakerSort from "./cocktail-shaker-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

describe("cocktailShakerSort({ array, compare, onComparison, onSwap })", () => {
  test(`sorts any array to be ordered`, () => {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      cocktailShakerSort({
        array,
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      expect(array).toEqual(charactors);
    }
  });

  test("sorts an array in the correct process", () => {
    const changesOnSwap: string[][] = [];
    const array = [...staticSample];

    cocktailShakerSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onSwap: () => changesOnSwap.push([...array])
    });

    expect(changesOnSwap).toEqual([
      ["a", "f", "h", "b", "d", "g", "e", "c"],
      ["a", "f", "b", "h", "d", "g", "e", "c"],
      ["a", "f", "b", "d", "h", "g", "e", "c"],
      ["a", "f", "b", "d", "g", "h", "e", "c"],
      ["a", "f", "b", "d", "g", "e", "h", "c"],
      ["a", "f", "b", "d", "g", "e", "c", "h"],
      ["a", "f", "b", "d", "g", "c", "e", "h"],
      ["a", "f", "b", "d", "c", "g", "e", "h"],
      ["a", "f", "b", "c", "d", "g", "e", "h"],
      ["a", "b", "f", "c", "d", "g", "e", "h"],
      ["a", "b", "c", "f", "d", "g", "e", "h"],
      ["a", "b", "c", "d", "f", "g", "e", "h"],
      ["a", "b", "c", "d", "f", "e", "g", "h"],
      ["a", "b", "c", "d", "e", "f", "g", "h"]
    ]);
  });
});
