import { FhirDate, FhirDateFormatOptions, fhirDateTypeAdapter } from "./date";

describe("fhirDateTypeAdapter", () => {
  ["en-us", undefined].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirDateTypeAdapter(locale);

      describe("date", () => {
        it.each(<Array<[string, Partial<FhirDate>]>>[
          [
            "2023-01-01",
            {
              date: new Date(2023, 0, 1),
              flavour: "full",
              year: 2023,
              month: 1,
              day: 1,
            },
          ],
          [
            "2023-02",
            {
              date: new Date(2023, 1, 1),
              flavour: "year-month",
              year: 2023,
              month: 2,
              day: undefined,
            },
          ],
          [
            "2020",
            {
              date: new Date(2020, 0, 1),
              flavour: "year",
              year: 2020,
              month: undefined,
              day: undefined,
            },
          ],
        ])("parse %p", (value, expected) => {
          expect(adapter.parse(value)).toMatchObject(expected);
        });

        it.each(<
          Array<[string | FhirDate, FhirDateFormatOptions | undefined, string]>
        >[
          ["2023-02-08", undefined, "2/8/2023"],
          ["2023-02-08", { dateStyle: "full" }, "Wednesday, February 8, 2023"],
          ["2023-02-08", { dateStyle: "medium" }, "Feb 8, 2023"],
          ["2023-02-08", { dateStyle: "short" }, "2/8/23"],
          ["2023-02", { dateStyle: "medium" }, "Feb 2023"],
          ["2023", undefined, "2023"],
        ])("format %p", (value, style, expected) => {
          expect(adapter.format(value, style)).toEqual(expected);
        });
      });
    });
  });

  describe("with french locale", () => {
    const adapter = fhirDateTypeAdapter("fr-CA");

    describe("date", () => {
      it.each(<
        Array<[string | FhirDate, FhirDateFormatOptions | undefined, string]>
      >[
        ["2023-02-08", undefined, "2023-02-08"],
        ["2023-02-08", { dateStyle: "full" }, "mercredi 8 février 2023"],
        ["2023-02-08", { dateStyle: "medium" }, "8 févr. 2023"],
        ["2023-02-08", { dateStyle: "short" }, "2023-02-08"],
        ["2023-02", { dateStyle: "medium" }, "févr. 2023"],
        ["2023", undefined, "2023"],
      ])("format %p", (value, style, expected) => {
        expect(adapter.format(value, style)).toEqual(expected);
      });
    });
  });
});
