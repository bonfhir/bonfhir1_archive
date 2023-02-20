import { Identifier, ValueSetExpansionContains } from "fhir/r4";
import _ from "lodash";
import {
  FhirIdentifierFormatOptions,
  fhirIdentifierTypeAdapter,
} from "./identifier";

describe("fhirIdentifierTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirIdentifierTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirIdentifierTypeAdapter();
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
    const coding = {
      coding: [{ code: "0" }, { code: "1" }, { code: "2" }],
      text: "list of code.",
    };
    const identifier = {
      use: "usual",
      type: coding,
      value: "123:456:789",
      period: {
        start: "2020-10-11",
      },
    };
    it.each(<
      Array<
        [
          Identifier | undefined,
          FhirIdentifierFormatOptions | undefined,
          string
        ]
      >
    >[
      [identifier, undefined, "123:456:789"],
      [
        identifier,
        {
          style: "full",
          valueSetExpansions: animalsValueSetExpansion,
        },
        "[10/11/2020 - ongoing] - usual\n(list of code. (cat, dog, spider))\n123:456:789",
      ],
      ..._.entries({
        full: "[10/11/2020 - ongoing] - usual\n(list of code. (0, 1, 2))\n123:456:789",
        long: "usual (list of code. (0, 1, 2))\n123:456:789",
        medium: "usual (list of code.)\n123:456:789",
        short: "123:456:789 (usual)",
        value: "123:456:789",
      }).map(([style, expected]) => [identifier, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("format for arrays", () => {
    it("sorts by period and type", () => {
      const identifiers: Identifier[] = [
        {
          use: "official",
          period: { end: "2023-01-01" },
          value: "official, past",
        },
        {
          use: "usual",
          period: { end: "2023-01-01" },
          value: "usual, past",
        },
        {
          use: "temp",
          value: "temp, present",
        },
        {
          use: "usual",
          value: "usual, present",
        },
        {
          use: "secondary",
          period: { end: "1990-01-01" },
          value: "a long time ago, secondary",
        },
        {
          period: { end: "1990-01-01" },
          value: "a long time ago, no use",
        },
        {
          use: "usual",
          period: { end: "1990-01-01" },
          value: "a long time ago, usual",
        },
      ];

      expect(fhirIdentifierTypeAdapter().format(identifiers)).toEqual([
        "usual, present",
        "temp, present",
        "usual, past",
        "official, past",
        "a long time ago, usual",
        "a long time ago, secondary",
        "a long time ago, no use",
      ]);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirIdentifierTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
