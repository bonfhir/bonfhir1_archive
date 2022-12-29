import { MeasureReport } from "fhir/r4";

export const buildMeasureReport = (
  resource: Omit<MeasureReport, "resourceType">
) => ({
  ...resource,
  resourceType: "MeasureReport",
});
