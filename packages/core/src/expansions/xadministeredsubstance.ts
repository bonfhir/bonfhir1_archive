/**
 * A type of Manufactured Material that is administered to a living subject, either by a healthcare professional or auto-administered, within a healthcare context.
 * http://terminology.hl7.org/ValueSet/v3-xAdministeredSubstance
 */
export const XAdministeredSubstanceCode = {
  /**
   * Vaccine
   */
  VCCNE: "VCCNE",

  /**
   * Blood Product
   */
  BLDPRD: "BLDPRD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XAdministeredSubstanceCode =
  typeof XAdministeredSubstanceCode[keyof typeof XAdministeredSubstanceCode];
