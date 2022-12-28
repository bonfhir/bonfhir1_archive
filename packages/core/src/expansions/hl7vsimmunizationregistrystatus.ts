/**
 * Immunization registry status codes of a patient.  Used in Version 2 messaging in the PD1 segment.
 * http://terminology.hl7.org/ValueSet/v2-0441
 */
export const Hl7VSImmunizationRegistryStatusCode = {
  /**
   * Active
   */
  A: "A",

  /**
   * Inactive
   */
  I: "I",

  /**
   * Inactive - Lost to follow-up (cancel contract)
   */
  L: "L",

  /**
   * Inactive - Moved or gone elsewhere (cancel contract)
   */
  M: "M",

  /**
   * Inactive - Permanently inactive (Do not reactivate or add new entries to the record)
   */
  P: "P",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSImmunizationRegistryStatusCode =
  typeof Hl7VSImmunizationRegistryStatusCode[keyof typeof Hl7VSImmunizationRegistryStatusCode];
