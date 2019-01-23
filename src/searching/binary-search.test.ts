import binarySearch, { BinarySearchStep } from "./binary-search";
import { sampleCharactors } from "../test-utility/sample";

describe("binarySearch", () => {
  const list = sampleCharactors;

  test(`binarySearch(target: "X") finds the index of the target to be ${sampleCharactors.indexOf(
    "X"
  )}`, () => {
    expect(
      binarySearch({
        list: list,
        target: "X",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(sampleCharactors.indexOf("X"));
  });

  test("binarySearch(target: 25000) doesn't find it", () => {
    expect(
      binarySearch({
        list: list,
        target: "🍣",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(-1);
  });

  test('the step snapshot by binarySearch(target: "X") matches with the previous one', () => {
    const steps: BinarySearchStep<string>[] = [];

    binarySearch({
      list: list,
      target: "X",
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onStep: step => steps.push(step)
    });

    expect(steps).toMatchSnapshot();
  });

  test("the maximum caliculation size is O(log_2 n + 1)", () => {
    let maximumStepLength = 0;

    for (let i = 0; i < list.length; ++i) {
      const steps: BinarySearchStep<string>[] = [];

      binarySearch({
        list: list,
        target: list[i],
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
        onStep: step => steps.push(step)
      });

      if (steps.length > maximumStepLength) {
        maximumStepLength = steps.length;
      }
    }

    expect(maximumStepLength).toBe(Math.floor(Math.log2(list.length)) + 1);
  });

  test("the avarage caliculation size is O(log_2 n)", () => {
    let totalStepLengths = 0;

    for (let i = 0; i < list.length; ++i) {
      const steps: BinarySearchStep<string>[] = [];

      binarySearch({
        list: list,
        target: list[i],
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
        onStep: step => steps.push(step)
      });

      totalStepLengths = totalStepLengths + steps.length;
    }

    expect(Math.floor(totalStepLengths / list.length)).toBe(
      Math.floor(Math.log2(list.length))
    );
  });
});
