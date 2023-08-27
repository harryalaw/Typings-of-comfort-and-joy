import type { Digit, DigitsToNumber, NumberToDigits } from "./numbers";

export type DigitSubTable = [
  [
    [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
    [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
    [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
    [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
    [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
    [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
    [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ],
  [
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
    [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
    [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
    [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
    [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
    [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
    [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
  ],
];

type SubCarryTable = [
  [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
];

export type Sub<N1 extends number, N2 extends number> = SubDigits<
  NumberToDigits<N1>,
  NumberToDigits<N2>
> extends infer Result
  ? Result extends Digit[]
    ? DigitsToNumber<Result>
    : never
  : never;

type SubDigits<
  X extends Digit[],
  Y extends Digit[],
  Carry extends 0 | 1 = 0,
  Acc extends Digit[] = [],
> = X extends [...infer X1 extends Digit[], infer Xn extends Digit]
  ? Y extends [...infer Y1 extends Digit[], infer Yn extends Digit]
    ? SubDigits<
        X1,
        Y1,
        SubCarryTable[Carry][Xn][Yn],
        [DigitSubTable[Carry][Xn][Yn], ...Acc]
      >
    : SubDigits<X, [Carry], 0, Acc>
  : Y extends [Digit, ...Digit[]]
  ? SubDigits<Y, [Carry], 0, Acc>
  : Carry extends 1
  ? [1, ...Acc]
  : Acc;
