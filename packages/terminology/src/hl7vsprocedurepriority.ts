/**
 * Value Set of codes specifying a number that identifies the significance or priority of the procedure code.
 * http://terminology.hl7.org/ValueSet/v2-0418
 */
export const Hl7VSProcedurePriorityCode = {
  /**
   * the admitting procedure
   */
  theadmittingprocedure: "0",

  /**
   * the primary procedure
   */
  theprimaryprocedure: "1",

  /**
   * for ranked secondary procedures
   */
  forrankedsecondaryprocedures: "2",

  /**
   *
   */
  "…": "…",

  /**
   * No suggested values defined
   */
  Nosuggestedvaluesdefined: "...",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedurePriorityCode =
  typeof Hl7VSProcedurePriorityCode[keyof typeof Hl7VSProcedurePriorityCode];
