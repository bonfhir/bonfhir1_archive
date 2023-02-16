import { Count, ValueSetExpansionContains } from "fhir/r4";
import { FhirCountFormatOptions, fhirCountTypeAdapter } from "./count";

describe("fhirCountTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirCountTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirCountTypeAdapter();
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
      Array<[Count | undefined, FhirCountFormatOptions | undefined, string]>
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
        "> -4.2E1 cat",
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
      expect(() => fhirCountTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
