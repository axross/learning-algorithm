import { assert, test } from "https://deno.land/x/testing/mod.ts";
import linearSearch from "./linear_search.ts";
import { unsortedCharactors } from "./sample.ts";

test({
  name: `linearSearch(target: "x") finds the index of the target to be ${unsortedCharactors.indexOf(
    "x"
  )}`,
  fn() {
    assert.equal(
      linearSearch({
        array: unsortedCharactors,
        target: "x"
      }),
      unsortedCharactors.indexOf("x")
    );
  }
});

test({
  name: "linearSearch(target: 25000) doesn't find it",
  fn() {
    assert.equal(
      linearSearch({
        array: unsortedCharactors,
        target: "🍣"
      }),
      -1
    );
  }
});

test({
  name: 'linearSearch(target: "x") finds the target in the correct process',
  fn() {
    const comparisonTargets: string[] = [];

    linearSearch({
      array: unsortedCharactors,
      target: "x",
      onComparison: comparison => comparisonTargets.push(comparison.value)
    });

    assert.equal(comparisonTargets, [
      "c",
      "n",
      "r",
      "j",
      "m",
      "s",
      "b",
      "u",
      "w",
      "y",
      "h",
      "t",
      "v",
      "f",
      "z",
      "g",
      "x"
    ]);
  }
});
