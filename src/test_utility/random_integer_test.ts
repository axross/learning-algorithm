import { assert, test } from "https://deno.land/x/testing/mod.ts";
import randomInteger from "./random_integer.ts";

test({
  name: "randomInteger() returns a random integer from min to max",
  fn() {
    for (let i = 0; i < 10000; ++i) {
      const integer = randomInteger(0, 10);

      assert(integer >= 0);
      assert(integer <= 10);
    }
  }
});
