export function fibonacci(nth: number): number {
  if (nth < 0) {
    throw Error();
  }

  let previous = 1;
  let current = 0;

  for (let i = 1; i <= nth; ++i) {
    [previous, current] = [current, previous + current];
  }

  return current;
}

export function recursiveFibonacci(nth: number): number {
  if (nth === 1) {
    return 1;
  }

  if (nth === 0) {
    return 0;
  }

  return recursiveFibonacci(nth - 1) + recursiveFibonacci(nth - 2);
}
