import { describe, it, expectTypeOf } from "vitest";
import { Multiply } from "./Multiply";

describe("Multiply", () => {
  it("Handles single digit mutliplication", () => {
    expectTypeOf<Multiply<1, 1>>().toEqualTypeOf<1>();
    expectTypeOf<Multiply<2, 3>>().toEqualTypeOf<6>();
    expectTypeOf<Multiply<3, 4>>().toEqualTypeOf<12>();
    expectTypeOf<Multiply<4, 8>>().toEqualTypeOf<32>();
    expectTypeOf<Multiply<5, 7>>().toEqualTypeOf<35>();
    expectTypeOf<Multiply<6, 2>>().toEqualTypeOf<12>();
    expectTypeOf<Multiply<7, 5>>().toEqualTypeOf<35>();
    expectTypeOf<Multiply<8, 7>>().toEqualTypeOf<56>();
    expectTypeOf<Multiply<9, 3>>().toEqualTypeOf<27>();
    expectTypeOf<Multiply<4, 6>>().toEqualTypeOf<24>();
    expectTypeOf<Multiply<8, 8>>().toEqualTypeOf<64>();
  });

  it("Handles larger mutliplication", () => {
    expectTypeOf<Multiply<1234, 5>>().toEqualTypeOf<6170>();
    expectTypeOf<Multiply<52, 678>>().toEqualTypeOf<35256>();
    expectTypeOf<Multiply<7890, 1234>>().toEqualTypeOf<9736260>();
  });

  it("Is commutative", () => {
    expectTypeOf<Multiply<1234, 789>>().toEqualTypeOf<Multiply<789, 1234>>();
  });

  it("Handles zeros", () => {
    expectTypeOf<Multiply<0, 8>>().toEqualTypeOf<0>();
    expectTypeOf<Multiply<8, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Multiply<12345679, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Multiply<0, 91823098>>().toEqualTypeOf<0>();
  });
});
