export const typescript = `enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");`;

export const python = `def fib_iterative(n: int) -> list[int]:
    """
    Calculates the first n (0-indexed) Fibonacci numbers using iteration
    >>> fib_iterative(0)
    [0]
    >>> fib_iterative(1)
    [0, 1]
    >>> fib_iterative(5)
    [0, 1, 1, 2, 3, 5]
    >>> fib_iterative(10)
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    >>> fib_iterative(-1)
    Traceback (most recent call last):
        ...
    ValueError: n is negative
    """
    if n < 0:
        raise ValueError("n is negative")
    if n == 0:
        return [0]
    fib = [0, 1]
    for _ in range(n - 1):
        fib.append(fib[-1] + fib[-2]) # fib that thing
    return fib

# via https://github.com/TheAlgorithms/Python/blob/master/maths/fibonacci.py`;

export const elixir = `defmodule Algorithms.Sorting.QuickSort do
  @moduledoc """
  Implementation of QuickSort algorithm (https://en.wikipedia.org/wiki/Quicksort)

  You will be given an array of numbers, you have to sort numbers in ascending order
  using quick sort algorithm.

  Quick sort algorithm uses a divide and conquer strategy.
  It takes a pivot, and sort other numbers in functions of the pivot, divided them
  in a smaller and a bigger group. Execute this step until there is empty list.

  Example:
   [2, 1, 5, 4, 3]
    1. pivot:2 smaller:[1] bigger:[5, 4, 3]
    2. 2 [1] [5, 4, 3]
    3. 2 [1] |
             | 5 [4, 3] []
    4. 2 [1] |
               | 5 |
                   | 4 [3] []
    5. [1, 2, 3, 4, 5] # Recursion reunite all splited lists.

   [2, 1, 5, 4, 3] => [1, 2, 3, 4, 5]
  Complexity: O(n log n)
  """
  require Integer

  @doc """
    take a List and return the List with the numbers ordered
  """
  @spec quick_sort(list(Integer)) :: list(Integer)
  def quick_sort([]), do: []

  def quick_sort([head | tail]) do
    smaller = Enum.filter(tail, fn x -> x <= head end) |> quick_sort()
    bigger = Enum.filter(tail, fn x -> x > head end) |> quick_sort()

    Enum.concat(smaller, [head]) |> Enum.concat(bigger)
  end
end`;

export const vitest = `[7m[1m[36m RUN [39m[22m[27m [36mv1.5.0[39m [90m/home/ham/dev/root-loops[39m[0m

 [32m✓[39m src/lib/colors.test.ts (20)
 [33m❯[39m src/lib/cereals.test.ts (21)
   [33m❯[39m prepare(defaultRecipe) (21)
     [32m✓[39m generates colors in oklch space
     [32m✓[39m generates base tone cereals with low chroma
     [32m✓[39m generates red tone cereals with right hue
     [32m✓[39m generates yellow tone cereals with right hue
     [32m✓[39m generates green tone cereals with right hue
     [32m✓[39m generates cyan tone cereals with right hue
     [32m✓[39m generates blue tone cereals with right hue
     [32m✓[39m generates magenta tone cereals with right hue
     [32m✓[39m generates bright colors with higher lightness than regular colors
     [32m✓[39m creates dark base colors for milk amount of 'None'
     [32m✓[39m creates lighter base colors for milk amount of 'Splash'
     [32m✓[39m creates light base colors for milk amount of 'Glug'
     [32m✓[39m creates lightest base colors for milk amount of 'Cup'
     [32m✓[39m ignores 'milk' parameter for accent colors
     [32m✓[39m uses 'artificial colors' parameter to drive chroma of accent colors
     [32m✓[39m uses 'flavor' parameter to drive hue shift of accent colors
     [32m✓[39m uses 'sugar' parameter to drive lightness of accent colors
     [32m✓[39m uses 'juice' parameter to drive hue of base colors
     [32m✓[39m uses 'sogginess' parameter to drive chroma of base colors
     [31m×[39m should always fail
     [90m↓[39m should be marked as todo [90m[skipped][39m

[31m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7m[1m[31m Failed Tests 1 [39m[22m[27m[31m ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[39m[0m


[7m[1m[31m FAIL [39m[22m[27m[0m  src/lib/cereals.test.ts > prepare(defaultRecipe) > should always fail
[1m[31mAssertionError:[0m [31mexpected true to be false // Object.is equality[0m

[32m- Expected[0m
[31m+ Received[0m

[32m- false[0m
[31m+ true[0m

 [36m❯ src/lib/cereals.test.ts:246:49[0m
    [90m244|[39m   });
    [90m245|[39m
    [90m246|[39m   [34mit[39m([32m"should always fail"[39m, () [33m=>[39m { [34mexpect[39m([35mtrue[39m).[34mtoBe[39m([35mfalse[39m); });
       [90m|[39m                                                 [31m^[39m
    [90m247|[39m   it.todo("should be marked as todo");
    [90m248|[39m });

[31m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[39m

 Test Files  [31m1 failed[39m | [32m1 passed[39m [90m(2)[39m
      Tests  [31m1 failed[39m | [32m39 passed[39m | [90m1 todo (41)[39m
   Start at  12:06:05
   Duration  337ms
`;


