import binarySearch from "./binary-search";
import { sortedCharactors } from "./sample";

describe("binarySearch", () => {
  test(`binarySearch(target: "x") finds the index of the target to be ${sortedCharactors.indexOf(
    "x"
  )}`, () => {
    expect(
      binarySearch({
        array: sortedCharactors,
        target: "x",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(sortedCharactors.indexOf("x"));
  });

  test("binarySearch(target: 25000) doesn't find it", () => {
    expect(
      binarySearch({
        array: sortedCharactors,
        target: "🍣",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(-1);
  });

  test('binarySearch(target: "x") finds the target in the correct process', () => {
    const comparisonTargets: string[] = [];

    binarySearch({
      array: sortedCharactors,
      target: "x",
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onComparison: comparison => comparisonTargets.push(comparison.value)
    });

    expect(comparisonTargets).toEqual(["m", "t", "w", "y"]);
  });
});
