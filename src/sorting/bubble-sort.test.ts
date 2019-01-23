import bubbleSort, {
  BubbleSortComparison,
  BubbleSortSwap
} from "./bubble-sort";
import { charactors, randomSample, staticSample } from "./sample";

test(`bubbleSort(collection: ["${randomSample[0]}", "${randomSample[1]}", "${
  randomSample[2]
}" ... ${
  randomSample.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...randomSample];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(charactors);
});

test("the steps of bubbleSort() matches the previous snapshot", () => {
  const comparisons: BubbleSortComparison<string>[] = [];
  const swaps: BubbleSortSwap<string>[] = [];
  const collection = [...staticSample];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onCompare: comparison => comparisons.push(comparison),
    onSwap: swap => swaps.push(swap)
  });

  expect({
    from: staticSample,
    to: collection,
    comparisons,
    swaps
  }).toMatchSnapshot();
});
