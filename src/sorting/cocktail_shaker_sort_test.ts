import { assert, test } from "https://deno.land/x/testing/mod.ts";
import cocktailShakerSort from "./cocktail_shaker_sort.ts";
import { charactors, getRandomSample, staticSample } from "./sample.ts";

test({
  name: "cocktailShakerSort() sorts any array to be ordered",
  fn() {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      cocktailShakerSort({
        array,
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      assert.equal(array, charactors);
    }
  }
});

test({
  name: "cocktailShakerSort() sorts an array in the correct process",
  fn() {
    const changesOnSwap: string[][] = [];
    const array = [...staticSample];

    cocktailShakerSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onSwap: () => changesOnSwap.push([...array])
    });

    assert.equal(changesOnSwap, [
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
  }
});
