import { Take } from "../util/array/Take";
import { ToNumberArray } from "../util/array/ToArray";
import { Add } from "../util/numbers/Add";
import { Input } from "./Inputs/01";

//type Solve1 = Part1<Input>


export type Part1<TInput extends string> =
    ToNumberArray<TInput> extends infer Arr extends number[]
    ? ReduceChunk<Arr, Rotate<Arr, 1>>
    : never;

type Matches<X, Y> = X extends Y ? X : 0;

type Rotate<Arr extends any[], K extends number> = Take<Arr, K> extends [
    infer First extends any[],
    infer Rest extends any[],
]
    ? [...Rest, ...First]
    : never;

type ReduceChunk<
    A extends unknown[],
    B extends unknown[],
    Total extends number = 0,
    Depth extends number = -1,
    Counter extends any[] = [],
> = Counter["length"] extends Depth
    ? [Total, A, B]
    : [A["length"], B["length"]] extends [0, 0]
    ? Total
    : Take<A, 100> extends [
        infer A1 extends unknown[],
        infer ARest extends unknown[],
    ]
    ? Take<B, 100> extends [
        infer B1 extends unknown[],
        infer BRest extends unknown[],
    ]
    ? ReduceChunk<ARest, BRest, Add<Total, Reduce<A1, B1>>, Depth, Counter>
    : Total
    : Total;

type Reduce<
    A extends unknown[],
    B extends unknown[],
    Total extends number = 0,
    Depth extends number = -1,
    Counter extends any[] = [],
> = Counter["length"] extends Depth
    ? [Total, A, B]
    : A extends [infer A1, ...infer ARest]
    ? B extends [infer B1, ...infer BRest]
    ? Reduce<
        ARest,
        BRest,
        Add<Total, Matches<As<A1, number>, As<B1, number>>>,
        Depth,
        [...Counter, 1]
    >
    : Total
    : Total;

type As<T, U> = T extends U ? T : never;

