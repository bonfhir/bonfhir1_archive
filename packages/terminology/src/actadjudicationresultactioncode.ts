/**
 * Actions to be carried out by the recipient of the Adjudication Result information.
 * http://terminology.hl7.org/ValueSet/v3-ActAdjudicationResultActionCode
 */
export const ActAdjudicationResultActionCodeCode = {
  /**
   * Display
   */
  Display: "DISPLAY",

  /**
   * Print on Form
   */
  PrintonForm: "FORM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdjudicationResultActionCodeCode =
  typeof ActAdjudicationResultActionCodeCode[keyof typeof ActAdjudicationResultActionCodeCode];
