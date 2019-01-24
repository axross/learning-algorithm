import bubbleSort from "./bubble-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`bubbleSort() sorts the collection to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const collection = [...getRandomSample()];

    bubbleSort({
      collection,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(collection).toEqual(charactors);
  }
});

test("bubbleSort() does bubble sort", () => {
  const changes: string[][] = [];
  const collection = [...staticSample];

  bubbleSort({
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
    ["a", "b", "f", "d", "g", "e", "c", "h"],
    ["a", "b", "d", "f", "g", "e", "c", "h"],
    ["a", "b", "d", "f", "e", "g", "c", "h"],
    ["a", "b", "d", "f", "e", "c", "g", "h"],
    ["a", "b", "d", "e", "f", "c", "g", "h"],
    ["a", "b", "d", "e", "c", "f", "g", "h"],
    ["a", "b", "d", "c", "e", "f", "g", "h"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);
});
