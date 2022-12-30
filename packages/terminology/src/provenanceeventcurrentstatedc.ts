/**
 * Specifies the state change of a target Act using DocuymentCompletion codes, from its previous state as a predecessor Act.

For example, if the target Act is the result of a predecessor Act being "obsoleted" and replaced with the target Act, the source ProvenanceEventCurrentState Act code would be "obsoleted".
 * http://terminology.hl7.org/ValueSet/v3-ProvenanceEventCurrentState-DC
 */
export const ProvenanceEventCurrentStateDCCode = {
  /**
   * authenticated
   */
  AU: "AU",

  /**
   * dictated
   */
  DI: "DI",

  /**
   * documented
   */
  DO: "DO",

  /**
   * legally authenticated
   */
  LA: "LA",

  /**
   * unsigned completed document
   */
  UC: "UC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceEventCurrentStateDCCode =
  typeof ProvenanceEventCurrentStateDCCode[keyof typeof ProvenanceEventCurrentStateDCCode];
