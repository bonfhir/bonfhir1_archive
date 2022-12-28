/**
 * Value Set of codes that specify the relevance of this particular procedure for the diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0763
 */
export const Hl7VSDrgProcedureRelevanceCode = {
  /**
   * Neither operation relevant nor non-operation relevant procedure
   */
  "0": "0",

  /**
   * Operation relevant procedure
   */
  "1": "1",

  /**
   * Non-operation relevant procedure
   */
  "2": "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgProcedureRelevanceCode =
  typeof Hl7VSDrgProcedureRelevanceCode[keyof typeof Hl7VSDrgProcedureRelevanceCode];
