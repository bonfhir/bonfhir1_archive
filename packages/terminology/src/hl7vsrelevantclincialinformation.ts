/**
 * Value Set of codes that specify additional clinical information about the patient or specimen to report the supporting and/or suspected diagnosis and clinical findings on requests for interpreted diagnostic studies.
 * http://terminology.hl7.org/ValueSet/v2-0916
 */
export const Hl7VSRelevantClincialInformationCode = {
  /**
   * Patient was fasting prior to the procedure.
   */
  F: "F",

  /**
   * The patient indicated they did not fast prior to the procedure.
   */
  NF: "NF",

  /**
   * Not Given - Patient was not asked at the time of the procedure.
   */
  NG: "NG",

  /**
   * Fasting not asked of the patient at time of procedure.
   */
  FNA: "FNA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelevantClincialInformationCode =
  typeof Hl7VSRelevantClincialInformationCode[keyof typeof Hl7VSRelevantClincialInformationCode];
