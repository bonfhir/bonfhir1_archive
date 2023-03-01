import { Period } from "fhir/r4";
import { FhirPeriodFormatOptions, fhirPeriodTypeAdapter } from "./period";

describe("fhirPeriodTypeAdapter", () => {
  it("exposes the locale", () => {
    const adapter = fhirPeriodTypeAdapter("fr-CA");
    expect(adapter.locale).toEqual("fr-CA");
  });

  describe("format", () => {
    const adapter = fhirPeriodTypeAdapter();

    it.each(<
      Array<[Period | undefined, FhirPeriodFormatOptions | undefined, string]>
    >[
      [
        {
          start: "2023-12-15",
          end: "2023-12-16",
        },
        undefined,
        "12/15/2023 - 12/16/2023",
      ],
      [
        {
          start: "2023-12-15",
        },
        undefined,
        "12/15/2023 - ongoing",
      ],
      [
        {
          start: "2015-02-07T13:28:17-05:00",
          end: "2015-02-08T13:28:17-05:00",
        },
        {
          dateStyle: "short",
          timeStyle: "long",
        },
        "2/7/15, 6:28:17 PM UTC - 2/8/15, 6:28:17 PM UTC",
      ],
    ])("parse %p", (value, options, expected) => {
      expect(adapter.format(value, options)).toEqual(expected);
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirPeriodTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
