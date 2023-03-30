import { intlFhirDataTypeAdapter } from "./data-type-adapter";

describe("intlFhirDataTypeAdapter", () => {
  ["en-us", undefined, "fr-CA"].forEach((locale) => {
    describe(`with ${locale} as locale`, () => {
      const adapter = intlFhirDataTypeAdapter(locale);

      it("exposes different adapters", () => {
        // primitive types
        expect(typeof adapter.base64Binary.format).toBe("function");
        expect(typeof adapter.boolean.format).toBe("function");
        expect(typeof adapter.canonical.format).toBe("function");
        expect(typeof adapter.code.format).toBe("function");
        expect(typeof adapter.date.format).toBe("function");
        expect(typeof adapter.dateTime.format).toBe("function");
        expect(typeof adapter.decimal.format).toBe("function");
        expect(typeof adapter.id.format).toBe("function");
        expect(typeof adapter.identifier.format).toBe("function");
        expect(typeof adapter.instant.format).toBe("function");
        expect(typeof adapter.integer.format).toBe("function");
        expect(typeof adapter.markdown.format).toBe("function");
        expect(typeof adapter.oid.format).toBe("function");
        expect(typeof adapter.positiveInt.format).toBe("function");
        expect(typeof adapter.string.format).toBe("function");
        expect(typeof adapter.unsignedInt.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.uri.format).toBe("function");
        expect(typeof adapter.uuid.format).toBe("function");
        // general-purpose types
        expect(typeof adapter.age.format).toBe("function");
        expect(typeof adapter.address.format).toBe("function");
        expect(typeof adapter.codeableConcept.format).toBe("function");
        expect(typeof adapter.coding.format).toBe("function");
        expect(typeof adapter.count.format).toBe("function");
        expect(typeof adapter.contactPoint.format).toBe("function");
        expect(typeof adapter.distance.format).toBe("function");
        expect(typeof adapter.duration.format).toBe("function");
        expect(typeof adapter.humanName.format).toBe("function");
        expect(typeof adapter.money.format).toBe("function");
        expect(typeof adapter.period.format).toBe("function");
        expect(typeof adapter.quantity.format).toBe("function");
        expect(typeof adapter.range.format).toBe("function");
        expect(typeof adapter.ratio.format).toBe("function");
        expect(typeof adapter.ratioRange.format).toBe("function");
        expect(typeof adapter.simpleQuantity.format).toBe("function");
      });

      describe("aliases", () => {
        it("works", () => {
          const base64BinaryTypeAdapter =
            intlFhirDataTypeAdapter("fr-CA").base64Binary;
          const uuidTypeAdapter = intlFhirDataTypeAdapter("en-EN").uuid;

          expect(base64BinaryTypeAdapter.locale).toEqual("fr-CA");
          expect(uuidTypeAdapter.locale).toEqual("en-EN");

          expect(base64BinaryTypeAdapter.format("bonjour")).toEqual("bonjour");
          expect(uuidTypeAdapter.format("123-123-123")).toEqual("123-123-123");
        });
      });

      it("exposes the locale", () => {
        expect(adapter.locale).toEqual(locale);
      });
    });
  });

  describe("with an unknown locale", () => {
    it("raises an error", () => {
      expect(() => intlFhirDataTypeAdapter("nope")).toThrowError(
        "Incorrect locale information provided"
      );
    });
  });

  describe("options", () => {
    it("applies global system labels", () => {
      const adapter = intlFhirDataTypeAdapter("en-us", {
        systemsLabels: { "http://hl7.org/fhir/sid/us-ssn": "SSN (US)" },
      });
      expect(
        adapter.identifier.format({
          system: "http://hl7.org/fhir/sid/us-ssn",
          value: "123456789",
        })
      ).toEqual("SSN (US): 123456789");
    });
  });

  describe("message", () => {
    const adapter = intlFhirDataTypeAdapter("en-us");

    it("format messages", () => {
      expect(adapter.message``).toEqual("");
      expect(adapter.message`this is ${[1, "integer"]} guy.`).toEqual(
        "this is 1 guy."
      );

      expect(
        adapter.message`this is ${[
          "2023-02-02",
          "date",
          { dateStyle: "long" },
        ]} guy.`
      ).toEqual("this is February 2, 2023 guy.");

      expect(
        adapter.message`the cost is ${[
          { currency: "USD", value: 15 },
          "money",
        ]}`
      ).toEqual("the cost is $15.00");
    });
  });
});
