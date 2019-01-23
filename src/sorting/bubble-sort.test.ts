import bubbleSort, { BubbleSortStep } from "./bubble-sort";
import {
  sampleCharactors,
  shuffledSampleCharactors,
  sampleTwoCharactors,
  shuffledSampleTwoCharactors
} from "../test-utility/sample";

test(`bubbleSort(collection: ["${shuffledSampleCharactors[0]}", "${
  shuffledSampleCharactors[1]
}", "${shuffledSampleCharactors[2]}" ... ${
  shuffledSampleCharactors.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...shuffledSampleCharactors];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sampleCharactors);
});

test("the steps of bubbleSort() matches the previous snapshot", () => {
  const steps: BubbleSortStep<string>[] = [];

  bubbleSort({
    collection: [...shuffledSampleCharactors],
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onStep: step => steps.push(step)
  });

  expect(steps).toMatchSnapshot();
});

test("bubbleSort() is stable sort", () => {
  const collection = [...shuffledSampleTwoCharactors];

  bubbleSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(sampleTwoCharactors);
});
