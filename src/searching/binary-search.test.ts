import binarySearch, {
  BinarySearchStep,
  UnsortedCollectionError
} from "./binary-search";

describe("binarySearch for [0^2..99^2]", () => {
  const collection = Array.from({ length: 100 }, (_, i) => i * i);

  test("binarySearch(target: 2601) takes 7 steps", () => {
    const steps: BinarySearchStep<any>[] = [];
    const onStep = (step: BinarySearchStep<any>) => steps.push(step);

    binarySearch({
      collection,
      target: 2601,
      compare: (a, b) => a - b,
      onStep
    });

    expect(steps.length).toBe(7);
  });

  test("binarySearch(target: 2601) finds the index of the target to be 51", () => {
    expect(
      binarySearch({ collection, target: 2601, compare: (a, b) => a - b })
    ).toBe(51);
  });

  test("binarySearch(target: 5000) doesn't find it", () => {
    expect(
      binarySearch({ collection, target: 5000, compare: (a, b) => a - b })
    ).toBe(-1);
  });

  test("binarySearch() throws an UnsortedCollectionError for unsorted collection", () => {
    expect(() =>
      binarySearch({
        collection: [2, 0, 3, 4, 5, 1],
        target: 1,
        compare: (a, b) => a - b
      })
    ).toThrow(UnsortedCollectionError);
  });

  test("binarySearch() is O(log_2 n) caliculation size", () => {
    const length = 10000;

    for (let i = 0; i <= length; ++i) {
      const steps: BinarySearchStep<any>[] = [];
      const onStep = (step: BinarySearchStep<any>) => steps.push(step);

      binarySearch({ collection, target: i, compare: (a, b) => a - b, onStep });

      expect(steps.length).toBeGreaterThanOrEqual(1);
      expect(steps.length).toBeLessThanOrEqual(Math.log2(length));
    }
  });
});

describe('binarySearch for ["a", "b", "c", ... "x", "y", "z"]', () => {
  const collection = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  test('binarySearch(target: "j") finds the index of the target to be 9', () => {
    expect(
      binarySearch({
        collection,
        target: "j",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(9);
  });

  test('binarySearch(target: "!") doesn\'t find it', () => {
    expect(
      binarySearch({
        collection,
        target: "!",
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      })
    ).toBe(-1);
  });
});
