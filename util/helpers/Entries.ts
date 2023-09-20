export type ToEntries<TObj> = ValueOf<{
  [K in keyof TObj]: [K, TObj[K]];
}>;

export type ValueOf<T> = T[keyof T];
