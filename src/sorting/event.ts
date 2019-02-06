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

export interface SortMerge<Value> {
  from: {
    a: Value[];
    b: Value[];
  };
  into: Value[];
}

export type OnMerge<Value> = (merge: SortMerge<Value>) => void;

export interface SortSplit<Value> {
  from: Value[];
  into: {
    a: Value[];
    b: Value[];
  };
}

export type OnSplit<Value> = (split: SortSplit<Value>) => void;
