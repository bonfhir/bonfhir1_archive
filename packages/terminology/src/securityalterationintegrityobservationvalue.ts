/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityAlterationIntegrityObservationValue
 */
export const SecurityAlterationIntegrityObservationValueCode = {
  /**
   * abstracted
   */
  abstracted: "ABSTRED",

  /**
   * aggregated
   */
  aggregated: "AGGRED",

  /**
   * anonymized
   */
  anonymized: "ANONYED",

  /**
   * mapped
   */
  mapped: "MAPPED",

  /**
   * masked
   */
  masked: "MASKED",

  /**
   * pseudonymized
   */
  pseudonymized: "PSEUDED",

  /**
   * redacted
   */
  redacted: "REDACTED",

  /**
   * subsetted
   */
  subsetted: "SUBSETTED",

  /**
   * syntactic transform
   */
  syntactictransform: "SYNTAC",

  /**
   * translated
   */
  translated: "TRSLT",

  /**
   * versioned
   */
  versioned: "VERSIONED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityAlterationIntegrityObservationValueCode =
  typeof SecurityAlterationIntegrityObservationValueCode[keyof typeof SecurityAlterationIntegrityObservationValueCode];
