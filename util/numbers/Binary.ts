import { ShiftLeft } from "./Divide";
import { IsEven } from "./numbers";

export type ToBinary<N extends number> = N extends 0
  ? [0]
  : N extends 1
  ? [1]
  : IsEven<N> extends true
  ? [...ToBinary<ShiftLeft<N>>, 0]
  : [...ToBinary<ShiftLeft<N>>, 1];
