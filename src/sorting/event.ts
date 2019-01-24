export interface SortComparison<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}

export interface SortInsertion<Element> {
  oldIndex: number;
  value: Element;
  insertedBefore: {
    index: number;
    value: Element;
  };
}

export interface SortSwap<Element> {
  a: {
    index: number;
    value: Element;
  };
  b: {
    index: number;
    value: Element;
  };
}
