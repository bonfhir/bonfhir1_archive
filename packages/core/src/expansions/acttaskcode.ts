/**
 * **Description:** A task or action that a user may perform in a clinical information system.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskCode
 */
export const ActTaskCodeCode = {
  /**
   * ActTaskCode
   */
  _ActTaskCode: "_ActTaskCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskCodeCode =
  typeof ActTaskCodeCode[keyof typeof ActTaskCodeCode];
