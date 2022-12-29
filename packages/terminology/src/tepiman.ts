/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tepiman
 */
export const TepimanCode = {
  /**
   * Papago-Pima
   */
  PapagoPima: "x-PAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TepimanCode = typeof TepimanCode[keyof typeof TepimanCode];
