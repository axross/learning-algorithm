import bubbleSort, { BubbleSortStep } from "./bubble-sort";
import {
  sortedAlphabets,
  sortedTwoLetters,
  unsortedAlphabets,
  unsortedTwoLetters
} from "./alphabets";

test(`bubbleSort(collection: ["${unsortedAlphabets[0]}", "${
  unsortedAlphabets[1]
}", "${unsortedAlphabets[2]}" ... ${
  unsortedAlphabets.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...unsortedAlphabets];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sortedAlphabets);
});

test("the steps of bubbleSort() matches the previous snapshot", () => {
  const steps: BubbleSortStep<any>[] = [];

  bubbleSort({
    collection: [...unsortedAlphabets],
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onStep: step => steps.push(step)
  });

  expect(steps).toMatchSnapshot();
});

test("bubbleSort() is stable sort", () => {
  const collection = [...unsortedTwoLetters];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sortedTwoLetters);
});
