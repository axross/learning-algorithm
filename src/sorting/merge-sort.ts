import { OnMerge, OnSplit } from "./event";

function mergeSort<Value>({
  array,
  compare,
  onSplit = () => {},
  onMerge = () => {}
}: {
  array: Value[];
  compare: (a: Value, b: Value) => number;
  onSplit?: OnSplit<Value>;
  onMerge?: OnMerge<Value>;
}): Value[] {
  return merge({ group: split({ array, onSplit }), compare, onMerge });
}

function split<Value>({
  array,
  onSplit
}: {
  array: Value[];
  onSplit: OnSplit<Value>;
}): Group<Value> {
  if (array.length <= 2) {
    return {
      left: [array[0]],
      right: array[1] === undefined ? [] : [array[1]],
      __isGroup: true
    };
  }

  const middleIndex = Math.ceil(array.length / 2);
  const left: any[] = [];
  const right: any[] = [];

  for (let i = 0; i < array.length; ++i) {
    if (i < middleIndex) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  onSplit({
    from: array,
    into: {
      a: left,
      b: right
    }
  });

  return {
    left: split({ array: left, onSplit }),
    right: split({ array: right, onSplit }),
    __isGroup: true
  };
}

function merge<Value>({
  group,
  compare,
  onMerge
}: {
  group: Group<Value>;
  compare: (a: Value, b: Value) => number;
  onMerge: OnMerge<Value>;
}): Value[] {
  const left = isGroup(group.left)
    ? merge({ group: group.left as Group<Value>, compare, onMerge })
    : (group.left as Value[]);
  const right = isGroup(group.right)
    ? merge({ group: group.right as Group<Value>, compare, onMerge })
    : (group.right as Value[]);

  let leftIndex = 0;
  let rightIndex = 0;

  const merged: Value[] = [];

  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex === left.length) {
      merged.push(right[rightIndex]);

      rightIndex += 1;

      continue;
    }

    if (rightIndex === right.length) {
      merged.push(left[leftIndex]);

      leftIndex += 1;

      continue;
    }

    if (compare(left[leftIndex], right[rightIndex]) < 0) {
      merged.push(left[leftIndex]);

      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]);

      rightIndex += 1;
    }
  }

  onMerge({
    from: {
      a: left,
      b: right
    },
    into: merged
  });

  return merged;
}

function isGroup<Value>(maybeGroup: Group<Value> | Value[]) {
  return (maybeGroup as any)["__isGroup"] === true ? true : false;
}

interface Group<Value> {
  left: Group<Value> | Value[];
  right: Group<Value> | Value[];
  __isGroup: true;
}

export default mergeSort;
