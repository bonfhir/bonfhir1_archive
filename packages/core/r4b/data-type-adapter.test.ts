import { intlFhirDataTypeAdapter } from "./data-type-adapter";

describe("intlFhirDataTypeAdapter", () => {
  ["en-us", undefined, "fr-CA"].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = intlFhirDataTypeAdapter(locale);

      it("exposes different adapters", () => {
        expect(typeof adapter.date.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.canonical.format).toBe("function");
        expect(typeof adapter.integer.format).toBe("function");
        expect(typeof adapter.decimal.format).toBe("function");
      });

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => intlFhirDataTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
