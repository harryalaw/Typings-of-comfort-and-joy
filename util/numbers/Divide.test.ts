import { describe, it, expectTypeOf } from "vitest";
import { ShiftRight } from "./Divide";

describe("ShiftLeft", () => {
  it("Handles single digits", () => {
    expectTypeOf<ShiftRight<0>>().toEqualTypeOf<0>();
    expectTypeOf<ShiftRight<1>>().toEqualTypeOf<0>();
    expectTypeOf<ShiftRight<2>>().toEqualTypeOf<1>();
    expectTypeOf<ShiftRight<3>>().toEqualTypeOf<1>();
    expectTypeOf<ShiftRight<4>>().toEqualTypeOf<2>();
    expectTypeOf<ShiftRight<5>>().toEqualTypeOf<2>();
    expectTypeOf<ShiftRight<6>>().toEqualTypeOf<3>();
    expectTypeOf<ShiftRight<7>>().toEqualTypeOf<3>();
    expectTypeOf<ShiftRight<8>>().toEqualTypeOf<4>();
    expectTypeOf<ShiftRight<9>>().toEqualTypeOf<4>();
  });

  it("Handles larger numbers", () => {
    expectTypeOf<ShiftRight<10>>().toEqualTypeOf<5>();
    expectTypeOf<ShiftRight<2345>>().toEqualTypeOf<1172>();
    expectTypeOf<ShiftRight<9876>>().toEqualTypeOf<4938>();
    expectTypeOf<ShiftRight<2222222>>().toEqualTypeOf<1111111>();
  });
});
