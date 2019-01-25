import { swap } from "./utility";

describe("swap(array, a, b[, onSwap])", () => {
  test("swaps the values at a and b in the array", () => {
    const array = ["a", "b", "c", "d", "e"];

    swap(array, 1, 3);

    expect(array).toEqual(["a", "d", "c", "b", "e"]);
  });

  test("calls onSwap with an event object", () => {
    const onSwap = jest.fn();

    swap(["a", "b", "c", "d", "e"], 1, 3, onSwap);

    expect(onSwap).toHaveBeenCalledWith({
      a: { index: 1, value: "b" },
      b: { index: 3, value: "d" }
    });
  });

  test("calls onSwap only once", () => {
    const onSwap = jest.fn();

    swap(["a", "b", "c", "d", "e"], 1, 3, onSwap);

    expect(onSwap).toHaveBeenCalledTimes(1);
  });

  test("calls onSwap after the swap", () => {
    const array = ["a", "b", "c", "d", "e"];

    let maybeSwapped: string[] = [];
    const onSwap = () => {
      maybeSwapped = array;
    };

    swap(array, 1, 3, onSwap);

    expect(maybeSwapped).toEqual(["a", "d", "c", "b", "e"]);
  });
});
