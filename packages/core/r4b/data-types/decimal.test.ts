import Decimal from "decimal.js";
import { FhirDecimal, fhirDecimalTypeAdapter } from "./decimal";

describe("fhirDecimalTypeAdapter", () => {
  ["en-us", undefined].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirDecimalTypeAdapter(locale);

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });

      describe("date", () => {
        it.each([
          ["12.3", 12.3],
          [12.3, 12.3],
          ["123.3e13", 1233000000000000],
          [123.3e13, 1233000000000000],
          ["123.3e134", 1.233e136],
          [123.3e134, 1.233e136],
          ["-1", -1],
          [-1, -1],
          ["-1.5", -1.5],
          [-1.5, -1.5],
        ])("parse %p", (value, expected) => {
          expect(adapter.parse(value)).toEqual(new Decimal(expected));
        });

        it.each(<Array<[string | FhirDecimal | number | undefined, string]>>[
          ["123", "123"],
          [123, "123"],
          [1.2, "1.2"],
        ])("format %p", (value, expected) => {
          expect(adapter.format(value)).toEqual(expected);
        });
      });
    });
  });

  describe("with chinese locale", () => {
    const adapter = fhirDecimalTypeAdapter("zh-Hans-CN-u-nu-hanidec");

    describe("date", () => {
      it.each([
        ["123456.789", "一二三,四五六.七八九"],
        [
          -142e42,
          "-一四二,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇,〇〇〇",
        ],
      ])("format %p", (value, expected) => {
        expect(adapter.format(value)).toEqual(expected);
      });
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirDecimalTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
