import { assert, equal, test } from "https://deno.land/x/testing/mod.ts";
import solveWaterPouring from "./water_pouring.ts";

test({
  name: "solveWaterPouring() returns instructions to make targetQuantity",
  fn() {
    const problems = [
      {
        jugCapacities: [5, 4],
        targetQuantity: 2
      },
      {
        jugCapacities: [4, 3],
        targetQuantity: 2
      },
      {
        jugCapacities: [9, 4],
        targetQuantity: 6
      },
      {
        jugCapacities: [8, 5, 3],
        targetQuantity: 4
      }
    ];

    for (const { jugCapacities, targetQuantity } of problems) {
      const results = solveWaterPouring({ jugCapacities, targetQuantity });

      assert(results.length > 1);
    }
  }
});

test({
  name: "solveWaterPouring() returns instructions not duplicated",
  fn() {
    const results = solveWaterPouring({
      jugCapacities: [5, 3],
      targetQuantity: 4
    });

    assert.strictEqual(results.length, 2);
    assert(!equal(results[0].manipulationLogs, results[1].manipulationLogs));
  }
});
