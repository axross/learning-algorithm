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

export const constantShuffledSampleCharactors = [
  "h",
  "C",
  "Q",
  "2",
  "q",
  "1",
  "E",
  "M",
  "4",
  "j",
  "W",
  "N",
  "I",
  "L",
  "Z",
  "G",
  "K",
  "D",
  "X",
  "i",
  "R",
  "H",
  "u",
  "a",
  "o",
  "b",
  "J",
  "t",
  "x",
  "l",
  "n",
  "g",
  "S",
  "c",
  "y",
  "V",
  "P",
  "v",
  "p",
  "3",
  "T",
  "0",
  "w",
  "e",
  "z",
  "d",
  "f",
  "s",
  "F",
  "B",
  "Y",
  "O",
  "r",
  "U",
  "A",
  "k",
  "m"
];

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

export const constantShuffledSampleTwoCharactors = [
  "4<",
  "m<",
  "j<",
  "a<",
  "2<",
  "3<",
  "E<",
  "D<",
  "J<",
  "e<",
  "0<",
  "c<",
  "d<",
  "l<",
  "K<",
  "B<",
  "L<",
  "f<",
  "h<",
  "F<",
  "C<",
  "H<",
  "G<",
  "M<",
  "I<",
  "g<",
  "1<",
  "A<",
  "k<",
  "b<",
  "i<",
  "e>",
  "J>",
  "K>",
  "D>",
  "g>",
  "L>",
  "b>",
  "m>",
  "a>",
  "M>",
  "h>",
  "f>",
  "A>",
  "B>",
  "0>",
  "k>",
  "4>",
  "d>",
  "c>",
  "i>",
  "G>",
  "1>",
  "j>",
  "H>",
  "3>",
  "C>",
  "l>",
  "I>",
  "F>",
  "2>",
  "E>"
];
