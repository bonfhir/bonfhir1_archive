/**
 * Value Set of codes that describes the status of product evaluation.
 * http://terminology.hl7.org/ValueSet/v2-0247
 */
export const Hl7VSStartOfEvaluationCode = {
  /**
   * Evaluation completed
   */
  Evaluationcompleted: "Y",

  /**
   * Evaluation in progress
   */
  Evaluationinprogress: "P",

  /**
   * Problem already known, no evaluation necessary
   */
  Problemalreadyknownnoevaluationnecessary: "K",

  /**
   * Product not made by company
   */
  Productnotmadebycompany: "X",

  /**
   * Evaluation anticipated, but not yet begun
   */
  Evaluationanticipatedbutnotyetbegun: "A",

  /**
   * Product discarded -- unable to follow up
   */
  Productdiscardedunabletofollowup: "D",

  /**
   * Product received in condition which made analysis impossible
   */
  Productreceivedinconditionwhichmadeanalysisimpossible: "C",

  /**
   * Product remains implanted -- unable to follow up
   */
  Productremainsimplantedunabletofollowup: "I",

  /**
   * Product unavailable for follow up investigation
   */
  Productunavailableforfollowupinvestigation: "U",

  /**
   * Product under quarantine -- unable to follow up
   */
  Productunderquarantineunabletofollowup: "Q",

  /**
   * Product under recall/corrective action
   */
  Productunderrecallcorrectiveaction: "R",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStartOfEvaluationCode =
  typeof Hl7VSStartOfEvaluationCode[keyof typeof Hl7VSStartOfEvaluationCode];
