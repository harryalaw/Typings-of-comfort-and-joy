import { describe, it, expectTypeOf } from "vitest"
import type { GetNumbers1, GetNumbers2, Part1, Part2 } from "./01.ts"

describe("Part1", () => {
    it("Should find the numbers", () => {
        type B = GetNumbers1<'pqr3stu8vwx'>
        expectTypeOf<GetNumbers1<'1abc2'>>().toEqualTypeOf<12>();
        expectTypeOf<GetNumbers1<'pqr3stu8vwx'>>().toEqualTypeOf<38>();
        expectTypeOf<GetNumbers1<'a1b2c3d4e5f'>>().toEqualTypeOf<15>();
        expectTypeOf<GetNumbers1<'treb7uchet'>>().toEqualTypeOf<77>();
    })

    it("Should sum it all good", () => {
        type Input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
        type Ans = Part1<Input>
        expectTypeOf<Ans>().toEqualTypeOf<142>();
    })

});

describe("Part2", () => {
    it("Should find the numbers", () => {
        type B = GetNumbers2<'two1nine'>
        expectTypeOf<GetNumbers2<'two1nine'>>().toEqualTypeOf<29>();
        expectTypeOf<GetNumbers2<'eightwothree'>>().toEqualTypeOf<83>();
        expectTypeOf<GetNumbers2<'abcone2threexyz'>>().toEqualTypeOf<13>();
        expectTypeOf<GetNumbers2<'xtwone3four'>>().toEqualTypeOf<24>();
        expectTypeOf<GetNumbers2<'4nineeightseven2'>>().toEqualTypeOf<42>();
        expectTypeOf<GetNumbers2<'zoneight234'>>().toEqualTypeOf<14>();
        expectTypeOf<GetNumbers2<'7pqrstsixteen'>>().toEqualTypeOf<76>();
    })

    it("Should sum it all good", () => {
        type Input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
        type Ans = Part2<Input>
        expectTypeOf<Ans>().toEqualTypeOf<281>();
    })

});

