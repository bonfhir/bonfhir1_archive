import { Address, ValueSetExpansionContains } from "fhir/r4";
import _ from "lodash";
import { FhirAddressFormatOptions, fhirAddressTypeAdapter } from "./address";

describe("fhirAddressTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirAddressTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirAddressTypeAdapter();
    const address = {
      use: "home",
      type: "postal",
      line: [
        "18 rue des paquerettes",
        "allée 3",
        "batiment 4",
        "appartement 008",
      ],
      city: "Wonderland",
      district: "Baldwin",
      state: "Nevada",
      postalCode: "2A1 J7T",
      country: "US",
      period: {
        start: "2020-10-11",
      },
      text: "18 rue des paquerettes, Nevada. (main address)",
    };
    const useValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "home",
        display: "domicile",
      },
    ];
    const typeValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "postal",
        display: "adresse postale",
      },
    ];

    it.each(<
      Array<
        [Address | undefined, FhirAddressFormatOptions | undefined, string[]]
      >
    >[
      [
        address,
        {
          style: "extended",
          useValueSetExpansions: useValueSetExpansion,
          typeValueSetExpansions: typeValueSetExpansion,
        },
        [
          "(10/11/2020 - ongoing)",
          "adresse postale - domicile",
          "18 rue des paquerettes",
          "allée 3",
          "batiment 4",
          "appartement 008",
          "Wonderland, Nevada 2A1 J7T",
          "US",
        ],
      ],
      ..._.entries({
        text: ["18 rue des paquerettes, Nevada. (main address)"],
        full: [
          "18 rue des paquerettes",
          "allée 3",
          "batiment 4",
          "appartement 008",
          "Wonderland, Nevada 2A1 J7T",
        ],
        extended: [
          "(10/11/2020 - ongoing)",
          "postal - home",
          "18 rue des paquerettes",
          "allée 3",
          "batiment 4",
          "appartement 008",
          "Wonderland, Nevada 2A1 J7T",
          "US",
        ],
      }).map(([style, expected]) => [address, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected.join("\n"));
    });
  });

  describe("format for arrays", () => {
    it("sorts by period and type", () => {
      const addresses: Address[] = [
        {
          use: "home",
          period: { end: "2023-01-01" },
          text: "home, past",
        },
        {
          use: "work",
          period: { end: "2023-01-01" },
          text: "work, past",
        },
        {
          use: "temp",
          text: "temp, present",
        },
        {
          use: "work",
          text: "work, present",
        },
        {
          use: "old",
          period: { end: "1990-01-01" },
          text: "a long time ago, old",
        },
        {
          period: { end: "1990-01-01" },
          text: "a long time ago, no use",
        },
        {
          use: "work",
          period: { end: "1990-01-01" },
          text: "a long time ago, work",
        },
      ];

      expect(
        fhirAddressTypeAdapter().format(addresses, {
          style: "text",
        })
      ).toEqual([
        "work, present",
        "temp, present",
        "home, past",
        "work, past",
        "a long time ago, work",
        "a long time ago, old",
        "a long time ago, no use",
      ]);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirAddressTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
