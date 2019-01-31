import { OnSieving } from "./event";

function sieveOfEratosthenes({
  lessThanOrEqual,
  onSieving = () => {}
}: {
  lessThanOrEqual: number;
  onSieving?: OnSieving;
}): number[] {
  const numbers = Array.from({ length: lessThanOrEqual - 1 }, (_, i) => i + 2);

  for (let i = 0; numbers[i] < Math.sqrt(lessThanOrEqual); ++i) {
    const num = numbers[i];

    let j = 0;

    while (j < numbers.length) {
      const pickedNum = numbers[j];

      if (pickedNum !== num && pickedNum % num === 0) {
        numbers.splice(j, 1);

        onSieving({ value: pickedNum });
      } else {
        j = j + 1;
      }
    }
  }

  return numbers;
}

export default sieveOfEratosthenes;
