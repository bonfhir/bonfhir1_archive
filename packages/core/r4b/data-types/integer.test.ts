import { fhirIntegerTypeAdapter } from "./integer";

describe("fhirIntegerTypeAdapter", () => {
  ["en-us", undefined].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirIntegerTypeAdapter(locale);

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });

      describe("parse", () => {
        it.each([
          ["12", 12],
          [42, 42],
          [undefined, undefined],
        ])("parse %p", (value, expected) => {
          expect(adapter.parse(value)).toEqual(expected);
        });
      });

      describe("format", () => {
        it.each([
          ["123", "123"],
          [123, "123"],
          [undefined, ""],
        ])("format %p", (value, expected) => {
          expect(adapter.format(value)).toEqual(expected);
        });
      });

      describe("given invalid values", () => {
        it.each([0.1, "001", "bonjour"])(
          "throw an error for `%p'",
          (invalidValue) => {
            expect(() => adapter.format(invalidValue)).toThrowError(
              /.*does not match the fhir integer format as described.*/
            );
            expect(() => adapter.parse(invalidValue)).toThrowError(
              /.*does not match the fhir integer format as described.*/
            );
          }
        );
      });
    });
  });

  describe("with chinese locale", () => {
    const adapter = fhirIntegerTypeAdapter("zh-Hans-CN-u-nu-hanidec");

    describe("format", () => {
      it.each([
        ["123456", "一二三,四五六"],
        [-45, "-四五"],
      ])("format %p", (value, expected) => {
        expect(adapter.format(value)).toEqual(expected);
      });
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirIntegerTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
