export const removeDoubleSpaces = (value: string): string =>
  value.replace(/\s{2,}/g, " ").trim();

import { Period } from "fhir/r4";
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
