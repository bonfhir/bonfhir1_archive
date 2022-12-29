/**
 * **Description:**Concepts representing indications (reasons for clinical action) other than diagnosis and symptoms.
 * http://terminology.hl7.org/ValueSet/v3-ActNonObservationIndicationCode
 */
export const ActNonObservationIndicationCodeCode = {
  /**
   * imaging study requiring contrast
   */
  imagingstudyrequiringcontrast: "IND01",

  /**
   * colonoscopy prep
   */
  colonoscopyprep: "IND02",

  /**
   * prophylaxis
   */
  prophylaxis: "IND03",

  /**
   * surgical prophylaxis
   */
  surgicalprophylaxis: "IND04",

  /**
   * pregnancy prophylaxis
   */
  pregnancyprophylaxis: "IND05",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActNonObservationIndicationCodeCode =
  typeof ActNonObservationIndicationCodeCode[keyof typeof ActNonObservationIndicationCodeCode];
