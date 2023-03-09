import { FhirDataTypeAdapter } from "../data-type-adapter";
import { utcNow } from "../date";
import { fhirDateRegexpFragment } from "./helpers/dateTimeRegexp";

/**
 * A date, or partial date (e.g. just year or year + month) as used in human communication.
 *
 * @see https://hl7.org/fhir/datatypes.html#date
 */

export type FhirDateFormatOptions =
  | {
      dateStyle?: "full" | "long" | "medium" | "short" | null | undefined;
    }
  | {
      dateStyle: "relative";
      relativeStyle?: "long" | "short" | null | undefined;
      /** From when the relative computation happen - defaults to now. */
      relativeTo?: string | number | Date | null | undefined;
    };

export interface FhirDateTypeAdapter {
  locale?: FhirDataTypeAdapter["locale"];

  /**
   * Parse a FHIR date
   *
   * @see https://hl7.org/fhir/datatypes.html
   */
  parse(value: string | null | undefined): FhirDate | undefined;

  /**
   * Format a FHIR date
   *
   * @see https://hl7.org/fhir/datatypes.html
   */
  format(
    value: FhirDate | string | null | undefined,
    options?: FhirDateFormatOptions | null | undefined
  ): string;
}

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

const fhirDateRegexp = new RegExp(`^${fhirDateRegexpFragment}$`);

/**
 * Return a {@link FhirDateTypeAdapter} that uses the [`Intl` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 * (ECMAScript Internationalization API)
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirDateTypeAdapter(
  locale?: string | undefined
): FhirDateTypeAdapter {
  // JIT locale check
  Intl.DateTimeFormat(locale);

  return {
    locale,
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
      };
    },

    format(value, options) {
      const fhirDate = typeof value === "string" ? this.parse(value) : value;

      if (!fhirDate) return "";

      const intlOptions: Intl.DateTimeFormatOptions = {
        timeZone: "UTC",
      };

      switch (fhirDate.flavour) {
        case "year":
          intlOptions.year = "numeric";
          break;
        case "year-month":
          intlOptions.year = "numeric";
          intlOptions.month = convertDateStyleToMonthStyle(options?.dateStyle);
          break;
        case "full":
          if (options?.dateStyle === "relative") {
            return formatRelativeDate(
              locale,
              fhirDate.date,
              options.relativeTo,
              options.relativeStyle
            );
          }
          intlOptions.dateStyle = options?.dateStyle || undefined;
          break;
        default:
          throw new Error(`Unknown date flavour ${fhirDate.flavour}`);
      }

      return new Intl.DateTimeFormat(locale, intlOptions).format(fhirDate.date);
    },
  };
}

function convertDateStyleToMonthStyle(
  style: FhirDateFormatOptions["dateStyle"] | null | undefined
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

/**
 * @see https://momentjs.com/docs/#/displaying/fromnow/
 * @see https://momentjs.com/docs/#/displaying/tonow/
 */
function formatRelativeDate(
  locale: string | undefined,
  value: Date,
  relativeTo: string | number | Date | null | undefined,
  relativeStyle: "long" | "short" | null | undefined
) {
  const relativeToDate = relativeTo ? new Date(relativeTo) : utcNow();
  const relative = new Intl.RelativeTimeFormat(locale, {
    style: relativeStyle ?? undefined,
    numeric: "auto",
  });

  if (
    value.getFullYear() === relativeToDate.getFullYear() &&
    value.getMonth() === relativeToDate.getMonth() &&
    value.getDate() === relativeToDate.getDate()
  ) {
    return relative.format(0, "day");
  }

  const diffSec = Math.floor(
    (relativeToDate.getTime() - value.getTime()) / 1000
  );

  // from now
  if (diffSec >= 0) {
    if (diffSec < 126000) {
      return relative.format(-1, "day");
    } else if (diffSec < 2160000) {
      return relative.format(-Math.floor(diffSec / 86400), "days");
    } else if (diffSec < 3888000) {
      return relative.format(-1, "month");
    } else if (diffSec < 27561600) {
      const monthDiff = relativeToDate.getMonth() - value.getMonth();
      const yearDiff = relativeToDate.getFullYear() - value.getFullYear();
      return relative.format(-(monthDiff + yearDiff * 12), "months");
    } else if (diffSec < 47260800) {
      return relative.format(-1, "year");
    }

    return relative.format(-Math.floor(diffSec / 31104000), "years");
  }

  // in now
  if (diffSec > -126000) {
    return relative.format(1, "day");
  } else if (diffSec > -2160000) {
    return relative.format(-Math.floor(diffSec / 86400), "days");
  } else if (diffSec > -3888000) {
    return relative.format(1, "month");
  } else if (diffSec > -27561600) {
    const monthDiff = relativeToDate.getMonth() - value.getMonth();
    const yearDiff = relativeToDate.getFullYear() - value.getFullYear();
    return relative.format(-(monthDiff + yearDiff * 12), "months");
  } else if (diffSec > -47260800) {
    return relative.format(1, "year");
  }

  return relative.format(-Math.floor(diffSec / 31104000), "years");
}
