import { Add } from "../util/numbers/Add"
import { GreaterThan, Max } from "../util/numbers/Comparisons"
import { Multiply } from "../util/numbers/Multiply"
import { Input } from "./Inputs/02"


type P1 = Part1<Input>
type P2 = Part2<Input>

export type Part1<T> = SolvePart1<T>

type SolvePart1<T, Count extends number = 0> =
    T extends `${infer Line}\n${infer Rest}`
    ? SolvePart1<Rest, Add<Count, IsValid<Line>>>
    : Add<Count, IsValid<T>>

export type IsValid<T> = ParseLine<T> extends [infer Id extends number, infer MostBlue extends number, infer MostGreen extends number, infer MostRed extends number]
    ? GreaterThan<MostBlue, 14> extends true ? 0
    : GreaterThan<MostGreen, 13> extends true ? 0
    : GreaterThan<MostRed, 12> extends true ? 0
    : Id
    : never

export type Part2<T> = SolvePart2<T>

type SolvePart2<T, Count extends number = 0> =
    T extends `${infer Line}\n${infer Rest}`
    ? SolvePart2<Rest, Add<Count, Power<Line>>>
    : Add<Count, Power<T>>

export type Power<T> = ParseLine<T> extends [infer _id, infer Blue extends number, infer Green extends number, infer Red extends number]
    ? Multiply<Blue, Green> extends infer Result extends number
    ? Multiply<Result, Red>
    : never
    : never

type MostCounts = [number, number, number, number]

type ParseId<T> = T extends `Game ${infer Id extends number}: ${infer Rest}`
    ? [Id, Rest]
    : never

type ParseLine<T> = ParseId<T> extends [infer Id extends number, infer Rest]
    ? ParseLineInternal<Rest, [Id, 0, 0, 0]>
    : never

type ParseLineInternal<T, CurrGame extends MostCounts> =
    T extends `${infer Count extends number} blue, ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], Max<Count, CurrGame[1]>, CurrGame[2], CurrGame[3]]>
    : T extends `${infer Count extends number} blue; ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], Max<Count, CurrGame[1]>, CurrGame[2], CurrGame[3]]>
    : T extends `${infer Count extends number} blue`
    ? [CurrGame[0], Max<Count, CurrGame[1]>, CurrGame[2], CurrGame[3]]
    : T extends `${infer Count extends number} green, ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], CurrGame[1], Max<Count, CurrGame[2]>, CurrGame[3]]>
    : T extends `${infer Count extends number} green; ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], CurrGame[1], Max<Count, CurrGame[2]>, CurrGame[3]]>
    : T extends `${infer Count extends number} green`
    ? [CurrGame[0], CurrGame[1], Max<Count, CurrGame[2]>, CurrGame[3]]
    : T extends `${infer Count extends number} red, ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], CurrGame[1], CurrGame[2], Max<Count, CurrGame[3]>]>
    : T extends `${infer Count extends number} red; ${infer Rest}`
    ? ParseLineInternal<Rest, [CurrGame[0], CurrGame[1], CurrGame[2], Max<Count, CurrGame[3]>]>
    : T extends `${infer Count extends number} red`
    ? [CurrGame[0], CurrGame[1], CurrGame[2], Max<Count, CurrGame[3]>]
    : CurrGame


