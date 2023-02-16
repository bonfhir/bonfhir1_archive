import { CodeableConcept, ValueSetExpansionContains } from "fhir/r4";
import {
  FhirCodeableConceptFormatOptions,
  fhirCodeableConceptTypeAdapter,
} from "./codeableConcept";

describe("fhirCodeableConceptTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirCodeableConceptTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirCodeableConceptTypeAdapter();
    const animalsValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "0",
        display: "cat",
      },
      {
        code: "1",
        display: "dog",
      },
      {
        code: "2",
        display: "spider",
      },
    ];

    it.each(<
      Array<
        [
          CodeableConcept | undefined,
          FhirCodeableConceptFormatOptions | undefined,
          string
        ]
      >
    >[
      [
        {
          coding: [{ code: "0" }, { code: "1" }, { code: "2" }],
        },
        undefined,
        "[0, 1, 2]",
      ],
      [
        {
          coding: [
            { code: "0", display: "-1" },
            { code: "1", display: "-2" },
            { code: "2", display: "-3" },
          ],
        },
        undefined,
        "[-1, -2, -3]",
      ],
      [
        {
          coding: [
            { code: "0", display: "chicken" },
            { code: "1", display: "-2" },
            { code: "2", display: "-3" },
            { code: "3", display: "monkey" },
          ],
        },
        {
          codeValueSetExpansions: animalsValueSetExpansion,
        },
        "[cat, dog, spider, monkey]",
      ],
      [
        {
          coding: [{ code: "0" }, { code: "1" }, { code: "2" }],
          text: "list of code.",
        },
        {
          style: "short",
        },
        "list of code.",
      ],
      [
        {
          coding: [{ code: "0" }, { code: "1" }, { code: "2" }],
          text: "list of code.",
        },
        {
          style: "valuesOnly",
        },
        "[0, 1, 2]",
      ],
      [
        {
          coding: [{ code: "0" }, { code: "1" }, { code: "2" }],
          text: "list of code.",
        },
        {
          style: "full",
        },
        "list of code. (0, 1, 2)",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirCodeableConceptTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
