import linearSearch from "./linear-search";
import { unsortedCharactors } from "./sample";

describe("linearSearch", () => {
  test(`linearSearch(target: "x") finds the index of the target to be ${unsortedCharactors.indexOf(
    "x"
  )}`, () => {
    expect(
      linearSearch({
        array: unsortedCharactors,
        target: "x"
      })
    ).toBe(unsortedCharactors.indexOf("x"));
  });

  test("linearSearch(target: 25000) doesn't find it", () => {
    expect(
      linearSearch({
        array: unsortedCharactors,
        target: "🍣"
      })
    ).toBe(-1);
  });

  test('linearSearch(target: "x") finds the target in the correct process', () => {
    const comparisonTargets: string[] = [];

    linearSearch({
      array: unsortedCharactors,
      target: "x",
      onComparison: comparison => comparisonTargets.push(comparison.value)
    });

    expect(comparisonTargets).toEqual([
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
  });
});
