import { Coding, ValueSetExpansionContains } from "fhir/r4";
import { FhirCodingFormatOptions, fhirCodingTypeAdapter } from "./coding";

describe("fhirCodingTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirCodingTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirCodingTypeAdapter();
    const animalsValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "year",
      },
      {
        code: "1",
        display: "days",
      },
    ];

    it.each(<
      Array<[Coding | undefined, FhirCodingFormatOptions | undefined, string]>
    >[
      [
        {
          code: "0",
          display: "Cat",
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
        },
        "year",
      ],
      [
        {
          code: "3",
          display: "mouse",
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
        },
        "mouse",
      ],
      [
        {
          code: "4",
          display: "spider",
        },
        undefined,
        "spider",
      ],
      [
        {
          code: "5",
        },
        undefined,
        "5",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirCodingTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
