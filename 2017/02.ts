import { ArrayToNumber, Sum } from "../util/numbers/ArrayHelpers";
import { ArrayMax, ArrayMin } from "../util/numbers/Comparisons";
import { Sub } from "../util/numbers/Subtract";
import { Split } from "../util/strings/Split";
import { Input } from "./Inputs/02";

//type Solve1 = Part1<Input>

export type Part1<TInput extends string> = Sum<Rows<TInput>>;

type DiffBetweenMaxMin<Arr extends number[]> = Sub<
  ArrayMax<Arr>,
  ArrayMin<Arr>
>;

type Rows<TInput> = TInput extends `${infer Line}\n${infer Rest}`
  ? [DiffBetweenMaxMin<ArrayToNumber<Split<Line, "\t">>>, ...Rows<Rest>]
  : [DiffBetweenMaxMin<ArrayToNumber<Split<TInput, "\t">>>];
