import { FhirTime, FhirTimeFormatOptions, fhirTimeTypeAdapter } from "./time";

describe("fhirTimeTypeAdapter", () => {
  ["en-us", undefined].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = fhirTimeTypeAdapter(locale);

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });

      describe("parse", () => {
        expect(adapter.parse("18:30:25")).toEqual("18:30:25");
      });

      describe("format", () => {
        it.each(<
          Array<[string | FhirTime, FhirTimeFormatOptions | undefined, string]>
        >[
          ["18:30:25.123", undefined, "6:30 PM"],
          [
            "18:30:25.123",
            { timeStyle: "full" },
            "6:30:25 PM Coordinated Universal Time",
          ],
          ["18:30:25.123", { timeStyle: "short" }, "6:30 PM"],
          ["18:30:25", { timeStyle: "medium" }, "6:30:25 PM"],
        ])("format %p", (value, style, expected) => {
          expect(adapter.format(value, style)).toEqual(expected);
        });
      });
    });
  });

  describe("with french locale", () => {
    const adapter = fhirTimeTypeAdapter("fr-CA");

    describe("time", () => {
      const time = "18:30:25.123";
      const expected = "18 h 30 min 25 s temps universel coordonné";
      expect(adapter.format(time, { timeStyle: "full" })).toEqual(expected);
    });
  });

  describe("invalid times", () => {
    const adapter = fhirTimeTypeAdapter();

    // FHIR time shall have no date and no timezone
    it.each([
      "2015-02-07T13", // invalid time
      "2015-02-07T", // invalid time
      "13:28:17-05:00", // timezone present
      "T13:28:17-05:00", // timezone present
      "2015-02-07T13:28:17", // date present
    ])("format %p", (value) => {
      expect(() => adapter.format(value)).toThrowError(
        /Value does not match the fhir time format.*/
      );
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => fhirTimeTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });
});
