import { assert, test } from "https://deno.land/x/testing/mod.ts";
import { charactors, getRandomSample, staticSample } from "./sample.ts";
import selectionSort from "./selection_sort.ts";

test({
  name: "selectionSort() sorts any array to be ordered",
  fn() {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      selectionSort({
        array,
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      assert.equal(array, charactors);
    }
  }
});

test({
  name: "selectionSort() sorts an array in the correct process",
  fn() {
    const changesOnSwap: string[][] = [];
    const array = [...staticSample];

    selectionSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onSwap: () => changesOnSwap.push([...array])
    });

    assert.equal(changesOnSwap, [
      ["a", "f", "h", "b", "d", "g", "e", "c"],
      ["a", "b", "h", "f", "d", "g", "e", "c"],
      ["a", "b", "c", "f", "d", "g", "e", "h"],
      ["a", "b", "c", "d", "f", "g", "e", "h"],
      ["a", "b", "c", "d", "e", "g", "f", "h"],
      ["a", "b", "c", "d", "e", "f", "g", "h"]
    ]);
  }
});
