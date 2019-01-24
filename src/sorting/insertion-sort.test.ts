import insertionSort, {
  InsertionSortComparison,
  InsertionSortInsertion
} from "./insertion-sort";
import { charactors, randomSample, staticSample } from "./sample";

test(`insertionSort(collection: ["${randomSample[0]}", "${randomSample[1]}", "${
  randomSample[2]
}" ... ${
  randomSample.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...randomSample];

  insertionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(charactors);
});

test("the steps of insertionSort() matches the previous snapshot", () => {
  const comparisons: InsertionSortComparison<string>[] = [];
  const insertions: InsertionSortInsertion<string>[] = [];
  const collection = [...staticSample];

  insertionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onComparison: comparison => comparisons.push(comparison),
    onInsertion: insertion => insertions.push(insertion)
  });

  expect({
    from: staticSample,
    to: collection,
    comparisons,
    insertions
  }).toMatchSnapshot();
});
