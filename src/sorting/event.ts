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

export type OnSwap<Value> = (swap: SortSwap<Value>) => void;

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
