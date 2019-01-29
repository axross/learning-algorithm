import randomInteger from "./random-integer";

describe("randomInteger(min, max)", () => {
  test("returns a random integer from min to max", () => {
    for (let i = 0; i < 10000; ++i) {
      const integer = randomInteger(0, 10);

      expect(integer).toBeGreaterThanOrEqual(0);
      expect(integer).toBeLessThanOrEqual(10);
    }
  });
});
