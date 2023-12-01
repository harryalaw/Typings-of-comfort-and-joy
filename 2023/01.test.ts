import { describe, it, expectTypeOf } from "vitest"
import type { Parse, Part1 } from "./01.ts"

describe("Part1", () => {
    it("Should find the numbers", () => {
        type B = Parse<'pqr3stu8vwx'>
        expectTypeOf<Parse<'1abc2'>>().toEqualTypeOf<12>();
        expectTypeOf<Parse<'pqr3stu8vwx'>>().toEqualTypeOf<38>();
        expectTypeOf<Parse<'a1b2c3d4e5f'>>().toEqualTypeOf<15>();
        expectTypeOf<Parse<'treb7uchet'>>().toEqualTypeOf<77>();
    })

    it("Should sum it all good", () => {
        type Input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
        type Ans = Part1<Input>
        expectTypeOf<Part1<Input>>().toEqualTypeOf<142>();
    })

});
