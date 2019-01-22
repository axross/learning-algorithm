import binarySearch, {
  BinarySearchStep,
  UnsortedCollectionError
} from "./binary-search";

describe("binarySearch for [0^2..99^2]", () => {
  const collection = Array.from(Array(100), (_, i) => i * i);

  test("binarySearch(2601, collection) takes 7 steps", () => {
    const steps: BinarySearchStep<any>[] = [];
    const onStep = (step: BinarySearchStep<any>) => steps.push(step);

    binarySearch({ collection, target: 2601, onStep });

    expect(steps.length).toBe(7);
  });

  test("binarySearch(2601, collection) finds the index of the target to be 51", () => {
    expect(binarySearch({ collection, target: 2601 })).toBe(51);
  });

  test("binarySearch(5000, collection) doesn't find it", () => {
    expect(binarySearch({ collection, target: 5000 })).toBe(-1);
  });

  test("binarySearch() throws an UnsortedCollectionError for unsorted collection", () => {
    expect(() =>
      binarySearch({ collection: [2, 0, 3, 4, 5, 1], target: 1 })
    ).toThrow(UnsortedCollectionError);
  });

  test("binarySearch(target, collection) O(log_2 n) caliculation size", () => {
    const length = 10000;

    for (let i = 0; i <= length; ++i) {
      const steps: BinarySearchStep<any>[] = [];
      const onStep = (step: BinarySearchStep<any>) => steps.push(step);

      binarySearch({ collection, target: i, onStep });

      expect(steps.length).toBeGreaterThanOrEqual(1);
      expect(steps.length).toBeLessThanOrEqual(Math.log2(length));
    }
  });
});
