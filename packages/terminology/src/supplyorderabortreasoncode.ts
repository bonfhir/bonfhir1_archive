/**
 * **Definition:**A collection of concepts that indicates why the prescription should no longer be allowed to be dispensed (but can still administer what is already being dispensed).
 * http://terminology.hl7.org/ValueSet/v3-SupplyOrderAbortReasonCode
 */
export const SupplyOrderAbortReasonCodeCode = {
  /**
   * supply order abort reason
   */
  supplyorderabortreason: "_SupplyOrderAbortReasonCode",

  /**
   * condition improved
   */
  conditionimproved: "IMPROV",

  /**
   * intolerance
   */
  intolerance: "INTOL",

  /**
   * new strength
   */
  newstrength: "NEWSTR",

  /**
   * new therapy
   */
  newtherapy: "NEWTHER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyOrderAbortReasonCodeCode =
  typeof SupplyOrderAbortReasonCodeCode[keyof typeof SupplyOrderAbortReasonCodeCode];
