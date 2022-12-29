/**
 * Value Set of codes that specify whether the clergy should be notified.
 * http://terminology.hl7.org/ValueSet/v2-0534
 */
export const Hl7VSNotifyClergyCodeCode = {
  /**
   * Yes
   */
  Yes: "Y",

  /**
   * No
   */
  No: "N",

  /**
   * Last Rites only
   */
  LastRitesonly: "L",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNotifyClergyCodeCode =
  typeof Hl7VSNotifyClergyCodeCode[keyof typeof Hl7VSNotifyClergyCodeCode];
