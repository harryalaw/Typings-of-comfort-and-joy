import { ArrayToNumber, Sum } from "../util/numbers/ArrayHelpers";
import { Max, GreaterThan } from "../util/numbers/Comparisons";
import { Split } from "../util/strings/Split";

export type Part1 = SolvePart1<RealInput>;
export type Part2 = SolvePart2<RealInput>;

type SolvePart1<List, Total extends number = 0> = NextChunk<List> extends [
  infer Chunk,
  infer Rest,
]
  ? SolvePart1<Rest, Max<Total, ProcessBag<Chunk>>>
  : Total;

type SolvePart2<
  List,
  Totals extends [number, number, number] = [0, 0, 0],
> = NextChunk<List> extends [infer Chunk, infer Rest]
  ? SolvePart2<Rest, Top3<Totals, ProcessBag<Chunk>>>
  : Sum<Totals>;

type Top3<
  Totals extends [number, number, number],
  Test extends number,
> = GreaterThan<Test, Totals[0]> extends true
  ? [Test, Totals[0], Totals[1]]
  : GreaterThan<Test, Totals[1]> extends true
  ? [Totals[0], Test, Totals[1]]
  : GreaterThan<Test, Totals[2]> extends true
  ? [Totals[0], Totals[1], Test]
  : Totals;

type NextChunk<T> = T extends `${infer First}\n\n${infer Rest}`
  ? [First, Rest]
  : [T];

type ProcessBag<T> = Sum<ArrayToNumber<Split<T, "\n">>>;

type RealInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
