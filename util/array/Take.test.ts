import { describe, it, expectTypeOf } from "vitest";
import { Take } from "./Take";

type SmallInput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type Counter<N, Output extends any[] = []> = Output["length"] extends N
  ? Output
  : Counter<N, [...Output, Output["length"]]>;

type LongInput = Counter<999>;

describe("Take", () => {
  it("Take all works", () => {
    type SmallOutput = Take<SmallInput, 10>;
    expectTypeOf<SmallOutput[0]>().toEqualTypeOf<SmallInput>();
    expectTypeOf<SmallOutput[1]>().toEqualTypeOf<[]>();

    type LongOutput = Take<LongInput, 999>;
    expectTypeOf<LongOutput[0]>().toEqualTypeOf<LongInput>();
    expectTypeOf<LongOutput[1]>().toEqualTypeOf<[]>();

    type LongBoy = Take<[...LongInput, ...LongInput, 2], 1000>;
    expectTypeOf<LongBoy[0]["length"]>().toEqualTypeOf<1000>;
    expectTypeOf<LongBoy[1]["length"]>().toEqualTypeOf<999>;
  });

  it("Take small works", () => {
    type Output = Take<SmallInput, 1>;
    expectTypeOf<Output[0]>().toEqualTypeOf<[0]>();
    expectTypeOf<Output[1]>().toEqualTypeOf<[1, 2, 3, 4, 5, 6, 7, 8, 9]>();
  });

  it("Take more than length returns whole array", () => {
    type Output = Take<SmallInput, 100>;
    expectTypeOf<Output[0]>().toEqualTypeOf<SmallInput>();
    expectTypeOf<Output[1]>().toEqualTypeOf<[]>();
  });
});
