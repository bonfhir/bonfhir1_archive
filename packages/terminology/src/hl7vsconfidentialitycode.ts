/**
 * Value Set of codes that specify the degree to which special confidentiality protection should be applied to the observation.
 * http://terminology.hl7.org/ValueSet/v2-0177
 */
export const Hl7VSConfidentialityCodeCode = {
  /**
   * Very restricted
   */
  Veryrestricted: "V",

  /**
   * Restricted
   */
  Restricted: "R",

  /**
   * Usual control
   */
  Usualcontrol: "U",

  /**
   * Employee
   */
  Employee: "EMP",

  /**
   * Unwed mother
   */
  Unwedmother: "UWM",

  /**
   * Very important person or celebrity
   */
  Veryimportantpersonorcelebrity: "VIP",

  /**
   * Psychiatric patient
   */
  Psychiatricpatient: "PSY",

  /**
   * AIDS patient
   */
  AIDSpatient: "AID",

  /**
   * HIV(+) patient
   */
  HIVpatient: "HIV",

  /**
   * Alcohol/drug treatment patient
   */
  Alcoholdrugtreatmentpatient: "ETH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConfidentialityCodeCode =
  typeof Hl7VSConfidentialityCodeCode[keyof typeof Hl7VSConfidentialityCodeCode];
