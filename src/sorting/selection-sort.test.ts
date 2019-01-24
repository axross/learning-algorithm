import selectionSort from "./selection-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`selectionSort() sorts the collection to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const collection = [...getRandomSample()];

    selectionSort({
      collection,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(collection).toEqual(charactors);
  }
});

test("selectionSort() does selection sort", () => {
  const changes: string[][] = [];
  const collection = [...staticSample];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onSwap: () => changes.push([...collection])
  });

  expect(changes).toEqual([
    ["a", "f", "h", "b", "d", "g", "e", "c"],
    ["a", "b", "h", "f", "d", "g", "e", "c"],
    ["a", "b", "c", "f", "d", "g", "e", "h"],
    ["a", "b", "c", "d", "f", "g", "e", "h"],
    ["a", "b", "c", "d", "e", "g", "f", "h"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);
});
