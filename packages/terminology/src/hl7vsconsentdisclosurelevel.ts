/**
 * Value Set of codes that specify how much information was disclosed to the subject as part of the informed consent process.
 * http://terminology.hl7.org/ValueSet/v2-0500
 */
export const Hl7VSConsentDisclosureLevelCode = {
  /**
   * Full Disclosure
   */
  F: "F",

  /**
   * Partial Disclosure
   */
  P: "P",

  /**
   * No Disclosure
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConsentDisclosureLevelCode =
  typeof Hl7VSConsentDisclosureLevelCode[keyof typeof Hl7VSConsentDisclosureLevelCode];
