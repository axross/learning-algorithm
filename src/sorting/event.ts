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
  chosen: {
    index: number;
    value: Element;
  };
  before: {
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
