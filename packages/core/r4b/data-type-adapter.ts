/**
 * This is used to manipulate FHIR data types, both parsing values and formatting them as localized strings.
 *
 * @see https://hl7.org/fhir/datatypes.html
 */
export interface FhirDataTypeAdapter {
  /**
   * A date, or partial date (e.g. just year or year + month) as used in human communication.
   *
   * @see https://hl7.org/fhir/datatypes.html#date
   */
  date: {
    /**
     * Parse a FHIR date
     *
     * @see https://hl7.org/fhir/datatypes.html
     */
    parse(value: null | undefined): undefined;
    parse(value: string): FhirDate;
    parse(value: string | null | undefined): FhirDate | undefined;

    format(
      value: FhirDate | string | null | undefined,
      style?: DateStyle | null | undefined
    ): string;
  };
}

export type DateStyle = "full" | "long" | "medium" | "short";

/**
 * A parsed FHIR date
 *
 * @see https://hl7.org/fhir/datatypes.html#date
 */
export interface FhirDate {
  /**
   * The date as a Javascript Date. Only the date portion is significant, you must ignore the time.
   * May be inaccurate if the original value was missing day or month information.
   */
  date: Date;

  /**
   * The original flavour - indicates if it only had year, year-month, or was a complete date.
   */
  flavour: "year" | "year-month" | "full";

  year: number;

  /**
   * The month number, **starting at 1**
   * Be careful, as the Javascript Date object starts month at 0 :-(.
   */
  month: number | undefined;

  /**
   * The day number, **starting at 1**
   */
  day: number | undefined;
}

const fhirDateRegexp = new RegExp(
  "^(?<year>[0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)" +
    "(-(?<month>0[1-9]|1[0-2])" +
    "(-(?<day>0[1-9]|[1-2][0-9]|3[0-1]))?)?$"
);

/**
 * Return a {@link FhirDataTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function intlFhirDataTypeAdapter(
  locale: string | undefined
): FhirDataTypeAdapter {
  return {
    date: {
      parse(value) {
        if (!value?.trim()) {
          return undefined;
        }

        const matchingData = value.trim().match(fhirDateRegexp)?.groups;
        if (!matchingData?.year)
          throw new Error(
            "Value does not match the fhir date format as described in `https://hl7.org/fhir/datatypes.html#date'"
          );

        const { year, month, day } = matchingData;
        const yearNumber = parseInt(year);
        const monthNumber = month ? parseInt(month) : undefined;
        const dayNumber = day ? parseInt(day) : undefined;

        return {
          date: new Date(
            yearNumber,
            monthNumber ? monthNumber - 1 : 0,
            dayNumber || 1
          ),
          flavour: day ? "full" : month ? "year-month" : "year",
          year: yearNumber,
          month: monthNumber,
          day: dayNumber,
          // This feels like a bug in TypeScript
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;
      },

      format(value, style) {
        if (!value) {
          return "";
        }

        const fhirDate = typeof value === "string" ? this.parse(value) : value;

        switch (fhirDate.flavour) {
          case "year":
            return new Intl.DateTimeFormat(locale, { year: "numeric" }).format(
              fhirDate.date
            );
          case "year-month":
            return new Intl.DateTimeFormat(locale, {
              year: "numeric",
              month: convertDateStyleToMonthStyle(style),
            }).format(fhirDate.date);
          case "full":
            return new Intl.DateTimeFormat(locale, {
              dateStyle: style || undefined,
            }).format(fhirDate.date);
          default:
            throw new Error(`Unknown date flavour ${fhirDate.flavour}`);
        }
      },
    },
  };
}

function convertDateStyleToMonthStyle(
  style: DateStyle | null | undefined
): "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined {
  switch (style) {
    case "full":
    case "long":
      return "long";
    case "medium":
      return "short";
    case "short":
      return "2-digit";
    default:
      return undefined;
  }
}