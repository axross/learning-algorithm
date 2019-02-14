import { assert, test } from "https://deno.land/x/testing/mod.ts";
import mergeSort, { isInternalNode, Node } from "./merge_sort.ts";
import { charactors, getRandomSample, staticSample } from "./sample.ts";

test({
  name: "mergeSort() sorts any array to be ordered",
  fn() {
    for (let i = 1; i <= 100; ++i) {
      const array = [...getRandomSample()];

      const sorted = mergeSort({
        array,
        compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
      });

      assert.equal(sorted, charactors);
    }
  }
});

test({
  name: "mergeSort() splits and merges arrays in the correct process",
  fn() {
    let splittedTree: any;
    const treesOnMerge: any[] = [];
    const array = [...staticSample];

    mergeSort({
      array,
      compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      onSplit: tree => {
        splittedTree = nodeToArray(tree);
      },
      onMerge: tree => treesOnMerge.push(nodeToArray(tree))
    });

    assert.equal(splittedTree!, [
      [[["f"], ["a"]], [["h"], ["b"]]],
      [[["d"], ["g"]], [["e"], ["c"]]]
    ]);

    assert.equal(treesOnMerge, [
      [[["a", "f"], [["h"], ["b"]]], [[["d"], ["g"]], [["e"], ["c"]]]],
      [[["a", "f"], ["b", "h"]], [[["d"], ["g"]], [["e"], ["c"]]]],
      [["a", "b", "f", "h"], [[["d"], ["g"]], [["e"], ["c"]]]],
      [["a", "b", "f", "h"], [["d", "g"], [["e"], ["c"]]]],
      [["a", "b", "f", "h"], [["d", "g"], ["c", "e"]]],
      [["a", "b", "f", "h"], ["c", "d", "e", "g"]],
      ["a", "b", "c", "d", "e", "f", "g", "h"]
    ]);
  }
});

function nodeToArray<Value>(node: Node<Value>): any[] {
  if (isInternalNode(node)) {
    return node.childNodes.map(childNode => nodeToArray(childNode));
  } else {
    return node.values;
  }
}
