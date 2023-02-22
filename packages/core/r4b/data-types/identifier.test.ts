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
    const systemsLabels = { NAS: "numero de sécurité social" };
    const identifier = {
      use: "usual",
      system: "NAS",
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
      [identifier, undefined, "NAS: 123:456:789"],
      [
        identifier,
        {
          style: "full",
          valueSetExpansions: animalsValueSetExpansion,
          systemsLabels: systemsLabels,
        },
        "[10/11/2020 - ongoing]\nnumero de sécurité social: 123:456:789\nusual - list of code. (cat, dog, spider)",
      ],
      ..._.entries({
        full: "[10/11/2020 - ongoing]\nNAS: 123:456:789\nusual - list of code. (0, 1, 2)",
        long: "NAS: 123:456:789\nusual - list of code. (0, 1, 2)",
        medium: "NAS: 123:456:789 (usual)",
        short: "NAS: 123:456:789",
        value: "123:456:789",
      }).map(([style, expected]) => [identifier, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("format for arrays", () => {
    const identifiers: Identifier[] = [
      {
        use: "official",
        system: "NAS",
        period: { end: "2023-01-01" },
        value: "official, past",
      },
      {
        use: "usual",
        system: "ID",
        period: { end: "2023-01-01" },
        value: "usual, past",
      },
      {
        use: "temp",
        system: "ID",
        value: "temp, present",
      },
      {
        use: "usual",
        system: "SKD_S",
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

    it("sorts by period and use", () => {
      expect(
        fhirIdentifierTypeAdapter().format(identifiers, { style: "value" })
      ).toEqual(
        "usual, present, " +
          "temp, present, " +
          "usual, past, " +
          "official, past, " +
          "a long time ago, usual, " +
          "a long time ago, secondary, " +
          "and a long time ago, no use"
      );
    });

    it("Allows custom sort and filter", () => {
      expect(
        fhirIdentifierTypeAdapter().format(identifiers, {
          useFilterOrder: ["official", "usual"],
          style: "value",
        })
      ).toEqual(
        "usual, present, " +
          "official, past, " +
          "usual, past, and " +
          "a long time ago, usual"
      );

      expect(
        fhirIdentifierTypeAdapter().format(identifiers, {
          systemFilterOrder: ["ID", "NAS"],
        })
      ).toEqual(
        "ID: temp, present, " + "ID: usual, past, and " + "NAS: official, past"
      );
    });

    it("Allows to only display a few", () => {
      expect(
        fhirIdentifierTypeAdapter().format(identifiers, {
          useFilterOrder: ["official", "usual"],
          style: "value",
          max: 2,
        })
      ).toEqual("usual, present and official, past");
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
