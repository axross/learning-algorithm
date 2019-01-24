import cocktailShakerSort from "./cocktail-shaker-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`cocktailShakerSort() sorts the collection to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const collection = [...getRandomSample()];

    cocktailShakerSort({
      collection,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(collection).toEqual(charactors);
  }
});

test("cocktailShakerSort() does cocktail shaker sort", () => {
  const changes: string[][] = [];
  const collection = [...staticSample];

  cocktailShakerSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onSwap: () => changes.push([...collection])
  });

  expect(changes).toEqual([
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
