import cocktailShakerSort, {
  CocktailShakerSortComparison,
  CocktailShakerSortSwap
} from "./cocktail-shaker-sort";
import { charactors, randomSample, staticSample } from "./sample";

test(`cocktailShakerSort(collection: ["${randomSample[0]}", "${
  randomSample[1]
}", "${randomSample[2]}" ... ${
  randomSample.length
} items]) sorts the collection to be ordered`, () => {
  const collection = [...randomSample];

  cocktailShakerSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  });

  expect(collection).toEqual(charactors);
});

test("the steps of cocktailShakerSort() matches the previous snapshot", () => {
  const comparisons: CocktailShakerSortComparison<string>[] = [];
  const swaps: CocktailShakerSortSwap<string>[] = [];
  const collection = [...staticSample];

  cocktailShakerSort({
    collection,
    compare: (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
    onComparison: comparison => comparisons.push(comparison),
    onSwap: swap => swaps.push(swap)
  });

  expect({
    from: staticSample,
    to: collection,
    comparisons,
    swaps
  }).toMatchSnapshot();
});
