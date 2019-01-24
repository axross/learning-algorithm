import insertionSort from "./insertion-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`insertionSort() sorts the array to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const array = [...getRandomSample()];

    insertionSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(array).toEqual(charactors);
  }
});

describe("insertionSort() sorts the array in the correct process", () => {
  const changesOnSwap: string[][] = [];
  const changesOnInsertion: string[][] = [];
  const array = [...staticSample];

  insertionSort({
    array,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onSwap: () => changesOnSwap.push([...array]),
    onInsertion: () => changesOnInsertion.push([...array])
  });

  expect(changesOnSwap).toEqual([
    ["a", "f", "h", "b", "d", "g", "e", "c"],
    ["a", "f", "b", "h", "d", "g", "e", "c"],
    ["a", "b", "f", "h", "d", "g", "e", "c"],
    ["a", "b", "f", "d", "h", "g", "e", "c"],
    ["a", "b", "d", "f", "h", "g", "e", "c"],
    ["a", "b", "d", "f", "g", "h", "e", "c"],
    ["a", "b", "d", "f", "g", "e", "h", "c"],
    ["a", "b", "d", "f", "e", "g", "h", "c"],
    ["a", "b", "d", "e", "f", "g", "h", "c"],
    ["a", "b", "d", "e", "f", "g", "c", "h"],
    ["a", "b", "d", "e", "f", "c", "g", "h"],
    ["a", "b", "d", "e", "c", "f", "g", "h"],
    ["a", "b", "d", "c", "e", "f", "g", "h"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);

  expect(changesOnInsertion).toEqual([
    ["a", "f", "h", "b", "d", "g", "e", "c"],
    ["a", "b", "f", "h", "d", "g", "e", "c"],
    ["a", "b", "d", "f", "h", "g", "e", "c"],
    ["a", "b", "d", "f", "g", "h", "e", "c"],
    ["a", "b", "d", "e", "f", "g", "h", "c"],
    ["a", "b", "c", "d", "e", "f", "g", "h"]
  ]);
});
