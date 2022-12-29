/**
 * Value Set of codes specifying the reason a non-urgent patient presents to the emergency room for treatment instead of a clinic or physican office.
 * http://terminology.hl7.org/ValueSet/v2-0423
 */
export const Hl7VSCaseCategoryCodeCode = {
  /**
   * Doctor's Office Closed
   */
  DoctorsOfficeClosed: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCaseCategoryCodeCode =
  typeof Hl7VSCaseCategoryCodeCode[keyof typeof Hl7VSCaseCategoryCodeCode];
