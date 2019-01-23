import roundRobin from "../test-utility/round-robin";
import randomInteger from "../test-utility/random-integer";

export const charactors = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const samples = roundRobin(charactors).slice(1);

export const randomSample = samples[randomInteger(0, charactors.length)];

export const staticSample = samples[Math.floor((samples.length / 7) * 5)];

export const charactorPairs = ["a0", "a1", "b0", "b1", "c0", "c1", "d0", "d1"];

export const charactorPairSamples = roundRobin(["a0", "b0", "c0", "d0"]).reduce(
  (arr, pattern0) => [
    ...arr,
    ...roundRobin(["a1", "b1", "c1", "d1"]).reduce(
      (arr, pattern1) => [...arr, [...pattern0, ...pattern1]],
      [] as string[][]
    )
  ],
  [] as string[][]
);

export const randomCharactorPairSample =
  charactorPairSamples[randomInteger(0, charactorPairs.length)];

export const staticCharactorPairSample =
  randomCharactorPairSample[Math.floor((samples.length / 7) * 5)];
