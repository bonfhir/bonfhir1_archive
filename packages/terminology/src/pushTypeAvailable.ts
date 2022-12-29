/**
 * Type of alerts/updates the primary source can send
 * http://terminology.hl7.org/ValueSet/verificationresult-push-type-available
 */
export const Push_type_availableCode = {
  /**
   * Specific requested changes
   */
  Specificrequestedchanges: "specific",

  /**
   * Any changes
   */
  Anychanges: "any",

  /**
   * As defined by source
   */
  Asdefinedbysource: "source",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Push_type_availableCode =
  typeof Push_type_availableCode[keyof typeof Push_type_availableCode];
