/**
 * Concepts regarding the handling of a result.
 * http://terminology.hl7.org/ValueSet/v2-0507
 */
export const Hl7VSObservationResultHandlingCode = {
  /**
   * Film-with-patient
   */
  Filmwithpatient: "F",

  /**
   * Notify provider when ready
   */
  Notifyproviderwhenready: "N",

  /**
   * Alert provider when abnormal
   */
  Alertproviderwhenabnormal: "A",

  /**
   * Copies requested
   */
  Copiesrequested: "CC",

  /**
   * Blind copy
   */
  Blindcopy: "BCC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSObservationResultHandlingCode =
  typeof Hl7VSObservationResultHandlingCode[keyof typeof Hl7VSObservationResultHandlingCode];
