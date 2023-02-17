import { ContactPoint, ValueSetExpansionContains } from "fhir/r4";
import _ from "lodash";
import {
  FhirContactPointFormatOptions,
  fhirContactPointTypeAdapter,
} from "./contactPoint";

describe("fhirContactPointTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirContactPointTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirContactPointTypeAdapter();
    const contactPoint = {
      use: "home",
      system: "email",
      value: "jack@example.com",
      rank: 42,
      period: {
        start: "2020-10-11",
      },
    };
    const useValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "home",
        display: "domicile",
      },
    ];
    const systemValueSetExpansion: ReadonlyArray<ValueSetExpansionContains> = [
      {
        code: "email",
        display: "adresse mail",
      },
    ];

    it.each(<
      Array<
        [
          ContactPoint | undefined,
          FhirContactPointFormatOptions | undefined,
          string
        ]
      >
    >[
      [contactPoint, undefined, "jack@example.com"],
      [
        contactPoint,
        {
          style: "full",
          useValueSetExpansions: useValueSetExpansion,
          systemValueSetExpansions: systemValueSetExpansion,
        },
        "nº42 - 10/11/2020 - ongoing\nadresse mail: jack@example.com (domicile)",
      ],
      ..._.entries({
        full: "nº42 - 10/11/2020 - ongoing\nemail: jack@example.com (home)",
        long: "email: jack@example.com (home)",
        medium: "jack@example.com (home)",
        short: "jack@example.com",
      }).map(([style, expected]) => [contactPoint, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirContactPointTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
