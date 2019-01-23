function roundRobin<Element>(
  elements: Element[],
  list?: Element[][]
): Element[][] {
  if (list === undefined) {
    list = elements.map(element => [element]);
  }

  if (list[0].length === elements.length) {
    return list;
  }

  return list.reduce(
    (arr, item) => {
      const newItems = elements
        .filter(element => !item.includes(element))
        .map(element => [...item, element]);

      return [...arr, ...roundRobin(elements, [...newItems])];
    },
    [] as Element[][]
  );
}

export default roundRobin;
