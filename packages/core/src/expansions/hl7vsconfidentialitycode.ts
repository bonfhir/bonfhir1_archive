/**
 * Value Set of codes that specify the degree to which special confidentiality protection should be applied to the observation.
 * http://terminology.hl7.org/ValueSet/v2-0177
 */
export const Hl7VSConfidentialityCodeCode = {
  /**
   * Very restricted
   */
  V: "V",

  /**
   * Restricted
   */
  R: "R",

  /**
   * Usual control
   */
  U: "U",

  /**
   * Employee
   */
  EMP: "EMP",

  /**
   * Unwed mother
   */
  UWM: "UWM",

  /**
   * Very important person or celebrity
   */
  VIP: "VIP",

  /**
   * Psychiatric patient
   */
  PSY: "PSY",

  /**
   * AIDS patient
   */
  AID: "AID",

  /**
   * HIV(+) patient
   */
  HIV: "HIV",

  /**
   * Alcohol/drug treatment patient
   */
  ETH: "ETH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConfidentialityCodeCode =
  typeof Hl7VSConfidentialityCodeCode[keyof typeof Hl7VSConfidentialityCodeCode];
