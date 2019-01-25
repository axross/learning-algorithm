import { factorial, recursiveFactorial } from "./factorial";

describe("factorial(n)", () => {
  test("", () => {
    expect(factorial(10)).toBe(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
  });

  test("returns the factorial of n (when n = 2)", () => {
    expect(factorial(2)).toBe(2);
  });

  test("returns the factorial of n (when n = 1)", () => {
    expect(factorial(1)).toBe(1);
  });

  test("returns the factorial of n (when n = 0)", () => {
    expect(factorial(0)).toBe(1);
  });
});

describe("recursiveFactorial(n)", () => {
  test("returns the factorial of n (when n = 10)", () => {
    expect(recursiveFactorial(10)).toBe(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
  });

  test("returns the factorial of n (when n = 2)", () => {
    expect(recursiveFactorial(2)).toBe(2);
  });

  test("returns the factorial of n (when n = 1)", () => {
    expect(recursiveFactorial(1)).toBe(1);
  });

  test("returns the factorial of n (when n = 0)", () => {
    expect(recursiveFactorial(0)).toBe(1);
  });
});
