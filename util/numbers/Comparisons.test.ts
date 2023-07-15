import { describe, expectTypeOf, it } from "vitest";

import type { GreaterThan, Max, Min } from "./Comparisons";

describe("GreaterThan", () => {
  it("Compares successfully", () => {
    expectTypeOf<GreaterThan<1, 0>>().toEqualTypeOf<true>();
    expectTypeOf<GreaterThan<1, 1>>().toEqualTypeOf<false>();
    expectTypeOf<GreaterThan<1000, 10>>().toEqualTypeOf<true>();
    expectTypeOf<GreaterThan<1, 2>>().toEqualTypeOf<false>();
    expectTypeOf<GreaterThan<1, 3>>().toEqualTypeOf<false>();
  });
});

describe("Max", () => {
  it("Gets max successfully", () => {
    expectTypeOf<Max<10, 1>>().toEqualTypeOf<10>();
    expectTypeOf<Max<6, 10>>().toEqualTypeOf<10>();
    expectTypeOf<Max<0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Max<100000000, 10000>>().toEqualTypeOf<100000000>();
    expectTypeOf<Max<10000, 100000000>>().toEqualTypeOf<100000000>();
  });
});

describe("Min", () => {
  it("Gets min successfully", () => {
    expectTypeOf<Min<10, 1>>().toEqualTypeOf<1>();
    expectTypeOf<Min<6, 10>>().toEqualTypeOf<6>();
    expectTypeOf<Min<0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<Min<100000000, 10000>>().toEqualTypeOf<10000>();
    expectTypeOf<Min<10000, 100000000>>().toEqualTypeOf<10000>();
  });
});
