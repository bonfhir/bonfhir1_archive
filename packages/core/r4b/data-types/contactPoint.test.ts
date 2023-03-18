import { ContactPoint, ValueSetExpansionContains } from "fhir/r4";
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
    const contactPoint: ContactPoint = {
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
        "nº42 - 10/11/2020 - ongoing, adresse mail: jack@example.com (domicile)",
      ],
      ...Object.entries({
        full: "nº42 - 10/11/2020 - ongoing, email: jack@example.com (home)",
        long: "email: jack@example.com (home)",
        medium: "jack@example.com (home)",
        short: "jack@example.com",
      }).map(([style, expected]) => [contactPoint, { style }, expected]),
    ])("parse %p with %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });

    it("allows to specify line separator", () => {
      expect(
        adapter.format(contactPoint, { style: "full", lineSeparator: "\n" })
      ).toEqual("nº42 - 10/11/2020 - ongoing\nemail: jack@example.com (home)");
    });
  });

  describe("format for arrays", () => {
    const contactPoints: ContactPoint[] = [
      {
        rank: 2,
        value: "rank 2",
      },
      {
        rank: 4,
        use: "work",
        value: "rank 4, work",
      },
      {
        rank: 0,
        use: "old",
        value: "rank 0, old, 0 is undefined rank",
      },
      {
        rank: 1,
        use: "old",
        value: "rank 1, old",
      },
      {
        use: "work",
        value: "work",
      },
      {
        rank: 10,
        use: "work",
        value: "rank 10, work",
      },
      {
        rank: 4,
        use: "home",
        value: "rank 4, home",
      },
      {
        use: "home",
        value: "home",
      },
    ];

    it("sorts by period and type", () => {
      expect(fhirContactPointTypeAdapter().format(contactPoints)).toEqual(
        "rank 1, old, " +
          "rank 2, " +
          "rank 4, home, " +
          "rank 4, work, " +
          "rank 10, work, " +
          "home, " +
          "work, and " +
          "rank 0, old, 0 is undefined rank"
      );
    });

    it("Allows custom sort and filter", () => {
      expect(
        fhirContactPointTypeAdapter().format(contactPoints, {
          useFilterOrder: ["work", "home"],
        })
      ).toEqual(
        "rank 4, work, " +
          "rank 4, home, " +
          "rank 10, work, " +
          "work, and " +
          "home"
      );
    });

    it("Allows to only display a few", () => {
      expect(
        fhirContactPointTypeAdapter().format(contactPoints, {
          useFilterOrder: ["work", "home"],
          max: 2,
        })
      ).toEqual("rank 4, work and rank 4, home");
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
