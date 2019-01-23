import selectionSort, {
  SelectionSortComparison,
  SelectionSortSwap
} from "./selection-sort";
import { charactors, randomSample, staticSample } from "./sample";

test(`selectionSort(collection: ["${randomSample[0]}", "${randomSample[1]}", "${
  randomSample[2]
}" ... ${
  randomSample.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...randomSample];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(charactors);
});

test("the steps of selectionSort() matches the previous snapshot", () => {
  const comparisons: SelectionSortComparison<string>[] = [];
  const swaps: SelectionSortSwap<string>[] = [];
  const collection = [...staticSample];

  selectionSort({
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
