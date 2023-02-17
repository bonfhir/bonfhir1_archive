import { HumanName, ValueSetExpansionContains } from "fhir/r4";
import _ from "lodash";
import {
  FhirHumanNameFormatOptions,
  fhirHumanNameTypeAdapter,
} from "./humanName";

describe("fhirHumanNameTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirHumanNameTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirHumanNameTypeAdapter();
    const name = {
      use: "official",
      family: "Bonisseur de la Bath",
      given: ["Hubert", "Léandre"],
      prefix: ["Mr", "Dr"],
      suffix: ["jr"],
    };
    const nameUseValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "usual",
        display: "courant",
      },
      {
        code: "official",
        display: "officiel",
      },
      {
        code: "nickname",
        display: "surnom",
      },
    ];

    it.each(<
      Array<
        [HumanName | undefined, FhirHumanNameFormatOptions | undefined, string]
      >
    >[
      [
        {
          ...name,
          text: "Mr Hubert Bonisseur de la Bath",
        },
        undefined,
        "Mr Hubert Bonisseur de la Bath",
      ],
      [name, undefined, "Hubert Bonisseur de la Bath"],
      [
        name,
        {
          style: "full",
          useValueSetExpansions: nameUseValueSetExpansion,
        },
        "Mr Dr Bonisseur de la Bath Hubert Léandre jr (officiel)",
      ],
      ..._.entries({
        shorter: "Hubert",
        short: "Hubert Bonisseur de la Bath",
        medium: "Mr Dr Bonisseur de la Bath Hubert",
        long: "Mr Dr Bonisseur de la Bath Hubert Léandre",
        full: "Mr Dr Bonisseur de la Bath Hubert Léandre jr (official)",
      }).map(([style, expected]) => [name, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirHumanNameTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
