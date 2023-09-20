import { ToEntries } from "../util/helpers/Entries";
import { Equal } from "../util/helpers/Equality";
import { Add } from "../util/numbers/Add";
import { Split } from "../util/strings/Split";

/*
import { Input } from "./Inputs/04";

type Solve1<
  TInput,
  Total extends number = 0,
> = TInput extends `${infer Head}\n${infer Rest}`
  ? Solve1<Rest, Add<Total, Part1<Head>>>
  : TInput extends string
  ? Add<Total, Part1<TInput>>
  : Total;

type Answer1 = Solve1<Input>;

type Solve2<
  TInput,
  Total extends number = 0,
> = TInput extends `${infer Head}\n${infer Rest}`
  ? Solve2<Rest, Add<Total, Part2<Head>>>
  : TInput extends string
  ? Add<Total, Part2<TInput>>
  : Total;

type Answer2 = Solve2<Input>;
*/

export type Part1<T> = ContainsOnlySingletons<Split<T, " ">>;

export type Part2<T> = ContainsNoAnagrams<Split<T, " ">>;

type CountOccurrences<
  Array extends string[],
  Tally extends Record<string, number> = {},
> = Array extends [infer Head extends string, ...infer Rest extends string[]]
  ? Tally[Head] extends infer ReturnValue extends number
    ? CountOccurrences<
        Rest,
        { [K in keyof Omit<Tally, Head>]: Tally[K] } & {
          [K in Head]: Add<ReturnValue, 1>;
        }
      >
    : CountOccurrences<Rest, Tally & { [K in Head]: 1 }>
  : Tally;

type ContainsOnlySingletons<T> = T extends string[]
  ? Exclude<ToEntries<CountOccurrences<T>>, [any, 1]> extends never
    ? 1
    : 0
  : never;

type CountLetters<
  T,
  Tally extends Record<string, number> = {},
> = T extends `${infer First}${infer Rest}`
  ? Tally[First] extends infer PrevValue extends number
    ? CountLetters<
        Rest,
        { [K in keyof Omit<Tally, First>]: Tally[K] } & {
          [K in First]: Add<PrevValue, 1>;
        }
      >
    : CountLetters<Rest, Tally & { [K in First]: 1 }>
  : Tally;


type IsAnagram<Word1 extends string, Word2 extends string> = Equal<
  CountLetters<Word1>,
  CountLetters<Word2>
>;

type HasAnagramInArray<
  Array extends string[],
  Word extends string,
> = Array extends [infer Next extends string, ...infer Rest extends string[]]
  ? IsAnagram<Word, Next> extends true
    ? true
    : HasAnagramInArray<Rest, Word>
  : false;

type ContainsNoAnagrams<Words> = Words extends [
  infer First extends string,
  ...infer Rest extends string[],
]
  ? HasAnagramInArray<Rest, First> extends true
    ? 0
    : ContainsNoAnagrams<Rest>
  : 1;

