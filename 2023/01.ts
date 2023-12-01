import { Add } from "../util/numbers/Add";
import { ParseInt } from "../util/numbers/numbers";

export type Parse<T> = ParseInt<`${FirstNumber<T>}${LastNumber<T>}`>;

export type Part1<T> = SolvePart1<T>;


type SolvePart1<Lines, Total extends number = 0> = NextLine<Lines> extends [infer Line, infer Rest]
    ? SolvePart1<Rest, Add<Parse<Line>, Total>>
    : Add<Parse<Lines>, Total>

type FirstNumber<T> = T extends `${infer First}${infer Rest}`
    ? First extends `${number}` ? First : FirstNumber<Rest> : never

type Reverse<T> = T extends `${infer First}${infer Rest}`
    ? `${Reverse<Rest>}${First}` : T

type LastNumber<T> = FirstNumber<Reverse<T>>

type NextLine<T> = T extends `${infer First}\n${infer Rest}`
    ? [First, Rest]
    : [T];

