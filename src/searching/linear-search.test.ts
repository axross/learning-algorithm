import linearSearch, { LinearSearchComparison } from "./linear-search";
import { unsortedCharactors } from "./sample";

describe("linearSearch", () => {
  test(`linearSearch(target: "x") finds the index of the target to be ${unsortedCharactors.indexOf(
    "x"
  )}`, () => {
    expect(
      linearSearch({
        list: unsortedCharactors,
        target: "x"
      })
    ).toBe(unsortedCharactors.indexOf("x"));
  });

  test("linearSearch(target: 25000) doesn't find it", () => {
    expect(
      linearSearch({
        list: unsortedCharactors,
        target: "🍣"
      })
    ).toBe(-1);
  });

  test('the step snapshot by linearSearch(target: "x") matches with the previous one', () => {
    const comparisons: LinearSearchComparison<string>[] = [];

    linearSearch({
      list: unsortedCharactors,
      target: "x",
      onComparison: comparison => comparisons.push(comparison)
    });

    expect({
      from: unsortedCharactors,
      target: "x",
      comparisons
    }).toMatchSnapshot();
  });
});
