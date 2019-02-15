import { assert, test } from "https://deno.land/x/testing/mod.ts";
import { factorial, recursiveFactorial } from "./factorial.ts";

test({
  name: "factorial() returns the factorial of n (when n = 10)",
  fn() {
    assert.equal(factorial(10), 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
  }
});

test({
  name: "factorial() returns the factorial of n (when n = 2)",
  fn() {
    assert.equal(factorial(2), 2);
  }
});

test({
  name: "factorial() returns the factorial of n (when n = 1)",
  fn() {
    assert.equal(factorial(1), 1);
  }
});

test({
  name: "factorial() returns the factorial of n (when n = 0)",
  fn() {
    assert.equal(factorial(0), 1);
  }
});

test({
  name: "recursiveFactorial() returns the factorial of n (when n = 10)",
  fn() {
    assert.equal(recursiveFactorial(10), 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2);
  }
});

test({
  name: "recursiveFactorial() returns the factorial of n (when n = 2)",
  fn() {
    assert.equal(recursiveFactorial(2), 2);
  }
});

test({
  name: "recursiveFactorial() returns the factorial of n (when n = 1)",
  fn() {
    assert.equal(recursiveFactorial(1), 1);
  }
});

test({
  name: "recursiveFactorial() returns the factorial of n (when n = 0)",
  fn() {
    assert.equal(recursiveFactorial(0), 1);
  }
});
