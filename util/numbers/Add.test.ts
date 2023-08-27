import { describe, expectTypeOf, it } from "vitest";

import type { Add } from "./Add";

describe("Add numbers", () => {
  it("Adds single digit numbers", () => {
    expectTypeOf<Add<1, 2>>().toEqualTypeOf<3>();
    expectTypeOf<Add<2, 2>>().toEqualTypeOf<4>();
    expectTypeOf<Add<4, 2>>().toEqualTypeOf<6>();
    expectTypeOf<Add<1, 0>>().toEqualTypeOf<1>();
    expectTypeOf<Add<0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Add<4, 5>>().toEqualTypeOf<9>();
  });

  it("Carries the one", () => {
    expectTypeOf<Add<1, 9>>().toEqualTypeOf<10>();
    expectTypeOf<Add<2, 8>>().toEqualTypeOf<10>();
    expectTypeOf<Add<3, 7>>().toEqualTypeOf<10>();
    expectTypeOf<Add<4, 6>>().toEqualTypeOf<10>();
    expectTypeOf<Add<5, 5>>().toEqualTypeOf<10>();
    expectTypeOf<Add<6, 4>>().toEqualTypeOf<10>();
    expectTypeOf<Add<7, 3>>().toEqualTypeOf<10>();
    expectTypeOf<Add<8, 2>>().toEqualTypeOf<10>();
    expectTypeOf<Add<9, 1>>().toEqualTypeOf<10>();
    expectTypeOf<Add<9, 9>>().toEqualTypeOf<18>();
  });

  it("Works for larger numbers", () => {
    expectTypeOf<Add<10, 20>>().toEqualTypeOf<30>();
    expectTypeOf<Add<100, 123>>().toEqualTypeOf<223>();
    expectTypeOf<Add<78901, 123>>().toEqualTypeOf<79024>();
    expectTypeOf<Add<123, 78901>>().toEqualTypeOf<79024>();
    expectTypeOf<Add<9999, 9999>>().toEqualTypeOf<19998>();
    expectTypeOf<Add<123456, 5671237>>().toEqualTypeOf<5794693>();
    expectTypeOf<
      Add<1092837019238, 1923801238>
    >().toEqualTypeOf<1094760820476>();
  });

  it("Works for add zero", () => {
    expectTypeOf<Add<100, 0>>().toEqualTypeOf<100>();
    expectTypeOf<Add<0, 100>>().toEqualTypeOf<100>();
    expectTypeOf<Add<0, 12345>>().toEqualTypeOf<12345>();
  });
});
