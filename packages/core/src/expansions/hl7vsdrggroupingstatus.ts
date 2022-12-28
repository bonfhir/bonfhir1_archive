/**
 * Value Set of codes that specify the status of the use of the gender information for diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0749
 */
export const Hl7VSDrgGroupingStatusCode = {
  /**
   * Valid code; not used for grouping
   */
  "0": "0",

  /**
   * Valid code; used for grouping
   */
  "1": "1",

  /**
   * Invalid code; not used for grouping
   */
  "2": "2",

  /**
   * Invalid code; code is relevant for grouping
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgGroupingStatusCode =
  typeof Hl7VSDrgGroupingStatusCode[keyof typeof Hl7VSDrgGroupingStatusCode];
