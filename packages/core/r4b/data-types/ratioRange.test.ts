import { RatioRange, ValueSetExpansionContains } from "fhir/r4";
import {
  FhirRatioRangeFormatOptions,
  fhirRatioRangeTypeAdapter,
} from "./ratioRange";

describe("fhirRatioRangeTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirRatioRangeTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirRatioRangeTypeAdapter();
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
    const colorValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "red",
      },
      {
        code: "1",
        display: "blue",
      },
    ];

    it.each(<
      Array<
        [
          RatioRange | undefined,
          FhirRatioRangeFormatOptions | undefined,
          string
        ]
      >
    >[
      [
        {
          lowNumerator: { value: -1 },
          highNumerator: { value: 2.1 },
          denominator: { value: 2.3 },
        },
        undefined,
        "[-1 ... 2.1] / 2.3",
      ],
      [
        {
          lowNumerator: { value: -1, code: "1" },
          highNumerator: { value: 2.1 },
          denominator: { value: 2.3, code: "0" },
        },
        {
          numbersNotation: "scientific",
          valueSetExpansions: animalsValueSetExpansion,
        },
        "[-1E0 ... 2.1E0]dog / 2.3E0cat",
      ],
      [
        {
          lowNumerator: { value: -1, code: "1" },
          highNumerator: { value: 2.1 },
          denominator: { value: 2.3, code: "0" },
        },
        {
          numbersNotation: "compact-short",
          numeratorValueSetExpansions: colorValueSetExpansion,
          denominatorValueSetExpansions: animalsValueSetExpansion,
        },
        "[-1 ... 2.1]blue / 2.3cat",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirRatioRangeTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
