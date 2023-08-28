import { DigitAddTable } from "./Add";
import { Digit, DigitsToNumber, NumberToDigits } from "./numbers";

type HalveMap = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
type Rollover = [0, 5, 0, 5, 0, 5, 0, 5, 0, 5];

export type ShiftRight<N extends number> = DigitsToNumber<
  ShiftRightDigits<NumberToDigits<N>>
>;

export type ShiftRightDigits<
  X extends Digit[],
  Carry extends Digit = 0,
> = X extends [infer First extends Digit, ...infer Rest extends Digit[]]
  ? [
      DigitAddTable[0][HalveMap[First]][Carry],
      ...ShiftRightDigits<Rest, Rollover[First]>,
    ]
  : X;
