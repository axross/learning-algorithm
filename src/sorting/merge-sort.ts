import Compare from "../compare";

function mergeSort<Value>({
  array,
  compare,
  splitInto = 2,
  onSplit = () => {},
  onMerge = () => {}
}: {
  array: Value[];
  compare: Compare<Value>;
  splitInto?: number;
  onSplit?: OnSplit<Value>;
  onMerge?: OnMerge<Value>;
}) {
  const tree = splitIntoTree(array, splitInto);

  if (isInternalNode(tree)) {
    onSplit(tree);

    const merged = tree.mergeChildren(compare, () => onMerge(tree));

    onMerge(merged);

    return merged.values;
  }

  return tree.values;
}

function splitIntoTree<Value>(values: Value[], splitInto: number): Node<Value> {
  if (values.length === 1) {
    return new _LeafNode(values);
  }

  const childNodes: Node<Value>[] = [];
  let i = 0;
  let _splitInto = splitInto;

  while (i < values.length) {
    const childNode = splitIntoTree(
      values.slice(i, i + Math.ceil((values.length - i) / _splitInto)),
      splitInto
    );

    childNodes.push(childNode);

    i += Math.ceil((values.length - i) / _splitInto);
    _splitInto -= 1;
  }

  return new _InternalNode(childNodes);
}

export function isInternalNode<Value>(
  value: Node<Value>
): value is InternalNode<Value> {
  return (value as any).mergeChildren !== undefined;
}

export type Node<Value> = InternalNode<Value> | LeafNode<Value>;

export interface InternalNode<Value> {
  childNodes: Node<Value>[];

  mergeChildren(compare: Compare<Value>, onMerge: () => void): LeafNode<Value>;
}

class _InternalNode<Value> implements InternalNode<Value> {
  constructor(public childNodes: Node<Value>[]) {}

  mergeChildren(
    compare: Compare<Value>,
    onMerge: () => void = () => {}
  ): LeafNode<Value> {
    for (let i = 0; i < this.childNodes.length; ++i) {
      const childNode = this.childNodes[i];

      if (isInternalNode(childNode)) {
        this.childNodes[i] = childNode.mergeChildren(compare, onMerge);

        onMerge();
      } else {
        this.childNodes[i] = childNode;
      }
    }

    const childNodes = this.childNodes as LeafNode<Value>[];

    const indexes = new Map(
      this.childNodes.map((_, i) => [i, 0] as [number, number])
    );
    const merged: Value[] = [];

    while (true) {
      let minimumValueChild: number | undefined;

      for (let i = 0; i < childNodes.length; ++i) {
        if (indexes.get(i) === childNodes[i].values.length) {
          continue;
        }

        if (minimumValueChild === undefined) {
          minimumValueChild = i;

          continue;
        }

        if (
          compare(
            childNodes[i].values[indexes.get(i)!],
            childNodes[minimumValueChild].values[
              indexes.get(minimumValueChild)!
            ]
          ) < 0
        ) {
          minimumValueChild = i;
        }
      }

      if (minimumValueChild === undefined) {
        break;
      }

      merged.push(
        childNodes[minimumValueChild].values[indexes.get(minimumValueChild)!]
      );

      indexes.set(minimumValueChild, indexes.get(minimumValueChild)! + 1);
    }

    return new _LeafNode(merged);
  }
}

export interface LeafNode<Value> {
  values: Value[];
}

class _LeafNode<Value> implements LeafNode<Value> {
  constructor(public values: Value[]) {}
}

export type OnSplit<Value> = (tree: InternalNode<Value>) => void;

export type OnMerge<Value> = (tree: Node<Value>) => void;

export default mergeSort;
