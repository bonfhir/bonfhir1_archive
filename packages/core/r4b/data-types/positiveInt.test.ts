import {
  FhirPositiveIntFormatOptions,
  fhirPositiveIntTypeAdapter,
  fhirUnsignedIntTypeAdapter,
} from "./positiveInt";

(
  [
    [fhirPositiveIntTypeAdapter, "fhirPositiveIntTypeAdapter"],
    [fhirUnsignedIntTypeAdapter, "fhirUnsignedIntTypeAdapter"],
  ] as const
).map(([adapterFunction, name]) => {
  describe(`${name}`, () => {
    ["en-us", undefined].forEach((locale) => {
      describe(`with ${locale} as locale`, () => {
        const adapter = adapterFunction(locale);

        it("exposes the locale", () => {
          expect(adapter.locale).toEqual(locale);
        });

        describe("parse", () => {
          it.each([
            ["12", 12],
            [42, 42],
            [undefined, undefined],
          ])("parse %p", (value, expected) => {
            expect(adapter.parse(value)).toEqual(expected);
          });
        });

        describe("format", () => {
          it.each(<
            Array<
              [
                string | undefined,
                FhirPositiveIntFormatOptions | undefined,
                string
              ]
            >
          >[
            ["123", undefined, "123"],
            [987654321, { notation: "compact-short" }, "988M"],
            [987654321, { notation: "compact-long" }, "988 million"],
            [987654321, { notation: "scientific" }, "9.877E8"],
            [987654321, { notation: "engineering" }, "987.654E6"],
            [123, undefined, "123"],
            [undefined, undefined, ""],
          ])("format %p", (value, options, expected) => {
            expect(adapter.format(value, options)).toEqual(expected);
          });
        });

        describe("given invalid values", () => {
          it.each([0.1, "001", -1, -1.1, "bonjour"])(
            "throw an error for `%p'",
            (invalidValue) => {
              expect(() => adapter.format(invalidValue)).toThrowError(
                /.*does not match the fhir positiveInt format as described.*/
              );
              expect(() => adapter.parse(invalidValue)).toThrowError(
                /.*does not match the fhir positiveInt format as described.*/
              );
            }
          );
        });
      });
    });

    describe("with chinese locale", () => {
      const adapter = adapterFunction("zh-Hans-CN-u-nu-hanidec");

      describe("format", () => {
        it.each([
          ["123456", "一二三,四五六"],
          [45, "四五"],
        ])("format %p", (value, expected) => {
          expect(adapter.format(value)).toEqual(expected);
        });
      });
    });

    describe("with an unknown locale", () => {
      it("raises an error", () => {
        expect(() => adapterFunction("nope")).toThrowError(
          "Incorrect locale information provided"
        );
      });
    });
  });
});
