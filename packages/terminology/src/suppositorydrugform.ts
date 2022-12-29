/**
 * A solid body of various weights and shapes, adapted for introduction into the rectal, vaginal, or urethral orifice of the human body; they usually melt, soften, or dissolve at body temperature.
 * http://terminology.hl7.org/ValueSet/v3-SuppositoryDrugForm
 */
export const SuppositoryDrugFormCode = {
  /**
   * Suppository
   */
  Suppository: "SUPP",

  /**
   * Rectal Suppository
   */
  RectalSuppository: "RECSUPP",

  /**
   * Urethral suppository
   */
  Urethralsuppository: "URETHSUPP",

  /**
   * Vaginal Suppository
   */
  VaginalSuppository: "VAGSUPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SuppositoryDrugFormCode =
  typeof SuppositoryDrugFormCode[keyof typeof SuppositoryDrugFormCode];
