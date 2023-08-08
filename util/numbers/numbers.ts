export type Digit = DigitMap[keyof DigitMap];
export type DigitString = keyof DigitMap;
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

export type NumberToDigits<N extends number> = StringToDigits<`${N}`>;

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


export type DigitsToNumber<T extends Digit[]> = ParseInt<
  DigitsToString<TrimZeros<T>>
>;

export type ParseInt<T> = T extends `${infer N extends number}` ? N : never;

export type TrimZeros<T extends Digit[]> = T extends [0]
  ? [0]
  : T extends [0, ...infer Rest extends Digit[]]
  ? TrimZeros<Rest>
  : T;
