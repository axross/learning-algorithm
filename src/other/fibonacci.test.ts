import { fibonacci, recursiveFibonacci } from "./fibonacci";

describe("recursiveFibonacci(nth)", () => {
  test("returns the nth fibonacci number (when n = 20)", () => {
    expect(recursiveFibonacci(20)).toBe(6765);
  });

  test("returns the nth fibonacci number (when n = 2)", () => {
    expect(recursiveFibonacci(2)).toBe(1);
  });

  test("returns the nth fibonacci number (when n = 1)", () => {
    expect(recursiveFibonacci(1)).toBe(1);
  });

  test("returns the nth fibonacci number (when n = 0)", () => {
    expect(recursiveFibonacci(0)).toBe(0);
  });
});

describe("fibonacci(nth)", () => {
  test("returns the nth fibonacci number (when n = 20)", () => {
    expect(fibonacci(20)).toBe(6765);
  });

  test("returns the nth fibonacci number (when n = 2)", () => {
    expect(fibonacci(2)).toBe(1);
  });

  test("returns the nth fibonacci number (when n = 1)", () => {
    expect(fibonacci(1)).toBe(1);
  });

  test("returns the nth fibonacci number (when n = 0)", () => {
    expect(fibonacci(0)).toBe(0);
  });
});
