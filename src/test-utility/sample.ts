function shuffle<Value>(arr: Value[]): Value[] {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[rand]] = [shuffled[rand], shuffled[i]];
  }

  return shuffled;
}

export const sampleCharactors = [
  ...Array.from({ length: 5 }, (_, i) => String.fromCharCode(i + 48)),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))
];

export const shuffledSampleCharactors = shuffle(sampleCharactors);

export const sampleTwoCharactors = [
  ...Array.from({ length: 5 }, (_, i) => [
    String.fromCharCode(i + 48) + "<",
    String.fromCharCode(i + 48) + ">"
  ]),
  ...Array.from({ length: 13 }, (_, i) => [
    String.fromCharCode(i + 65) + "<",
    String.fromCharCode(i + 65) + ">"
  ]),
  ...Array.from({ length: 13 }, (_, i) => [
    String.fromCharCode(i + 97) + "<",
    String.fromCharCode(i + 97) + ">"
  ])
].reduce((array, value) => [...array, ...value], []);

export const shuffledSampleTwoCharactors = [
  ...shuffle([
    ...Array.from({ length: 5 }, (_, i) => String.fromCharCode(i + 48) + "<"),
    ...Array.from({ length: 13 }, (_, i) => String.fromCharCode(i + 65) + "<"),
    ...Array.from({ length: 13 }, (_, i) => String.fromCharCode(i + 97) + "<")
  ]),
  ...shuffle([
    ...Array.from({ length: 5 }, (_, i) => String.fromCharCode(i + 48) + ">"),
    ...Array.from({ length: 13 }, (_, i) => String.fromCharCode(i + 65) + ">"),
    ...Array.from({ length: 13 }, (_, i) => String.fromCharCode(i + 97) + ">")
  ])
];
