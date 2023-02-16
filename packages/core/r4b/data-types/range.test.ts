import { Range } from "fhir/r4";
import { FhirRangeFormatOptions, fhirRangeTypeAdapter } from "./range";

describe("fhirRangeTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirRangeTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirRangeTypeAdapter();

    it.each(<
      Array<[Range | undefined, FhirRangeFormatOptions | undefined, string]>
    >[
      [
        {
          low: { value: -1 },
          high: { value: 2.3 },
        },
        undefined,
        "[-1 ... 2.3]",
      ],
      [
        {
          low: { value: -1, unit: "g" },
          high: { value: 2.3 },
        },
        {
          numbersNotation: "scientific",
        },
        "[-1E0 ... 2.3E0]g",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirRangeTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
