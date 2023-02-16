import { Duration, ValueSetExpansionContains } from "fhir/r4";
import { FhirDurationFormatOptions, fhirDurationTypeAdapter } from "./duration";

describe("fhirDurationTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirDurationTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirDurationTypeAdapter();
    const animalsValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "seconds",
      },
      {
        code: "1",
        display: "milliseconds",
      },
    ];

    it.each(<
      Array<
        [Duration | undefined, FhirDurationFormatOptions | undefined, string]
      >
    >[
      [
        {
          value: -42.3,
          code: "1",
          comparator: ">",
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
          valueNotation: "scientific",
        },
        "> -4.23E1 milliseconds",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });

    describe("given no code", () => {
      expect(() => adapter.format({ value: 2 })).toThrowError(
        /Code must be present, as described in.*/
      );
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirDurationTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
