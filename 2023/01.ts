import { ComputeSimple } from "../util/helpers/Equality";
import { Add } from "../util/numbers/Add";
import { GreaterThan } from "../util/numbers/Comparisons";
import { Digit, DigitsToNumber } from "../util/numbers/numbers";

import type { Input } from "./Inputs/01"
type Solve1 = Part1<Input>
type Solve2 = Part2<Input>

export type Part1<T> = SolvePart1<T> extends [infer Total extends number, infer Remaining]
    ? Add<Total, SolvePart1<Remaining>>
    : SolvePart1<T>

type SolvePart1<Lines, Total extends number = 0, Depth extends number = 0, MaxDepth = 999> =
    Depth extends MaxDepth ? [Total, Lines] :
    NextLine<Lines> extends [infer Line, infer Rest]
    ? SolvePart1<Rest, Add<GetNumbers1<Line>, Total>, Add<Depth, 1>>
    : Add<GetNumbers1<Lines>, Total>

type NextLine<T> = T extends `${infer First}\n${infer Rest}`
    ? [First, Rest]
    : [T];

export type GetNumbers1<
    Line,
    Values extends { first: [number, Digit], last: [number, Digit] } = { first: [100, 0], last: [0, 0] },
    Depth extends number = 0
> = Line extends `${infer First}${infer Rest}`
        ? First extends `${infer N extends Digit}`
            ? [GreaterThan<Values["first"][0], Depth>, GreaterThan<Values["last"][0], Depth>] extends infer Result
                ? Result extends [true, true] ? GetNumbers1<Rest, ComputeSimple<Omit<Values, "first"> & { first: [Depth, N] } | never>, Add<Depth, 1>>
                : Result extends [true, false] ? GetNumbers1<Rest, { first: [Depth, N], last: [Depth, N] }, Add<Depth, 1>>
                : Result extends [false, true] ? GetNumbers1<Rest, Values, Add<Depth, 1>>
                : Result extends [false, false] ? GetNumbers1<Rest, ComputeSimple<Omit<Values, "last"> & { last: [Depth, N] }>, Add<Depth, 1>>
                : never
            : never
        : GetNumbers1<Rest, Values, Add<Depth, 1>>
    : DigitsToNumber<[Values["first"][1], Values["last"][1]]>

export type Part2<T> = SolvePart2<T> extends [infer Total extends number, infer Remaining]
    ? Add<Total, SolvePart2<Remaining>>
    : SolvePart2<T>

type SolvePart2<
    Lines,
    Total extends number = 0,
    Depth extends number = 0,
    MaxDepth = 800
> = Depth extends MaxDepth ? [Total, Lines]
        : NextLine<Lines> extends [infer Line, infer Rest]
            ? SolvePart2<Rest, Add<GetNumbers2<Line>, Total>, Add<Depth, 1>>
            : Add<GetNumbers2<Lines>, Total>

export type GetNumbers2<
    Line,
    Values extends { first: [number, Digit], last: [number, Digit] } = { first: [100, 0], last: [0, 0] },
    Depth extends number = 0,
> = NextNumber<Line> extends [infer N extends Digit, infer Rest]
        ? N extends 0 ? DigitsToNumber<[Values["first"][1], Values["last"][1]]>
        : [GreaterThan<Values["first"][0], Depth>, GreaterThan<Values["last"][0], Depth>] extends infer Result
            ? Result extends [true, true] ? GetNumbers2<Rest, ComputeSimple<Omit<Values, "first"> & { first: [Depth, N] } | never>, Add<Depth, 1>>
            : Result extends [true, false] ? GetNumbers2<Rest, { first: [Depth, N], last: [Depth, N] }, Add<Depth, 1>>
            : Result extends [false, true] ? GetNumbers2<Rest, Values, Add<Depth, 1>>
            : Result extends [false, false] ? GetNumbers2<Rest, ComputeSimple<Omit<Values, "last"> & { last: [Depth, N] }>, Add<Depth, 1>>
            : never
        : never
    : DigitsToNumber<[Values["first"][1], Values["last"][1]]>


type NextNumber<T> = T extends `${infer N extends Digit}${infer Rest}` ? [N, Rest]
    : T extends `one${infer Rest}` ? [1, `e${Rest}`]
    : T extends `two${infer Rest}` ? [2, `o${Rest}`]
    : T extends `three${infer Rest}` ? [3, `e${Rest}`]
    : T extends `four${infer Rest}` ? [4, `r${Rest}`]
    : T extends `five${infer Rest}` ? [5, `e${Rest}`]
    : T extends `six${infer Rest}` ? [6, `x${Rest}`]
    : T extends `seven${infer Rest}` ? [7, `n${Rest}`]
    : T extends `eight${infer Rest}` ? [8, `t${Rest}`]
    : T extends `nine${infer Rest}` ? [9, `e${Rest}`]
    : T extends `${infer _First}${infer Rest}` ? NextNumber<Rest>
    : [0, ""]

