import { assert, test } from "https://deno.land/x/testing/mod.ts";
import { fibonacci, recursiveFibonacci } from "./fibonacci.ts";

test({
  name: "recursiveFibonacci() returns the nth fibonacci number (when n = 20)",
  fn() {
    assert.equal(recursiveFibonacci(20), 6765);
  }
});

test({
  name: "recursiveFibonacci() returns the nth fibonacci number (when n = 1)",
  fn() {
    assert.equal(recursiveFibonacci(1), 1);
  }
});

test({
  name: "recursiveFibonacci() returns the nth fibonacci number (when n = 0)",
  fn() {
    assert.equal(recursiveFibonacci(0), 0);
  }
});

test({
  name: "fibonacci() returns the nth fibonacci number (when n = 20)",
  fn() {
    assert.equal(fibonacci(20), 6765);
  }
});

test({
  name: "fibonacci() returns the nth fibonacci number (when n = 1)",
  fn() {
    assert.equal(fibonacci(1), 1);
  }
});

test({
  name: "fibonacci() returns the nth fibonacci number (when n = 0)",
  fn() {
    assert.equal(fibonacci(0), 0);
  }
});
