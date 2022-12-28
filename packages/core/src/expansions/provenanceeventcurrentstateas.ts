/**
 * Specifies the state change of a target Act, using ActStatus codes, from its previous state as a predecessor Act.

For example, if the target Act is the result of a predecessor Act being "obsoleted" and replaced with the target Act, the source ProvenanceEventCurrentState Act code would be "obsoleted".
 * http://terminology.hl7.org/ValueSet/v3-ProvenanceEventCurrentState-AS
 */
export const ProvenanceEventCurrentStateASCode = {
  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * completed
   */
  completed: "completed",

  /**
   * new
   */
  new: "new",

  /**
   * nullified
   */
  nullified: "nullified",

  /**
   * obsolete
   */
  obsolete: "obsolete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceEventCurrentStateASCode =
  typeof ProvenanceEventCurrentStateASCode[keyof typeof ProvenanceEventCurrentStateASCode];
