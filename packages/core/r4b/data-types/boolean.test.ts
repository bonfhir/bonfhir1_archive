import { fhirBooleanTypeAdapter } from "./boolean";

describe("fhirBooleanTypeAdapter", () => {
  ["en-us", undefined].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirBooleanTypeAdapter(locale);

      describe("boolean", () => {
        it.each([
          ["true", true],
          ["false", false],
          [true, true],
          [false, false],
          ["TRUE", true],
          ["False", false],
          [undefined, undefined],
        ])("parse %p", (value, expected) => {
          expect(adapter.parse(value)).toBe(expected);
        });

        it.each([
          [true, "true"],
          [false, "false"],
          [undefined, ""],
        ])("format %p", (value, expected) => {
          expect(adapter.format(value)).toEqual(expected);
        });

        describe("given invalid value", () => {
          it("raises an error on parse", () => {
            expect(() => adapter.parse("test")).toThrow(
              /Value does not match the fhir boolean format as described in .*/
            );
          });

          it("raises an error on format", () => {
            expect(() => adapter.format("test")).toThrow(
              /Value does not match the fhir boolean format as described in .*/
            );
          });
        });
      });
    });
  });
});
