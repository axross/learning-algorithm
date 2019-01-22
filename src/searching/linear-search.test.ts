import linearSearch, { LinearSearchStep } from "./linear-search";

describe("linearSearch for [0^2..99^2]", () => {
  const collection = Array.from(Array(100), (_, i) => i * i);

  test("linearSearch(2601, collection) takes 52 steps", () => {
    const steps: LinearSearchStep<any>[] = [];
    const onStep = (step: LinearSearchStep<any>) => steps.push(step);

    linearSearch({ collection, target: 2601, onStep });

    expect(steps.length).toBe(52);
  });

  test("linearSearch(2601, collection) finds the index of the target to be 51", () => {
    expect(linearSearch({ collection, target: 2601 })).toBe(51);
  });

  test("linearSearch(5000, collection) doesn't find it", () => {
    expect(linearSearch({ collection, target: 5000 })).toBe(-1);
  });

  test("linearSearch(target, collection) is O(n) caliculation size", () => {
    const length = 10000;

    for (let i = 0; i <= length; ++i) {
      const steps: LinearSearchStep<any>[] = [];
      const onStep = (step: LinearSearchStep<any>) => steps.push(step);

      linearSearch({ collection, target: i, onStep });

      expect(steps.length).toBeGreaterThanOrEqual(1);
      expect(steps.length).toBeLessThanOrEqual(length);
    }
  });
});
