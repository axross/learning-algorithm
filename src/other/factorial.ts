export function recursiveFactorial(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

export function factorial(n: number): number {
  let result = 1;

  for (let i = 2; i <= n; ++i) {
    result = result * i;
  }

  return result;
}
