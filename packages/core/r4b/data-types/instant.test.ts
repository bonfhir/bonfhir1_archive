import {
  FhirInstant,
  FhirInstantFormatOptions,
  fhirInstantTypeAdapter,
} from "./instant";

describe("fhirInstantTypeAdapter", () => {
  // ["en-us", undefined].forEach((locale) => {
  ["en-us"].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirInstantTypeAdapter(locale);

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });

      describe("simple parse and format", () => {
        expect(adapter.parse("2015-02-07T13:28:17-05:00")).toEqual(
          new Date("2015-02-07T13:28:17-05:00")
        );

        expect(adapter.format("2015-02-07T13:28:17+05:00")).toEqual(
          "2/7/15, 8:28 AM"
        );
      });
    });
  });

  describe("invalid date times", () => {
    const adapter = fhirInstantTypeAdapter();

    it.each([
      "2015", // no month, no day, no time
      "2015-02", // no day, no time
      "2015-02-07", // no time
      "2015-02-07T13", // invalid time
      "2015-02-07T", // invalid time
      "13:28:17-05:00", // no time
      "T13:28:17-05:00", // no time
      "2015-02-07T13:28:17", // no timezone
      "2015-02-07T13:28:17-", // no timezone
      "2015-02-07T13:28:17+", // no timezone
    ])("format %p", (value) => {
      expect(() => adapter.format(value)).toThrowError(
        /Value does not match the fhir instant format.*/
      );
    });
  });

  describe("dates", () => {
    const adapter = fhirInstantTypeAdapter();

    it.each(<Array<[string, Partial<FhirInstant>]>>[
      ["2015-02-07T13:28:17-05:00", new Date("2015-02-07T13:28:17-05:00")],
      ["2017-11-21T00:00:00.000Z", new Date("2017-11-21T00:00:00.000Z")],
    ])("parse %p", (value, expected) => {
      expect(adapter.parse(value)).toMatchObject(expected);
    });

    it.each(<
      Array<
        [string | FhirInstant, FhirInstantFormatOptions | undefined, string]
      >
    >[
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "long", timeStyle: "medium" },
        "February 7, 2015 at 6:28:17 PM",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "medium", timeStyle: "long" },
        "Feb 7, 2015, 6:28:17 PM UTC",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "medium", timeStyle: "medium" },
        "Feb 7, 2015, 6:28:17 PM",
      ],
      ["2015-02-07T13:28:17-05:00", undefined, "2/7/15, 6:28 PM"],
      [
        "2015-02-07T13:28:17-05:00",
        { timeStyle: "full" },
        "2/7/15, 6:28:17 PM Coordinated Universal Time",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "full" },
        "Saturday, February 7, 2015 at 6:28 PM",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T13:28:20-05:00" },
        "3 seconds ago",
      ],
    ])("format %p %p", (value, style, expected) => {
      expect(adapter.format(value, style)).toEqual(expected);
    });
  });

  describe("with french locale", () => {
    const adapter = fhirInstantTypeAdapter("fr-CA");

    describe("date", () => {
      expect(
        adapter.format("2015-02-07T13:28:17-05:00", { dateStyle: "full" })
      ).toEqual("samedi 7 février 2015 à 18 h 28");
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirInstantTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
