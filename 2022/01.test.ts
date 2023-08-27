import { describe, expectTypeOf, it } from "vitest";

import type { Part1, Part2 } from "./01";

describe("Day 1", () => {
  it("Part1 works for the example", () => {
    expectTypeOf<Part1>().toEqualTypeOf<24000>();
  });
  it("Part2 works for the example", () => {
    expectTypeOf<Part2>().toEqualTypeOf<45000>();
  });
});
