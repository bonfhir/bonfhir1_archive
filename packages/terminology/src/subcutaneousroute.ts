/**
 * Subcutaneous
 * http://terminology.hl7.org/ValueSet/v3-SubcutaneousRoute
 */
export const SubcutaneousRouteCode = {
  /**
   * Implantation, subcutaneous
   */
  SQIMPLNT: "SQIMPLNT",

  /**
   * Infusion, subcutaneous
   */
  SQINFUS: "SQINFUS",

  /**
   * Injection, insulin pump
   */
  IPUMPINJ: "IPUMPINJ",

  /**
   * Injection, subcutaneous
   */
  SQ: "SQ",

  /**
   * Insertion, subcutaneous, surgical
   */
  SQSURGINS: "SQSURGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubcutaneousRouteCode =
  typeof SubcutaneousRouteCode[keyof typeof SubcutaneousRouteCode];
