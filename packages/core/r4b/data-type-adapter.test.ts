import { intlFhirDataTypeAdapter } from "./data-type-adapter";

describe("intlFhirDataTypeAdapter", () => {
  ["en-us", undefined, "fr-CA"].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = intlFhirDataTypeAdapter(locale);

      it("exposes different adapters", () => {
        // primitive types
        expect(typeof adapter.markdown.format).toBe("function");
        expect(typeof adapter.code.format).toBe("function");
        expect(typeof adapter.date.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.canonical.format).toBe("function");
        expect(typeof adapter.dateTime.format).toBe("function");
        expect(typeof adapter.instant.format).toBe("function");
        expect(typeof adapter.integer.format).toBe("function");
        expect(typeof adapter.decimal.format).toBe("function");
        // general-purpose types
        expect(typeof adapter.money.format).toBe("function");
        expect(typeof adapter.period.format).toBe("function");
        expect(typeof adapter.count.format).toBe("function");
        expect(typeof adapter.quantity.format).toBe("function");
        expect(typeof adapter.range.format).toBe("function");
        expect(typeof adapter.ratio.format).toBe("function");
        expect(typeof adapter.ratioRange.format).toBe("function");
        expect(typeof adapter.simpleQuantity.format).toBe("function");
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

  describe("message", () => {
    const adapter = intlFhirDataTypeAdapter("en-us");

    it("format messages", () => {
      expect(adapter.message``).toEqual("");
      expect(adapter.message`this is ${[1, "integer"]} guy.`).toEqual(
        "this is 1 guy."
      );

      expect(
        adapter.message`this is ${[
          "2023-02-02",
          "date",
          { dateStyle: "long" },
        ]} guy.`
      ).toEqual("this is February 2, 2023 guy.");
    });
  });
});
