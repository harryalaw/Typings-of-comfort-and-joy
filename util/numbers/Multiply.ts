import { Add } from "./Add";
import { ToBinary } from "./Binary";
import { GreaterThan } from "./Comparisons";

export type Multiply<A extends number, B extends number> = [A, B] extends
  | [0, any]
  | [any, 0]
  ? 0
  : GreaterThan<A, B> extends true
  ? MultiplyHelper<A, ToBinary<B>>
  : MultiplyHelper<B, ToBinary<A>>;

// Multiplying two numbers, A is greater than B
type MultiplyHelper<
  A extends number,
  B extends any[],
  Total extends number = 0,
> = B extends []
  ? Total
  : B extends [infer First, ...infer Rest]
  ? First extends 0
    ? MultiplyHelper<A, Rest, Double<Total>>
    : MultiplyHelper<A, Rest, Add<Double<Total>, A>>
  : never;

export type Double<A extends number> = Add<A, A>;
