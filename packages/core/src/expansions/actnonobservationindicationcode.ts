/**
 * **Description:**Concepts representing indications (reasons for clinical action) other than diagnosis and symptoms.
 * http://terminology.hl7.org/ValueSet/v3-ActNonObservationIndicationCode
 */
export const ActNonObservationIndicationCodeCode = {
  /**
   * imaging study requiring contrast
   */
  IND01: "IND01",

  /**
   * colonoscopy prep
   */
  IND02: "IND02",

  /**
   * prophylaxis
   */
  IND03: "IND03",

  /**
   * surgical prophylaxis
   */
  IND04: "IND04",

  /**
   * pregnancy prophylaxis
   */
  IND05: "IND05",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActNonObservationIndicationCodeCode =
  typeof ActNonObservationIndicationCodeCode[keyof typeof ActNonObservationIndicationCodeCode];
