import { Quantity, ValueSetExpansionContains } from "fhir/r4";
import { FhirQuantityFormatOptions, fhirQuantityTypeAdapter } from "./quantity";

describe("fhirQuantityTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirQuantityTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirQuantityTypeAdapter();
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
      Array<
        [Quantity | undefined, FhirQuantityFormatOptions | undefined, string]
      >
    >[
      [
        {
          value: 3.3,
        },
        undefined,
        "3.3",
      ],
      [
        {
          value: -42.46,
          code: "0",
          comparator: ">",
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
          valueNotation: "scientific",
        },
        "> -4.246E1 cat",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirQuantityTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
