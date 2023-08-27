import { describe, it, expectTypeOf } from "vitest";
import { ToBinary } from "./Binary";

describe("ToBinary", () => {
  it("Converts even powers", () => {
    expectTypeOf<ToBinary<1>>().toEqualTypeOf<[1]>();
    expectTypeOf<ToBinary<2>>().toEqualTypeOf<[1, 0]>();
    expectTypeOf<ToBinary<4>>().toEqualTypeOf<[1, 0, 0]>();
    expectTypeOf<ToBinary<8>>().toEqualTypeOf<[1, 0, 0, 0]>();
    expectTypeOf<ToBinary<16>>().toEqualTypeOf<[1, 0, 0, 0, 0]>();
  });
  it("Converts other values", () => {
    expectTypeOf<ToBinary<3>>().toEqualTypeOf<[1, 1]>();
    expectTypeOf<ToBinary<5>>().toEqualTypeOf<[1, 0, 1]>();
    expectTypeOf<ToBinary<11>>().toEqualTypeOf<[1, 0, 1, 1]>();
    expectTypeOf<ToBinary<15>>().toEqualTypeOf<[1, 1, 1, 1]>();
    expectTypeOf<ToBinary<37>>().toEqualTypeOf<[1, 0, 0, 1, 0, 1]>();
  });
  it("Works for zero", () => {
    expectTypeOf<ToBinary<0>>().toEqualTypeOf<[0]>();
  });
});
