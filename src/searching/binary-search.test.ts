import binarySearch, { BinarySearchStep } from "./binary-search";

describe("binarySearch for [0^2..255^2]", () => {
  const list = Array.from({ length: 256 }, (_, i) => Math.pow(i, 2));

  test("binarySearch(target: 16384) takes 8 steps", () => {
    const steps: BinarySearchStep<any>[] = [];

    binarySearch({
      list,
      target: 16384,
      compare: (a, b) => a - b,
      onStep: step => steps.push(step)
    });

    expect(steps.length).toBe(8);
  });

  test("binarySearch(target: 16129) takes 1 steps", () => {
    const steps: BinarySearchStep<any>[] = [];

    binarySearch({
      list,
      target: 16129,
      compare: (a, b) => a - b,
      onStep: step => steps.push(step)
    });

    expect(steps.length).toBe(1);
  });

  test("binarySearch(target: 16384) finds the index of the target to be 128", () => {
    expect(
      binarySearch({ list, target: 16384, compare: (a, b) => a - b })
    ).toBe(128);
  });

  test("binarySearch(target: 25000) doesn't find it", () => {
    expect(
      binarySearch({ list, target: 25000, compare: (a, b) => a - b })
    ).toBe(-1);
  });

  test("binarySearch() is O(log_2 n) caliculation size", () => {
    for (let i = 0; i <= list[list.length - 1]; ++i) {
      const steps: BinarySearchStep<any>[] = [];

      binarySearch({
        list,
        target: i,
        compare: (a, b) => a - b,
        onStep: step => steps.push(step)
      });

      expect(steps.length).toBeGreaterThanOrEqual(1);
      expect(steps.length).toBeLessThanOrEqual(Math.log2(list.length) + 1);
    }
  });
});

describe('binarySearch for ["a", "b", "c", ... "x", "y", "z"]', () => {
  const list = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  test('binarySearch(target: "j") finds the index of the target to be 9', () => {
    expect(
      binarySearch({
        list,
        target: "j",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(9);
  });

  test('binarySearch(target: "!") doesn\'t find it', () => {
    expect(
      binarySearch({
        list,
        target: "!",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(-1);
  });
});
