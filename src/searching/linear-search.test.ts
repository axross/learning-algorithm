import linearSearch, { LinearSearchStep } from "./linear-search";

describe("linearSearch for [0^2..255^2]", () => {
  const list = Array.from({ length: 256 }, (_, i) => Math.pow(i, 2));

  test("linearSearch(target: 16384) takes 129 steps", () => {
    const steps: LinearSearchStep<any>[] = [];

    linearSearch({ list, target: 16384, onStep: step => steps.push(step) });

    expect(steps.length).toBe(129);
  });

  test("linearSearch(target: 16384) finds the index of the target to be 128", () => {
    expect(linearSearch({ list, target: 16384 })).toBe(128);
  });

  test("linearSearch(target: 25000) doesn't find it", () => {
    expect(linearSearch({ list, target: 25000 })).toBe(-1);
  });

  test("linearSearch() is O(n) caliculation size", () => {
    for (let i = 0; i <= list[list.length - 1]; ++i) {
      const steps: LinearSearchStep<any>[] = [];

      linearSearch({ list, target: i, onStep: step => steps.push(step) });

      expect(steps.length).toBeGreaterThanOrEqual(1);
      expect(steps.length).toBeLessThanOrEqual(list.length);
    }
  });
});

describe('linearSearch for ["a", "b", "c", ... "x", "y", "z"]', () => {
  const list = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  test('linearSearch(target: "j") finds the index of the target to be 9', () => {
    expect(
      linearSearch({
        list,
        target: "j"
      })
    ).toBe(9);
  });

  test('linearSearch(target: "!") doesn\'t find it', () => {
    expect(
      linearSearch({
        list,
        target: "!"
      })
    ).toBe(-1);
  });
});
