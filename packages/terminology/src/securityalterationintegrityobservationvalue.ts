/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityAlterationIntegrityObservationValue
 */
export const SecurityAlterationIntegrityObservationValueCode = {
  /**
   * abstracted
   */
  ABSTRED: "ABSTRED",

  /**
   * aggregated
   */
  AGGRED: "AGGRED",

  /**
   * anonymized
   */
  ANONYED: "ANONYED",

  /**
   * mapped
   */
  MAPPED: "MAPPED",

  /**
   * masked
   */
  MASKED: "MASKED",

  /**
   * pseudonymized
   */
  PSEUDED: "PSEUDED",

  /**
   * redacted
   */
  REDACTED: "REDACTED",

  /**
   * subsetted
   */
  SUBSETTED: "SUBSETTED",

  /**
   * syntactic transform
   */
  SYNTAC: "SYNTAC",

  /**
   * translated
   */
  TRSLT: "TRSLT",

  /**
   * versioned
   */
  VERSIONED: "VERSIONED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityAlterationIntegrityObservationValueCode =
  typeof SecurityAlterationIntegrityObservationValueCode[keyof typeof SecurityAlterationIntegrityObservationValueCode];
