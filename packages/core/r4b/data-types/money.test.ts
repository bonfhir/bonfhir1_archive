import { Money } from "fhir/r4";
import { FhirMoneyFormatOptions, fhirMoneyTypeAdapter } from "./money";

describe("fhirMoneyTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirMoneyTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirMoneyTypeAdapter();

    it.each(<
      Array<[Money | undefined, FhirMoneyFormatOptions | undefined, string]>
    >[
      [
        {
          value: 123.23,
          currency: "CAD",
        },
        undefined,
        "CA$123.23",
      ],
      [
        {
          value: 123.23,
          currency: "EUR",
        },
        {
          notation: "compact-long",
        },
        "€123",
      ],
      [
        {
          value: 123.23,
          currency: "YEN",
        },
        {
          notation: "engineering",
          currencySign: "accounting",
          currencyDisplay: "name",
        },
        "123.23E0 YEN",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirMoneyTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
