import insertionSort from "./insertion-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`insertionSort() sorts the collection to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const collection = [...getRandomSample()];

    insertionSort({
      collection,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(collection).toEqual(charactors);
  }
});

test("insertionSort() does insertion sort", () => {
  const changes: string[][] = [];
  const collection = [...staticSample];

  insertionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onInsertion: () => changes.push([...collection])
  });

  expect(changes).toEqual([
    ["a", "f", "h", "b", "d", "g", "e", "c"],
    ["a", "b", "f", "h", "d", "g", "e", "c"],
    ["a", "b", "d", "f", "h", "g", "e", "c"],
    ["a", "b", "d", "f", "g", "h", "e", "c"],
    ["a", "b", "d", "e", "f", "g", "h", "c"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);
});
