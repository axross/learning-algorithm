import roundRobin from "./round-robin";

test('roundRobin(["a", "b", "c", "d"]) returns a round-robin list of given charactors', () => {
  expect(roundRobin(["a", "b", "c", "d"])).toEqual([
    ["a", "b", "c", "d"],
    ["a", "b", "d", "c"],
    ["a", "c", "b", "d"],
    ["a", "c", "d", "b"],
    ["a", "d", "b", "c"],
    ["a", "d", "c", "b"],
    ["b", "a", "c", "d"],
    ["b", "a", "d", "c"],
    ["b", "c", "a", "d"],
    ["b", "c", "d", "a"],
    ["b", "d", "a", "c"],
    ["b", "d", "c", "a"],
    ["c", "a", "b", "d"],
    ["c", "a", "d", "b"],
    ["c", "b", "a", "d"],
    ["c", "b", "d", "a"],
    ["c", "d", "a", "b"],
    ["c", "d", "b", "a"],
    ["d", "a", "b", "c"],
    ["d", "a", "c", "b"],
    ["d", "b", "a", "c"],
    ["d", "b", "c", "a"],
    ["d", "c", "a", "b"],
    ["d", "c", "b", "a"]
  ]);
});
