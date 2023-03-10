export const removeDoubleSpaces = (value: string): string =>
  value.replace(/\s{2,}/g, " ").trim();

import { Period } from "fhir/r4";
import { utcNow } from "../../date";
import { FhirDateTimeTypeAdapter, fhirDateTimeTypeAdapter } from "../dateTime";

let dateTimeAdapter: FhirDateTimeTypeAdapter;

type elementWithPeriod = {
  period?: Period | undefined;
};
export const comparePeriods = (
  element1: elementWithPeriod,
  element2: elementWithPeriod
) => {
  dateTimeAdapter ||= fhirDateTimeTypeAdapter();
  const element1EndDate = dateTimeAdapter.parse(element1?.period?.end);
  const element2EndDate = dateTimeAdapter.parse(element2?.period?.end);

  // sort by period
  if (!element1EndDate && element2EndDate) return -1;
  if (!element2EndDate && element1EndDate) return 1;
  if (element1EndDate && element2EndDate) {
    if (element1EndDate.date > element2EndDate.date) return -1;
    if (element2EndDate.date > element1EndDate.date) return 1;
  }

  return 0;
};

/**
 * @see https://momentjs.com/docs/#/displaying/fromnow/
 * @see https://momentjs.com/docs/#/displaying/tonow/
 */
export function formatRelativeDateTime(
  locale: string | undefined,
  value: Date,
  relativeTo: string | number | Date | null | undefined,
  relativeStyle: "long" | "short" | null | undefined,
  dateOnlyMode = false
) {
  const relativeToDate = relativeTo ? new Date(relativeTo) : utcNow();
  const relative = new Intl.RelativeTimeFormat(locale, {
    style: relativeStyle ?? undefined,
    numeric: "auto",
  });

  if (
    dateOnlyMode &&
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
    if (diffSec < 44) {
      return relative.format(-diffSec, "seconds");
    } else if (diffSec < 89) {
      return relative.format(-1, "minute");
    } else if (diffSec < 2640) {
      return relative.format(-Math.floor(diffSec / 60), "minutes");
    } else if (diffSec < 5340) {
      return relative.format(-1, "hour");
    } else if (diffSec < 75600) {
      return relative.format(-Math.floor(diffSec / 3600), "hours");
    } else if (diffSec < 126000) {
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
  if (diffSec > -44) {
    return relative.format(-diffSec, "seconds");
  } else if (diffSec > -89) {
    return relative.format(-1, "minute");
  } else if (diffSec > -2640) {
    return relative.format(-Math.floor(diffSec / 60), "minutes");
  } else if (diffSec > -5340) {
    return relative.format(-1, "hour");
  } else if (diffSec > -75600) {
    return relative.format(-Math.floor(diffSec / 3600), "hours");
  } else if (diffSec > -126000) {
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
