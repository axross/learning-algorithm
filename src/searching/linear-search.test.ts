import linearSearch, { LinearSearchStep } from "./linear-search";
import { sampleCharactors } from "../test-utility/sample";

describe("linearSearch", () => {
  const list = sampleCharactors;

  test(`linearSearch(target: "X") finds the index of the target to be ${sampleCharactors.indexOf(
    "X"
  )}`, () => {
    expect(
      linearSearch({
        list: list,
        target: "X"
      })
    ).toBe(sampleCharactors.indexOf("X"));
  });

  test("linearSearch(target: 25000) doesn't find it", () => {
    expect(
      linearSearch({
        list: list,
        target: "🍣"
      })
    ).toBe(-1);
  });

  test('the step snapshot by linearSearch(target: "X") matches with the previous one', () => {
    const steps: LinearSearchStep<string>[] = [];

    linearSearch({
      list: list,
      target: "X",
      onStep: step => steps.push(step)
    });

    expect(steps).toMatchSnapshot();
  });

  test("the maximum caliculation size is O(n)", () => {
    let maximumStepLength = 0;

    for (let i = 0; i < list.length; ++i) {
      const steps: LinearSearchStep<string>[] = [];

      linearSearch({
        list: list,
        target: list[i],
        onStep: step => steps.push(step)
      });

      if (steps.length > maximumStepLength) {
        maximumStepLength = steps.length;
      }
    }

    expect(maximumStepLength).toBe(list.length);
  });

  test("the avarage caliculation size is O((n + 1) / 2)", () => {
    let totalStepLengths = 0;

    for (let i = 0; i < list.length; ++i) {
      const steps: LinearSearchStep<string>[] = [];

      linearSearch({
        list: list,
        target: list[i],
        onStep: step => steps.push(step)
      });

      totalStepLengths = totalStepLengths + steps.length;
    }

    expect(Math.floor(totalStepLengths / list.length)).toBe(
      Math.floor((list.length + 1) / 2)
    );
  });
});
