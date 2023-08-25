import { Add } from "../util/numbers/Add";
import { ParseInt } from "../util/numbers/numbers";
import { Max, GreaterThan } from "../util/numbers/Comparisons";

type Part1 = ProcessList<RealInput>;
type Part2 = ProcessList2<RealInput>;

type ProcessList<List, Total extends number = 0> = NextChunk<List> extends [
  infer Chunk,
  infer Rest,
]
  ? ProcessList<Rest, Max<Total, ProcessBag<Chunk>>>
  : Total;

type ProcessList2<
  List,
  Totals extends [number, number, number] = [0, 0, 0],
  Depth extends any[] = [],
> = Depth["length"] extends 1000
  ? [List, Totals, Depth]
  : NextChunk<List> extends [infer Chunk, infer Rest]
  ? ProcessList2<Rest, Top3<Totals, ProcessBag<Chunk>>, [...Depth, 1]>
  : Sum<Totals>;

type Top3<
  Totals extends [number, number, number],
  Test extends number,
> = GreaterThan<Test, Totals[0]> extends true
  ? [Test, Totals[0], Totals[1]]
  : GreaterThan<Test, Totals[1]> extends true
  ? [Totals[0], Test, Totals[1]]
  : GreaterThan<Test, Totals[1]> extends true
  ? [Totals[0], Totals[1], Test]
  : Totals;

type NextChunk<T> = T extends `${infer First}\n\n${infer Rest}`
  ? [First, Rest]
  : [T];

type ArrayToNumber<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? First extends [string, ...string[]]
    ? [ArrayToNumber<First>, ...ArrayToNumber<Rest>]
    : First extends string
    ? [ParseInt<First>, ...ArrayToNumber<Rest>]
    : never
  : [ParseInt<T>];

type ProcessBag<T> = Sum<ArrayToNumber<Split<T, "\n">>>;

type Sum<T extends number[], Output extends number = 0> = T extends [
  infer First extends number,
  ...infer Rest extends number[],
]
  ? Sum<Rest, Add<Output, First>>
  : Output;

type Split<
  T,
  Sep extends string,
> = T extends `${infer First}${Sep}${infer Rest}`
  ? [First, ...Split<Rest, Sep>]
  : [T];

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


