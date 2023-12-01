import { describe, it, expectTypeOf } from "vitest"
import type { GetNumbers1, Part1 } from "./01.ts"

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
