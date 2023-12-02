import { describe, it, expectTypeOf } from "vitest"
import type { IsValid, Part1, Part2, Power } from "./02.ts"

type TestInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

describe("Part1", () => {

    it("Should find the numbers", () => {
        type B = IsValid<'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'>
        expectTypeOf<
            IsValid<'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'>
        >().toEqualTypeOf<1>();
        expectTypeOf<
            IsValid<'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'>
        >().toEqualTypeOf<2>();
        expectTypeOf<
            IsValid<'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'>
        >().toEqualTypeOf<0>();
        expectTypeOf<
            IsValid<'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'>
        >().toEqualTypeOf<0>();
        expectTypeOf<
            IsValid<'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'>
        >().toEqualTypeOf<5>();
        expectTypeOf<
IsValid<'Game 3: 8 green, 1 blue, 7 red; 12 red, 6 blue, 9 green; 2 blue, 1 red, 14 green; 9 green, 4 red; 2 red, 1 blue, 8 green'>
        >().toEqualTypeOf<0>();

    })

    it("Should sum it all good", () => {
        type Ans = Part1<TestInput>
        expectTypeOf<Ans>().toEqualTypeOf<8>();
    })

});

describe("Part2", () => {
    it("Should find the numbers", () => {
        type A = Power<'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'>

        expectTypeOf<
            Power<'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'>
        >().toEqualTypeOf<48>();
        expectTypeOf<
            Power<'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'>
        >().toEqualTypeOf<12>();
        expectTypeOf<
            Power<'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'>
        >().toEqualTypeOf<1560>();
        expectTypeOf<
            Power<'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'>
        >().toEqualTypeOf<630>();
        expectTypeOf<
            Power<'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'>
        >().toEqualTypeOf<36>();
    })

    it("Should sum it all good", () => {
        type Ans = Part2<TestInput>
        expectTypeOf<Ans>().toEqualTypeOf<2286>();
    })

});

