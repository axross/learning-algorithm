import selectionSort, { SelectionSortStep } from "./selection-sort";
import {
  constantShuffledSampleCharactors,
  sampleCharactors,
  shuffledSampleCharactors,
  sampleTwoCharactors,
  shuffledSampleTwoCharactors
} from "../test-utility/sample";

test(`selectionSort(collection: ["${shuffledSampleCharactors[0]}", "${
  shuffledSampleCharactors[1]
}", "${shuffledSampleCharactors[2]}" ... ${
  shuffledSampleCharactors.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...shuffledSampleCharactors];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sampleCharactors);
});

test("the steps of selectionSort() matches the previous snapshot", () => {
  const steps: SelectionSortStep<any>[] = [];

  selectionSort({
    collection: [...constantShuffledSampleCharactors],
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onStep: step => steps.push(step)
  });

  expect(steps).toMatchSnapshot();
});

test("selectionSort() is not stable sort", () => {
  const collection = [...shuffledSampleTwoCharactors];

  selectionSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).not.toEqual(sampleTwoCharactors);
});
