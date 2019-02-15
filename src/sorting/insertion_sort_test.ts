import { assert, test } from "https://deno.land/x/testing/mod.ts";
import insertionSort from "./insertion_sort.ts";
import { charactors, getRandomSample, staticSample } from "./sample.ts";

test({
  name: "insertionSort() sorts any array to be ordered",
  fn() {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      insertionSort({
        array,
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      assert.equal(array, charactors);
    }
  }
});

test({
  name: "insertionSort() sorts an array in the correct process",
  fn() {
    const changesOnSwap: string[][] = [];
    const array = [...staticSample];

    insertionSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onSwap: () => changesOnSwap.push([...array])
    });

    assert.equal(changesOnSwap, [
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
  }
});
