/**
 * Immunization registry status codes of a patient.  Used in Version 2 messaging in the PD1 segment.
 * http://terminology.hl7.org/ValueSet/v2-0441
 */
export const Hl7VSImmunizationRegistryStatusCode = {
  /**
   * Active
   */
  Active: "A",

  /**
   * Inactive
   */
  Inactive: "I",

  /**
   * Inactive - Lost to follow-up (cancel contract)
   */
  InactiveLosttofollowupcancelcontract: "L",

  /**
   * Inactive - Moved or gone elsewhere (cancel contract)
   */
  InactiveMovedorgoneelsewherecancelcontract: "M",

  /**
   * Inactive - Permanently inactive (Do not reactivate or add new entries to the record)
   */
  InactivePermanentlyinactiveDonotreactivateoraddnewentriestotherecord: "P",

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
export type Hl7VSImmunizationRegistryStatusCode =
  typeof Hl7VSImmunizationRegistryStatusCode[keyof typeof Hl7VSImmunizationRegistryStatusCode];
