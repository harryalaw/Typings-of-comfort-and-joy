import { describe, it, expectTypeOf } from "vitest";
import { ShiftLeft } from "./Divide";

describe("ShiftLeft", () => {
  it("Handles single digits", () => {
    expectTypeOf<ShiftLeft<0>>().toEqualTypeOf<0>();
    expectTypeOf<ShiftLeft<1>>().toEqualTypeOf<0>();
    expectTypeOf<ShiftLeft<2>>().toEqualTypeOf<1>();
    expectTypeOf<ShiftLeft<3>>().toEqualTypeOf<1>();
    expectTypeOf<ShiftLeft<4>>().toEqualTypeOf<2>();
    expectTypeOf<ShiftLeft<5>>().toEqualTypeOf<2>();
    expectTypeOf<ShiftLeft<6>>().toEqualTypeOf<3>();
    expectTypeOf<ShiftLeft<7>>().toEqualTypeOf<3>();
    expectTypeOf<ShiftLeft<8>>().toEqualTypeOf<4>();
    expectTypeOf<ShiftLeft<9>>().toEqualTypeOf<4>();
  });

  it("Handles larger numbers", () => {
    expectTypeOf<ShiftLeft<10>>().toEqualTypeOf<5>();
    expectTypeOf<ShiftLeft<2345>>().toEqualTypeOf<1172>();
    expectTypeOf<ShiftLeft<9876>>().toEqualTypeOf<4938>();
    expectTypeOf<ShiftLeft<2222222>>().toEqualTypeOf<1111111>();
  });
});
