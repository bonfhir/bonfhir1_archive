import { Ratio, ValueSetExpansionContains } from "fhir/r4";
import { FhirRatioFormatOptions, fhirRatioTypeAdapter } from "./ratio";

describe("fhirRatioTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirRatioTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirRatioTypeAdapter();
    const animalsValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "cat",
      },
      {
        code: "1",
        display: "dog",
      },
    ];

    it.each(<
      Array<[Ratio | undefined, FhirRatioFormatOptions | undefined, string]>
    >[
      [
        {
          numerator: { value: -1 },
          denominator: { value: 2.3 },
        },
        undefined,
        "-1/2.3",
      ],
      [
        {
          numerator: { value: -1, code: "1" },
          denominator: { value: 2.3 },
        },
        {
          numbersNotation: "scientific",
          codeValueSetExpansions: animalsValueSetExpansion,
        },
        "-1E0/2.3E0 dog",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirRatioTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
