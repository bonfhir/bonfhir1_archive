/**
 * Value Set of codes that specify types of observations to enable systems to distinguish between observations sent along with an order, versus observations sent as the result to an order.
 * http://terminology.hl7.org/ValueSet/v2-0936
 */
export const Hl7VSVSObservationTypeCode = {
  /**
   * Question
   */
  Question: "QST",

  /**
   * Result
   */
  Result: "RSLT",

  /**
   * Supporting Clinical Information
   */
  SupportingClinicalInformation: "SCI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSObservationTypeCode =
  typeof Hl7VSVSObservationTypeCode[keyof typeof Hl7VSVSObservationTypeCode];
