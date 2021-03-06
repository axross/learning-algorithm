import { assert, test } from "https://deno.land/x/testing/mod.ts";
import randomInteger from "../test_utility/random_integer.ts";
import { charactors, getRandomSample, staticSample } from "./sample.ts";
import shellSort from "./shell_sort.ts";

test({
  name: "shellSort() sorts any array to be ordered",
  fn() {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      shellSort({
        array,
        padding: randomInteger(2, array.length - 2),
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      assert.equal(array, charactors);
    }
  }
});

test({
  name: "shellSort() sorts an array in the correct process",
  fn() {
    const changesOnSwap: string[][] = [];
    const array = [...staticSample];

    shellSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      padding: 3,
      onSwap: () => changesOnSwap.push([...array])
    });

    assert.equal(changesOnSwap, [
      ["b", "a", "h", "f", "d", "g", "e", "c"],
      ["b", "a", "h", "e", "d", "g", "f", "c"],
      ["b", "a", "h", "e", "c", "g", "f", "d"],
      ["b", "a", "g", "e", "c", "h", "f", "d"],
      ["a", "b", "g", "e", "c", "h", "f", "d"],
      ["a", "b", "e", "g", "c", "h", "f", "d"],
      ["a", "b", "e", "c", "g", "h", "f", "d"],
      ["a", "b", "c", "e", "g", "h", "f", "d"],
      ["a", "b", "c", "e", "g", "f", "h", "d"],
      ["a", "b", "c", "e", "f", "g", "h", "d"],
      ["a", "b", "c", "e", "f", "g", "d", "h"],
      ["a", "b", "c", "e", "f", "d", "g", "h"],
      ["a", "b", "c", "e", "d", "f", "g", "h"],
      ["a", "b", "c", "d", "e", "f", "g", "h"]
    ]);
  }
});
