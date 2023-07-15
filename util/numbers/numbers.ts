export type Digit = DigitMap[keyof DigitMap];
export type DigitString =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
export type DigitMap = {
  "0": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
};

export type NumberToDigits<N extends number> = StringToDigits<`${N}`>

export type StringToDigits<
  Str extends string,
  T extends Digit[] = []
> = Str extends `${infer x extends DigitString}${infer Rest}`
  ? StringToDigits<Rest, [...T, DigitMap[x]]>
  : T;

// Need to strip leading zeros
export type DigitsToString<
  T extends Digit[],
  Str extends string = ""
> = T extends [infer Head, ...infer Rest]
  ? Rest extends Digit[]
    ? Head extends Digit
      ? DigitsToString<Rest, `${Str}${Head}`>
      : never
    : never
  : Str;

type z = DigitsToString<[0,1,2,3]>

export type DigitsToNumber<T extends Digit[]> = ParseInt<DigitsToString<T>>

export type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
