export type Take<
    Array extends any[],
    N extends number,
    Output extends any[] = [],
> = Output["length"] extends N
    ? [Output, Array]
    : Array extends [infer First, ...infer Rest]
    ? Take<Rest, N, [...Output, First]>
    : [Output, Array];
