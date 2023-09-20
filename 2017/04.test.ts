import { describe, test, expectTypeOf } from "vitest";
import { Part1, Part2 } from "./04";

describe("Part1", () => {
  test("aa bb cc dd ee is valid.", () => {
    type Input = "aa bb cc dd ee";
    type Answer = Part1<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<1>();
  });
  test("aa bb cc dd aa is not valid - the word aa appears more than once.", () => {
    type Input = "aa bb cc dd ee aa";
    type Answer = Part1<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<0>();
  });
  test("aa bb cc dd aaa is valid - aa and aaa count as different words.", () => {
    type Input = "aa bb cc dd aaa";
    type Answer = Part1<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<1>();
  });
});

describe("Part2", () => {
  test("abcde fghij is a valid passphrase.", () => {
    type Input = "abcde fghij";
    type Answer = Part2<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<1>();
  });

  test("abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.", () => {
    type Input = "abcde xyz ecdab";
    type Answer = Part2<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<0>();
  });
  test("a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.", () => {
    type Input = "a ab abc abd abf abj";
    type Answer = Part2<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<1>();
  });
  test("iiii oiii ooii oooi oooo is valid.", () => {
    type Input = "iiii oiii ooii oooi oooo";
    type Answer = Part2<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<1>();
  });
  test("oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.", () => {
    type Input = "oiii ioii iioi iiio";
    type Answer = Part2<Input>;
    expectTypeOf<Answer>().toEqualTypeOf<0>();
  });

  test("Experiments", () => {
    type Input = "fhaa qwy vqbq gsswej lxr yzl wakcige mwjrl";
    type Answer = Part2<Input>;
  });
});
