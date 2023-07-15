import { describe, expectTypeOf, it } from "vitest";

import type { StringToDigits, DigitsToNumber } from "./numbers";

describe("Converters", () => {
    it("Converts strings to digits", () => {
        expectTypeOf<StringToDigits<"12345">>().toEqualTypeOf<[1, 2, 3, 4, 5]>();
        expectTypeOf<StringToDigits<"12346">>().toEqualTypeOf<[1, 2, 3, 4, 6]>();
        expectTypeOf<StringToDigits<"12309123890123">>().toEqualTypeOf<
            [1, 2, 3, 0, 9, 1, 2, 3, 8, 9, 0, 1, 2, 3]
        >();
        expectTypeOf<StringToDigits<"981230987">>().toEqualTypeOf<
            [9, 8, 1, 2, 3, 0, 9, 8, 7]
        >();
    });

    it("Converts digits to number", () => {
        expectTypeOf<DigitsToNumber<[1, 2, 3, 4, 5]>>().toEqualTypeOf<12345>();
        expectTypeOf<DigitsToNumber<[1, 2, 3, 4, 6]>>().toEqualTypeOf<12346>();
        expectTypeOf<
            DigitsToNumber<[1, 2, 3, 0, 9, 1, 2, 3, 8, 9, 0, 1, 2, 3]>
        >().toEqualTypeOf<12309123890123>();
        expectTypeOf<
            DigitsToNumber<[9, 8, 1, 2, 3, 0, 9, 8, 7]>
        >().toEqualTypeOf<981230987>();
    });
});
