import bubbleSort from "./bubble-sort";
import { charactors, getRandomSample, staticSample } from "./sample";

test(`bubbleSort() sorts the array to be ordered`, () => {
  for (let i = 1; i <= 100; ++i) {
    const array = [...getRandomSample()];

    bubbleSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
    });

    expect(array).toEqual(charactors);
  }
});

test("bubbleSort() sorts the array in the correct process", () => {
  const changesOnSwap: string[][] = [];
  const array = [...staticSample];

  bubbleSort({
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
