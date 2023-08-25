export type Split<
  T,
  Sep extends string,
> = T extends `${infer First}${Sep}${infer Rest}`
  ? [First, ...Split<Rest, Sep>]
  : [T];
