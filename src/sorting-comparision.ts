import bubbleSort from "./sorting/bubble-sort";
import selectionSort from "./sorting/selection-sort";

console.time("initialize");

const collection = Array.from({ length: 100000 }, (_, i) => i);

for (let i = collection.length - 1; i >= 0; i--) {
  const rand = Math.floor(Math.random() * (i + 1));

  [collection[i], collection[rand]] = [collection[rand], collection[i]];
}

console.timeEnd("initialize");

console.time("selection sort");

selectionSort({ collection: [...collection], compare: (a, b) => a - b });

console.timeEnd("selection sort");

console.time("bubble sort");

bubbleSort({ collection: [...collection], compare: (a, b) => a - b });

console.timeEnd("bubble sort");
