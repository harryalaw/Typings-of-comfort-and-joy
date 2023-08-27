import { StringToDigits } from "../numbers/numbers";

export type ToNumberArray<
    T,
    Output extends number[] = [],
> = T extends `${infer One}${infer Two}${infer Three}${infer Rest}`
    ? ToNumberArray<Rest, [...Output, ...StringToDigits<`${One}${Two}${Three}`>]>
    : T extends `${infer One}${infer Two}${infer Rest}`
    ? ToNumberArray<Rest, [...Output, ...StringToDigits<`${One}${Two}`>]>
    : T extends `${infer One}${infer Rest}`
    ? ToNumberArray<Rest, [...Output, ...StringToDigits<One>]>
    : Output;

export type ToCharArray<
    T,
    Output extends string[] = [],
> = T extends `${infer One}${infer Two}${infer Three}${infer Rest}`
    ? ToCharArray<Rest, [...Output, One, Two, Three]>
    : T extends `${infer One}${infer Two}${infer Rest}`
    ? ToCharArray<Rest, [...Output, One, Two]>
    : T extends `${infer One}${infer Rest}`
    ? ToCharArray<Rest, [...Output, One]>
    : Output;
