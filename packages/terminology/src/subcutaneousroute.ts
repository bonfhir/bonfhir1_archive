/**
 * Subcutaneous
 * http://terminology.hl7.org/ValueSet/v3-SubcutaneousRoute
 */
export const SubcutaneousRouteCode = {
  /**
   * Implantation, subcutaneous
   */
  Implantationsubcutaneous: "SQIMPLNT",

  /**
   * Infusion, subcutaneous
   */
  Infusionsubcutaneous: "SQINFUS",

  /**
   * Injection, insulin pump
   */
  Injectioninsulinpump: "IPUMPINJ",

  /**
   * Injection, subcutaneous
   */
  Injectionsubcutaneous: "SQ",

  /**
   * Insertion, subcutaneous, surgical
   */
  Insertionsubcutaneoussurgical: "SQSURGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubcutaneousRouteCode =
  typeof SubcutaneousRouteCode[keyof typeof SubcutaneousRouteCode];
