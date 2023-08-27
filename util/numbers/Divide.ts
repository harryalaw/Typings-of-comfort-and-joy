import { DigitAddTable } from "./Add";
import { Digit, DigitsToNumber, NumberToDigits } from "./numbers";

type HalveMap = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
type Rollover = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5];

export type ShiftLeft<N extends number> = DigitsToNumber<
  ShiftLeftDigits<NumberToDigits<N>>
>;

export type ShiftLeftDigits<
  X extends Digit[],
  Carry extends Digit = 0,
> = X extends [infer First extends Digit, ...infer Rest extends Digit[]]
  ? [
      DigitAddTable[0][HalveMap[First]][Carry],
      ...ShiftLeftDigits<Rest, Rollover[First]>,
    ]
  : X;
