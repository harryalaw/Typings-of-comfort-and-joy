import { Add } from "./Add";
import { ParseInt } from "./numbers";

export type Sum<T extends number[], Output extends number = 0> = T extends [
  infer First extends number,
  ...infer Rest extends number[],
]
  ? Sum<Rest, Add<Output, First>>
  : Output;

export type ArrayToNumber<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
  ? First extends [string, ...string[]]
    ? [ArrayToNumber<First>, ...ArrayToNumber<Rest>]
    : First extends string
    ? [ParseInt<First>, ...ArrayToNumber<Rest>]
    : never
  : [ParseInt<T>];
