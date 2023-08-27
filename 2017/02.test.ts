import { describe, it, expectTypeOf } from "vitest";
import { Part1 } from "./02";

describe("Part1", () => {
  it("Works", () => {
    type Input = `5	1	9	5
7	5	3
2	4	6	8`;
    type Output = Part1<Input>;
    expectTypeOf<Part1<Input>>().toEqualTypeOf<18>();
  });
});
