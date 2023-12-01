export type Equal<X, Y> = (<T>() => T extends Compute<X> ? 1 : 2) extends <T>() => T extends Compute<Y>
  ? 1
  : 2
  ? true
  : false;

export type Compute<T> = { [K in keyof T]: Compute<T[K]> } | never;

export type ComputeSimple<T> = { [K in keyof T]: T[K] } | never;

