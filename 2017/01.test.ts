import { describe, it, expectTypeOf } from "vitest";
import { Part1 } from "./01";

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
