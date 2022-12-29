/**
 * Value Set of codes that specify the status of the use of this particular procedure for the diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0761
 */
export const Hl7VSDrgProcedureDeterminationStatusCode = {
  /**
   * Valid code
   */
  Validcode: "0",

  /**
   * Invalid code
   */
  Invalidcode: "1",

  /**
   * Not used
   */
  Notused: "2",

  /**
   * Invalid for this gender
   */
  Invalidforthisgender: "3",

  /**
   * Invalid for this age
   */
  Invalidforthisage: "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgProcedureDeterminationStatusCode =
  typeof Hl7VSDrgProcedureDeterminationStatusCode[keyof typeof Hl7VSDrgProcedureDeterminationStatusCode];
