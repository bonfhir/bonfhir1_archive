/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NameLegalUse
 */
export const NameLegalUseCode = {
  /**
   * Legal
   */
  L: "L",

  /**
   * official registry
   */
  OR: "OR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NameLegalUseCode =
  typeof NameLegalUseCode[keyof typeof NameLegalUseCode];
