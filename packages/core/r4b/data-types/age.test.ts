import { Age, ValueSetExpansionContains } from "fhir/r4";
import { FhirAgeFormatOptions, fhirAgeTypeAdapter } from "./age";

describe("fhirAgeTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirAgeTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirAgeTypeAdapter();
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
      Array<[Age | undefined, FhirAgeFormatOptions | undefined, string]>
    >[
      [
        {
          value: -42,
          code: "0",
          comparator: ">",
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
          valueNotation: "scientific",
        },
        "> -4.2E1 year",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });

    describe("given a float", () => {
      expect(() => adapter.format({ value: 2.3 })).toThrowError(
        /Value is a float. It does not match the fhir integer format.*/
      );
    });

    describe("given no code", () => {
      expect(() => adapter.format({ value: 2 })).toThrowError(
        /Code must be present, as described in.*/
      );
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirAgeTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
