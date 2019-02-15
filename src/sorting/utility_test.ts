import { swap } from "./utility.ts";
import { assert, test } from "https://deno.land/x/testing/mod.ts";

test({
  name: "swap() swaps the values at a and b in the array",
  fn() {
    const array = ["a", "b", "c", "d", "e"];

    swap(array, 1, 3);

    assert.equal(array, ["a", "d", "c", "b", "e"]);
  }
});

test({
  name: "swap() calls onSwap with an event object",
  fn() {
    let lastCalledArguments: any;
    const onSwap = (...args: any[]) => {
      lastCalledArguments = args;
    };

    swap(["a", "b", "c", "d", "e"], 1, 3, onSwap);

    assert.equal(lastCalledArguments, [
      {
        a: { index: 1, value: "b" },
        b: { index: 3, value: "d" }
      }
    ]);
  }
});

test({
  name: "swap() calls onSwap only once",
  fn() {
    const calledArguments: any[] = [];
    const onSwap = (...args: any[]) => {
      calledArguments.push(args);
    };

    swap(["a", "b", "c", "d", "e"], 1, 3, onSwap);

    assert.strictEqual(calledArguments.length, 1);
  }
});

test({
  name: "swap() onSwap after the swap",
  fn() {
    const array = ["a", "b", "c", "d", "e"];

    let maybeSwapped: string[] = [];
    const onSwap = () => {
      maybeSwapped = array;
    };

    swap(array, 1, 3, onSwap);

    assert.equal(maybeSwapped, ["a", "d", "c", "b", "e"]);
  }
});
