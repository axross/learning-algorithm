import selectionSort from "./selection-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`selectionSort() sorts the array to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const array = [...getRandomSample()];

    selectionSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(array).toEqual(charactors);
  }
});

test("selectionSort() sorts the array in the correct process", () => {
  const changesOnSwap: string[][] = [];
  const array = [...staticSample];

  selectionSort({
    array,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onSwap: () => changesOnSwap.push([...array])
  });

  expect(changesOnSwap).toEqual([
    ["a", "f", "h", "b", "d", "g", "e", "c"],
    ["a", "b", "h", "f", "d", "g", "e", "c"],
    ["a", "b", "c", "f", "d", "g", "e", "h"],
    ["a", "b", "c", "d", "f", "g", "e", "h"],
    ["a", "b", "c", "d", "e", "g", "f", "h"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);
});
