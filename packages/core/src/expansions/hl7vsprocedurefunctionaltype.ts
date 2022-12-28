/**
 * Value Set of codes that classify a procedure.
 * http://terminology.hl7.org/ValueSet/v2-0230
 */
export const Hl7VSProcedureFunctionalTypeCode = {
  /**
   * Anesthesia
   */
  A: "A",

  /**
   * Procedure for treatment (therapeutic, including operations)
   */
  P: "P",

  /**
   * Invasive procedure not classified elsewhere (e.g., IV, catheter, etc.)
   */
  I: "I",

  /**
   * Diagnostic procedure
   */
  D: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedureFunctionalTypeCode =
  typeof Hl7VSProcedureFunctionalTypeCode[keyof typeof Hl7VSProcedureFunctionalTypeCode];
