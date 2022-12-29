/**
 * Security observation values used to indicate security classification metadata.
 * http://terminology.hl7.org/ValueSet/v3-SecurityClassificationObservationValue
 */
export const SecurityClassificationObservationValueCode = {
  /**
   * low
   */
  low: "L",

  /**
   * moderate
   */
  moderate: "M",

  /**
   * normal
   */
  normal: "N",

  /**
   * restricted
   */
  restricted: "R",

  /**
   * unrestricted
   */
  unrestricted: "U",

  /**
   * very restricted
   */
  veryrestricted: "V",

  /**
   * Confidentiality
   */
  Confidentiality: "_Confidentiality",

  /**
   * ConfidentialityByAccessKind
   */
  ConfidentialityByAccessKind: "_ConfidentialityByAccessKind",

  /**
   * business
   */
  business: "B",

  /**
   * clinician
   */
  clinician: "D",

  /**
   * individual
   */
  individual: "I",

  /**
   * ConfidentialityByInfoType
   */
  ConfidentialityByInfoType: "_ConfidentialityByInfoType",

  /**
   * substance abuse related
   */
  substanceabuserelated: "ETH",

  /**
   * HIV related
   */
  HIVrelated: "HIV",

  /**
   * psychiatry relate
   */
  psychiatryrelate: "PSY",

  /**
   * sexual and domestic violence related
   */
  sexualanddomesticviolencerelated: "SDV",

  /**
   * ConfidentialityModifiers
   */
  ConfidentialityModifiers: "_ConfidentialityModifiers",

  /**
   * celebrity
   */
  celebrity: "C",

  /**
   * sensitive
   */
  sensitive: "S",

  /**
   * taboo
   */
  taboo: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityClassificationObservationValueCode =
  typeof SecurityClassificationObservationValueCode[keyof typeof SecurityClassificationObservationValueCode];