export const moreElixir = `
[35mdefmodule[0m [33mScorecard[0m [35mdo[0m
  [35mdefstruct[0m [33mplayers[0m[33m:[0m [], [33mrounds[0m[33m:[0m []

  [35mdef[0m [34mnew[0m(players) [35mwhen[0m [35mlength[0m(players) [35m==[0m [33m4[0m [35mdo[0m
    %[33mScorecard[0m{[33mplayers[0m[33m:[0m players, [33mrounds[0m[33m:[0m []}
  [35mend[0m

  [35mdef[0m [34madd_round[0m(scorecard, points, winners) [35mdo[0m
    results [35m=[0m
      scorecard.players
      [35m|>[0m [33mEnum[0m.map([35mfn[0m player [35m->[0m {player, calculate_points(player, winners, points)} [35mend[0m)
      [35m|>[0m [33mMap[0m.new()

    round [35m=[0m %{
      [33mpoints[0m[33m:[0m points,
      [33mwinners[0m[33m:[0m winners,
      [33mresults[0m[33m:[0m results
    }

    rounds [35m=[0m [round [35m|[0m scorecard.rounds]
    %[33mScorecard[0m{[33mplayers[0m[33m:[0m scorecard.players, [33mrounds[0m[33m:[0m rounds}
  [35mend[0m

  [35mdefp[0m [34mcalculate_points[0m(player, winners, points) [35mdo[0m
    [35mif[0m [33mEnum[0m.any?(winners, [35mfn[0m winner [35m->[0m winner [35m==[0m player [35mend[0m) [35mdo[0m
      points
    [35melse[0m
      [35m-[0mpoints
    [35mend[0m
  [35mend[0m

  [35mdef[0m [34mget_round[0m(scorecard, round_number) [35mdo[0m
    [33mEnum[0m.at(scorecard.rounds, length(scorecard.rounds) [35m-[0m (round_number [35m+[0m [33m1[0m))
  [35mend[0m

  [35mdef[0m [34mget_points[0m(scorecard, [33m0[0m), [33mdo:[0m get_round(scorecard, [33m0[0m).results

  [35mdef[0m [34mget_points[0m(scorecard, round_number) [35mdo[0m
    [33mMap[0m.merge(
      get_round(scorecard, round_number).results,
      get_points(scorecard, round_number [35m-[0m [33m1[0m),
      [35mfn[0m _k, v1, v2 [35m->[0m v2 [35m+[0m v1 [35mend[0m
    )
  [35mend[0m
[35mend[0m
`;

export const screenfetch = `
[0m[32m                 -/+:.         [0m[1;34m ham[0m[1m@[0m[0m[1;34mhambook-2[0m
[0m[32m                :++++.         [0m[1;34m OS:[0m Ubuntu 24.04 noble[0m
[0m[32m               /+++/.          [0m[1;34m Kernel:[0m x86_64 Linux 6.8.0-31-generic[0m
[0m[32m       .:-::- .+/:-\`\`.::-      [0m[1;34m Uptime:[0m 9d 20h 14m[0m
[0m[32m    .:/++++++/::::/++++++/:\`   [0m[1;34m Packages:[0m 2664[0m
[0m[33m  .:///////////////////////:\`  [0m[1;34m Shell:[0m zsh 5.9[0m
[0m[33m  ////////////////////////\`    [0m[1;34m Resolution:[0m 7280x2400[0m
[0m[1;31m -+++++++++++++++++++++++\`     [0m[1;34m DE:[0m GNOME 46.0.1[0m
[0m[1;31m /++++++++++++++++++++++/      [0m[1;34m WM:[0m Mutter[0m
[0m[31m /sssssssssssssssssssssss.     [0m[1;34m WM Theme:[0m Adwaita[0m
[0m[31m :ssssssssssssssssssssssss-    [0m[1;34m GTK Theme:[0m Yaru-red-dark [GTK2/3][0m
[0m[35m  osssssssssssssssssssssssso/\` [0m[1;34m Icon Theme:[0m Yaru-red[0m
[0m[35m  \`syyyyyyyyyyyyyyyyyyyyyyyy+\` [0m[1;34m Font:[0m Ubuntu 11[0m
[0m[34m   \`ossssssssssssssssssssss/   [0m[1;34m Disk:[0m 386G / 469G (87%)[0m
[0m[34m     :ooooooooooooooooooo+.    [0m[1;34m CPU:[0m Intel Core i7-1065G7 @ 8x 3.9GHz [59.0°C][0m
[0m[34m      \`:+oo+/:-..-:/+o+/-      [0m[1;34m GPU:[0m Intel Corporation Iris Plus Graphics G7 (rev 07)[0m
[0m[34m                               [0m[1; 34m RAM:[0m 10810MiB / 15573MiB[0m
`;
