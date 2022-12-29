/**
 * Value Set of codes specifying a root cause.
 * http://terminology.hl7.org/ValueSet/v2-0914
 */
export const Hl7VSRootCauseCode = {
  /**
   * Analysis Process
   */
  AnalysisProcess: "AP",

  /**
   * Information Management
   */
  InformationManagement: "IM",

  /**
   * Laboratory
   */
  Laboratory: "L",

  /**
   * Not Applicable
   */
  NotApplicable: "NA",

  /**
   * Placer Data
   */
  PlacerData: "PD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRootCauseCode =
  typeof Hl7VSRootCauseCode[keyof typeof Hl7VSRootCauseCode];
