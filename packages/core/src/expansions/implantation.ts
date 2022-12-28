/**
 * Implantation
 * http://terminology.hl7.org/ValueSet/v3-Implantation
 */
export const ImplantationCode = {
  /**
   * Implantation, intradermal
   */
  IDIMPLNT: "IDIMPLNT",

  /**
   * Implantation, intravitreal
   */
  IVITIMPLNT: "IVITIMPLNT",

  /**
   * Implantation, subcutaneous
   */
  SQIMPLNT: "SQIMPLNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImplantationCode =
  typeof ImplantationCode[keyof typeof ImplantationCode];
