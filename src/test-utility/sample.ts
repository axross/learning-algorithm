export const sampleCharactors = [
  ...Array.from({ length: 10 }, (_, i) => String.fromCharCode(i + 48)),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))
];

export const shuffledSampleCharactors = [...sampleCharactors];

for (let i = shuffledSampleCharactors.length - 1; i >= 0; i--) {
  const rand = Math.floor(Math.random() * (i + 1));

  [shuffledSampleCharactors[i], shuffledSampleCharactors[rand]] = [
    shuffledSampleCharactors[rand],
    shuffledSampleCharactors[i]
  ];
}
