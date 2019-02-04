import solveWaterPouring from "./water-pouring";

describe("solveWaterPouring({jugCapacities, targetQuantity})", () => {
  test("returns instructions to make targetQuantity", () => {
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

      expect(results.length).toBeGreaterThan(1);
    }
  });

  test("returns instructions not duplicated", () => {
    const results = solveWaterPouring({
      jugCapacities: [5, 3],
      targetQuantity: 4
    });

    expect(results.length).toBe(2);
    expect(results[0].manipulationLogs).not.toEqual(
      results[1].manipulationLogs
    );
  });
});
