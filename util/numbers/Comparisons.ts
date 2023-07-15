import type { Digit, DigitMap, DigitString } from "./numbers";

/**
 * Array of values such that DigitComparisonMap[A][B]
 * is:
 *  0 if A == B,
 *  1 if A < B,
 * -1 if A > B
 */
type DigitComparisonMap = [
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [-1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [-1, -1, 0, 1, 1, 1, 1, 1, 1, 1],
  [-1, -1, -1, 0, 1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, 0, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, 0, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1, 0, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1, -1, 0, 1, 1],
  [-1, -1, -1, -1, -1, -1, -1, -1, 0, 1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, 0]
];

/**
 * Compares digts T, U
 *  Returns 1 if T > U
 *  Returns 0 if T == U
 *  Returns -1 if T < U
 */
type CompareDigits<T extends Digit, U extends Digit> = DigitComparisonMap[U][T];

/**
 * Converts a number to a string
 */
type ToString<U extends number | bigint> = `${U}`;

/**
 * Given two strings S1, S2 compares the lengths of the two
 *  Returns  1 if S1.length > S2.lengths
 *  Returns  0 if S1.length == S2.lengths
 *  Returns -1 if S1.length < S2.lengths
 *
 */
type CompareLength<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer _}${infer R1}`
  ? S2 extends `${infer _}${infer R2}`
    ? CompareLength<R1, R2>
    : 1
  : S2 extends `${infer _}${infer _}`
  ? -1
  : 0;

/**
 *  Given two strings of numbers with the same size, compares the magnitude.
 *  Recursively extracts the first digits and compares these.
 *  If they are equal then it compares the rest of the strings.
 *  Otherwise returns the result of the comparison.
 *
 *  Returns 0 if strings are empty (this is used as base case for comparing
 *  equal strings
 */
type CompareSameLength<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer D1 extends DigitString}${infer R1}`
  ? S2 extends `${infer D2 extends DigitString}${infer R2}`
    ? CompareDigits<DigitMap[D1], DigitMap[D2]> extends infer Result
      ? Result extends 0
        ? CompareSameLength<R1, R2>
        : Result
      : never
    : 0
  : 0;

/**
 * Helper to call into other comparison methods
 */
type GreaterThanHelper<A extends number, B extends number> = CompareLength<
  ToString<A>,
  ToString<B>
> extends infer Result
  ? Result extends 0
    ? CompareSameLength<ToString<A>, ToString<B>>
    : Result
  : never;

export type GreaterThan<A extends number, B extends number> = GreaterThanHelper<
  A,
  B
> extends 1
  ? true
  : false;

export type Min<A extends number, B extends number> = GreaterThan<
  A,
  B
> extends true
  ? B
  : A;

export type Max<A extends number, B extends number> = GreaterThan<
  A,
  B
> extends true
  ? A
  : B;
