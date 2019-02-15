import { runTests } from "https://deno.land/x/testing/mod.ts";
import "./src/other/factorial_test.ts";
import "./src/other/fibonacci_test.ts";
import "./src/other/sieve_of_eratosthenes_test.ts";
import "./src/puzzle/water_pouring_test.ts";
import "./src/searching/binary_search_test.ts";
import "./src/searching/linear_search_test.ts";
import "./src/sorting/bubble_sort_test.ts";
import "./src/sorting/cocktail_shaker_sort_test.ts";
import "./src/sorting/insertion_sort_test.ts";
import "./src/sorting/merge_sort_test.ts";
import "./src/sorting/selection_sort_test.ts";
import "./src/sorting/shell_sort_test.ts";
import "./src/sorting/utility_test.ts";
import "./src/test_utility/random_integer_test.ts";
import "./src/test_utility/round_robin_test.ts";

runTests();
