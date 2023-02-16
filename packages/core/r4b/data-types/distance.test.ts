import { Distance, ValueSetExpansionContains } from "fhir/r4";
import { FhirDistanceFormatOptions, fhirDistanceTypeAdapter } from "./distance";

describe("fhirDistanceTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirDistanceTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirDistanceTypeAdapter();
    const animalsValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "km",
      },
      {
        code: "1",
        display: "inches",
      },
    ];

    it.each(<
      Array<[Distance | undefined, FhirDistanceFormatOptions | undefined, string]>
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
        "> -4.2E1 km",
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
      expect(() => fhirDistanceTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
