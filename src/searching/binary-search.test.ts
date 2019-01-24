import { SearchComparison } from "./event";
import binarySearch from "./binary-search";
import { sortedCharactors } from "./sample";

describe("binarySearch", () => {
  test(`binarySearch(target: "x") finds the index of the target to be ${sortedCharactors.indexOf(
    "x"
  )}`, () => {
    expect(
      binarySearch({
        list: sortedCharactors,
        target: "x",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(sortedCharactors.indexOf("x"));
  });

  test("binarySearch(target: 25000) doesn't find it", () => {
    expect(
      binarySearch({
        list: sortedCharactors,
        target: "🍣",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(-1);
  });

  test('the step snapshot by binarySearch(target: "x") matches with the previous one', () => {
    const comparisons: SearchComparison<string>[] = [];

    binarySearch({
      list: sortedCharactors,
      target: "x",
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onComparison: comparison => comparisons.push(comparison)
    });

    expect({
      from: sortedCharactors,
      target: "x",
      comparisons
    }).toMatchSnapshot();
  });
});
