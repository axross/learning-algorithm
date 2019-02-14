import { assert, test } from "https://deno.land/x/testing/mod.ts";
import binarySearch from "./binary_search.ts";
import { sortedCharactors } from "./sample.ts";

test({
  name: `binarySearch(target: "x") finds the index of the target to be ${sortedCharactors.indexOf(
    "x"
  )}`,
  fn() {
    assert.equal(
      binarySearch({
        array: sortedCharactors,
        target: "x",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      }),
      sortedCharactors.indexOf("x")
    );
  }
});

test({
  name: "binarySearch(target: 25000) doesn't find it",
  fn() {
    assert.equal(
      binarySearch({
        array: sortedCharactors,
        target: "🍣",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      }),
      -1
    );
  }
});

test({
  name: 'binarySearch(target: "x") finds the target in the correct process',
  fn() {
    assert.equal(
      binarySearch({
        array: sortedCharactors,
        target: "🍣",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      }),
      -1
    );

    const comparisonTargets: string[] = [];

    binarySearch({
      array: sortedCharactors,
      target: "x",
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onComparison: comparison => comparisonTargets.push(comparison.value)
    });

    assert.equal(comparisonTargets, ["m", "t", "w", "y"]);
  }
});
