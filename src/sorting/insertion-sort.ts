import { SortComparison, SortInsertion, SortSwap } from "./event";

function insertionSort<Value>({
  array,
  compare,
  onComparison = () => {},
  onSwap = () => {},
  onInsertion = () => {}
}: {
  array: Value[];
  compare: (a: Value, b: Value) => number;
  onComparison?: (step: SortComparison<Value>) => void;
  onSwap?: (swap: SortSwap<Value>) => void;
  onInsertion?: (step: SortInsertion<Value>) => void;
}): void {
  for (let i = 1; i < array.length; ++i) {
    let pickedValue = array[i];
    let lastComparedIndex: number | null = null;
    let lastComparedValue: Value | null = null;

    for (
      let compareWith = i - 1, picked = i;
      compareWith >= 0;
      --compareWith, --picked
    ) {
      onComparison({
        a: { index: picked, value: array[picked] },
        b: { index: compareWith, value: array[compareWith] }
      });

      if (compare(array[picked], array[compareWith]) < 0) {
        const compareWithValue = array[compareWith];
        const pickedValue = array[picked];

        [array[compareWith], array[picked]] = [pickedValue, compareWithValue];

        onSwap({
          a: { index: compareWith, value: compareWithValue },
          b: { index: picked, value: pickedValue }
        });

        lastComparedIndex = compareWith;
        lastComparedValue = compareWithValue;
      }
    }

    if (lastComparedIndex !== null && lastComparedValue !== null) {
      onInsertion({
        oldIndex: i,
        value: pickedValue,
        insertedBefore: {
          index: lastComparedIndex,
          value: lastComparedValue
        }
      });
    }
  }
}

export default insertionSort;

insertionSort({
  array: ["a", "f", "h", "b", "d", "g", "e", "c"],
  compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
});
