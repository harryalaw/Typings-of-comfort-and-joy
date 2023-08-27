// this doesn't work if N > 999
// so would need to repeatedly do this to take more than 999
// : Array extends [infer First, infer Second, infer Third, infer Fourth, ...infer Rest]
// ? Take<Rest, N, [...Output, First, Second, Third, Fourth]>
import { Sub } from "../numbers/Subtract";

export type Take<
  Array extends any[],
  N extends number,
  Output extends any[] = [],
> = Output["length"] extends N
  ? [Output, Array]
  : Output["length"] extends Sub<N, 1>
  ? Array extends [infer First, ...infer Rest]
    ? [[...Output, First], Rest]
    : [Output, Array]
  : Array extends [infer First, infer Second, ...infer Rest]
  ? Take<Rest, N, [...Output, First, Second]>
  : Array extends [infer First, ...infer Rest]
  ? Take<Rest, N, [...Output, First]>
  : [Output, Array];
