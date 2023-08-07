import type { Digit, DigitsToNumber, NumberToDigits } from "./numbers";

type DigitAddTable = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
];

type DigitCarryTable = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

type AddDigit<
  D1 extends Digit,
  D2 extends Digit,
  Carry extends Digit = 0
> = Carry extends 0
  ? [DigitCarryTable[D1][D2], DigitAddTable[D1][D2]]
  : D1 extends 9
  ? D2 extends 9
    ? [1, 9]
    : [DigitCarryTable[D1][AddOne<D2>[1]], DigitAddTable[D1][AddOne<D2>[1]]]
  : [DigitCarryTable[AddOne<D1>[1]][D2], DigitAddTable[AddOne<D1>[1]][D2]];

type AddOneMap = {
  0: [0, 1];
  1: [0, 2];
  2: [0, 3];
  3: [0, 4];
  4: [0, 5];
  5: [0, 6];
  6: [0, 7];
  7: [0, 8];
  8: [0, 9];
  9: [1, 0];
};

type AddOne<N extends Digit> = AddOneMap[N];

type AddDigits<
  N1 extends Digit[],
  N2 extends Digit[],
  Total extends Digit[] = []
> = N1["length"] extends 1
  ? N2["length"] extends 1
    ? AddDigit<N1[0], N2[0]>
    : never
  : never;

export type Add<N1 extends number, N2 extends number> = AddDigits<
  NumberToDigits<N1>,
  NumberToDigits<N2>
> extends infer Result
  ? Result extends Digit[]
    ? DigitsToNumber<Result>
    : never
  : never;

type x = AddDigit<6, 9>;

type z = Add<1, 2>;
type y = Add<6, 9>;

/*
 * What's the flow, we add two numbers together.
 * We can do it pairwise on digits, but we will need to pad values
 *
 * DO we do someting like:
 *  -> Convert both numbers to digit arrays
 *  -> Pad both with a 0, then pad both arrays until they are the same length
 *
 *      -> [0,0,0,a,b,c,d,e] and
 *         [0,A,B,C,D,E,F,G]
 *      then we can add these values pairwise from right to left
 *      -> How do we handle carries?
 *          -> Our add can take in three values
 *          -> Just need a way to handle (add one)
 * */
