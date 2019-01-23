import selectionSort, { SelectionSortStep } from "./selection-sort";
import {
  sortedAlphabets,
  sortedTwoLetters,
  unsortedAlphabets,
  unsortedTwoLetters
} from "./alphabets";

test(`selectionSort(collection: ["${unsortedAlphabets[0]}", "${
  unsortedAlphabets[1]
}", "${unsortedAlphabets[2]}" ... ${
  unsortedAlphabets.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...unsortedAlphabets];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sortedAlphabets);
});

test("the steps of selectionSort() matches the previous snapshot", () => {
  const steps: SelectionSortStep<any>[] = [];

  selectionSort({
    collection: [...unsortedAlphabets],
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onStep: step => steps.push(step)
  });

  expect(steps).toMatchSnapshot();
});

test("selectionSort() is not stable sort", () => {
  const collection = [...unsortedTwoLetters];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).not.toEqual(sortedTwoLetters);
});
