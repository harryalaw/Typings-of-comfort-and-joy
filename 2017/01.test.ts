import { describe, it, expectTypeOf } from "vitest";
import { Part1, Part2 } from "./01";

describe("Part1", () => {
  it("1122 gives 3", () => {
    expectTypeOf<Part1<"1122">>().toEqualTypeOf<3>();
  });

  it("1111 gives 4", () => {
    expectTypeOf<Part1<"1111">>().toEqualTypeOf<4>();
  });

  it("1234 gives 0", () => {
    expectTypeOf<Part1<"1234">>().toEqualTypeOf<0>();
  });

  it("91212129 gives 9", () => {
    expectTypeOf<Part1<"91212129">>().toEqualTypeOf<9>();
  });
});

describe("Part2", () => {
  it("1212 gives 6", () => {
    expectTypeOf<Part2<"1212">>().toEqualTypeOf<6>();
  });

  it("1221 gives 0", () => {
    expectTypeOf<Part2<"1221">>().toEqualTypeOf<0>();
  });

  it("123425 gives 4", () => {
    expectTypeOf<Part2<"123425">>().toEqualTypeOf<4>();
  });

  it("123123 gives 12", () => {
    expectTypeOf<Part2<"123123">>().toEqualTypeOf<12>();
  });

  it("12131415 gives 4", () => {
    expectTypeOf<Part2<"12131415">>().toEqualTypeOf<4>();
  });
});
