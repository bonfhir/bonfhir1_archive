import {
  FhirDateTime,
  FhirDateTimeFormatOptions,
  fhirDateTimeTypeAdapter,
} from "./dateTime";

describe("fhirDateTimeTypeAdapter", () => {
  // ["en-us", undefined].forEach((locale) => {
  ["en-us"].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirDateTimeTypeAdapter(locale);

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });

      describe("simple parse and format", () => {
        expect(adapter.parse("2015-02-07T13:28:17-05:00")).toEqual({
          date: new Date("2015-02-07T13:28:17-05:00"),
          flavour: "full",
          year: 2015,
          month: 2,
          day: 7,
          time: "13:28:17-05:00",
        });

        expect(adapter.format("2015-02-07T13:28:17+05:00")).toEqual(
          "2/7/15, 8:28 AM"
        );
      });
    });
  });

  describe("invalid date times", () => {
    const adapter = fhirDateTimeTypeAdapter();

    it.each([
      "2015-02-07T13", // invalid time
      "2015-02-07T", // invalid time
      "13:28:17-05:00", // no date
      "T13:28:17-05:00", // no date
      "2015-02-07T13:28:17", // no timezone
      "2015-02-07T13:28:17-", // no timezone
      "2015-02-07T13:28:17+", // no timezone
    ])("format %p", (value) => {
      expect(() => adapter.format(value)).toThrowError(
        /Value does not match the fhir dateTime format.*/
      );
    });
  });

  describe("complex dates", () => {
    const adapter = fhirDateTimeTypeAdapter();

    it.each(<Array<[string, Partial<FhirDateTime>]>>[
      [
        "2015-02-07T13:28:17-05:00",
        {
          date: new Date("2015-02-07T13:28:17-05:00"),
          flavour: "full",
          year: 2015,
          month: 2,
          day: 7,
          time: "13:28:17-05:00",
        },
      ],
      [
        "2017-11-21T00:00:00.000Z",
        {
          date: new Date("2017-11-21T00:00:00.000Z"),
          flavour: "full",
          year: 2017,
          month: 11,
          day: 21,
          time: "00:00:00.000Z",
        },
      ],
      [
        "2023-01-01",
        {
          date: new Date(2023, 0, 1),
          flavour: "year-month-day",
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
      Array<
        [string | FhirDateTime, FhirDateTimeFormatOptions | undefined, string]
      >
    >[
      ["2023", undefined, "2023"],
      ["2023-02", undefined, "2023"],
      ["2023-02-08", undefined, "2/8/2023"],
      ["2023-02-08", { dateStyle: "full" }, "Wednesday, February 8, 2023"],
      ["2023-02-08", { dateStyle: "medium" }, "Feb 8, 2023"],
      ["2023-02-08", { dateStyle: "short" }, "2/8/23"],
      [
        "2023-02-08",
        { dateStyle: "relative", relativeTo: "2023-02-09" },
        "yesterday",
      ],
      ["2023-02", { dateStyle: "medium" }, "Feb 2023"],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "long", timeStyle: "medium" },
        "February 7, 2015 at 6:28:17 PM",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "medium", timeStyle: "long" },
        "Feb 7, 2015, 6:28:17 PM UTC",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "medium", timeStyle: "medium" },
        "Feb 7, 2015, 6:28:17 PM",
      ],
      ["2015-02-07T13:28:17-05:00", undefined, "2/7/15, 6:28 PM"],
      [
        "2015-02-07T13:28:17-05:00",
        { timeStyle: "full" },
        "2/7/15, 6:28:17 PM Coordinated Universal Time",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "full" },
        "Saturday, February 7, 2015 at 6:28 PM",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T13:28:17-05:00" },
        "now",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T13:28:20-05:00" },
        "3 seconds ago",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T13:29:20-05:00" },
        "1 minute ago",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T14:29:20-05:00" },
        "1 hour ago",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-08T14:29:20Z" },
        "20 hours ago",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T13:25:20-05:00" },
        "in 3 minutes",
      ],
      [
        "2015-02-07T13:28:17-05:00",
        { dateStyle: "relative", relativeTo: "2015-02-07T10:25:20-05:00" },
        "in 4 hours",
      ],
    ])("format %p %p", (value, style, expected) => {
      expect(adapter.format(value, style)).toEqual(expected);
    });
  });

  describe("with french locale", () => {
    const adapter = fhirDateTimeTypeAdapter("fr-CA");

    describe("date", () => {
      expect(
        adapter.format("2015-02-07T13:28:17-05:00", { dateStyle: "full" })
      ).toEqual("samedi 7 février 2015 à 18 h 28");
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirDateTimeTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
