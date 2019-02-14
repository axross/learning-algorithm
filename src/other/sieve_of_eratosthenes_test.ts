import { assert, test } from "https://deno.land/x/testing/mod.ts";
import sieveOfEratosthenes from "./sieve_of_eratosthenes.ts";

test({
  name:
    "sieveOfEratosthenes() returns prime numbers less than equal lessThanOrEqual",
  fn() {
    assert.equal(sieveOfEratosthenes({ lessThanOrEqual: 100 }), [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97
    ]);
  }
});

test({
  name: "sieveOfEratosthenes() sieves numbers in the correct process",
  fn() {
    const valuesSieved: number[] = [];

    sieveOfEratosthenes({
      lessThanOrEqual: 100,
      onSieving: ({ value }) => valuesSieved.push(value)
    });

    assert.equal(valuesSieved, [
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
      32,
      34,
      36,
      38,
      40,
      42,
      44,
      46,
      48,
      50,
      52,
      54,
      56,
      58,
      60,
      62,
      64,
      66,
      68,
      70,
      72,
      74,
      76,
      78,
      80,
      82,
      84,
      86,
      88,
      90,
      92,
      94,
      96,
      98,
      100,
      9,
      15,
      21,
      27,
      33,
      39,
      45,
      51,
      57,
      63,
      69,
      75,
      81,
      87,
      93,
      99,
      25,
      35,
      55,
      65,
      85,
      95,
      49,
      77,
      91
    ]);
  }
});
