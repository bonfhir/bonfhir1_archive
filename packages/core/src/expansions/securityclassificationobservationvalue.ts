/**
 * Security observation values used to indicate security classification metadata.
 * http://terminology.hl7.org/ValueSet/v3-SecurityClassificationObservationValue
 */
export const SecurityClassificationObservationValueCode = {
  /**
   * low
   */
  L: "L",

  /**
   * moderate
   */
  M: "M",

  /**
   * normal
   */
  N: "N",

  /**
   * restricted
   */
  R: "R",

  /**
   * unrestricted
   */
  U: "U",

  /**
   * very restricted
   */
  V: "V",

  /**
   * Confidentiality
   */
  _Confidentiality: "_Confidentiality",

  /**
   * ConfidentialityByAccessKind
   */
  _ConfidentialityByAccessKind: "_ConfidentialityByAccessKind",

  /**
   * business
   */
  B: "B",

  /**
   * clinician
   */
  D: "D",

  /**
   * individual
   */
  I: "I",

  /**
   * ConfidentialityByInfoType
   */
  _ConfidentialityByInfoType: "_ConfidentialityByInfoType",

  /**
   * substance abuse related
   */
  ETH: "ETH",

  /**
   * HIV related
   */
  HIV: "HIV",

  /**
   * psychiatry relate
   */
  PSY: "PSY",

  /**
   * sexual and domestic violence related
   */
  SDV: "SDV",

  /**
   * ConfidentialityModifiers
   */
  _ConfidentialityModifiers: "_ConfidentialityModifiers",

  /**
   * celebrity
   */
  C: "C",

  /**
   * sensitive
   */
  S: "S",

  /**
   * taboo
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityClassificationObservationValueCode =
  typeof SecurityClassificationObservationValueCode[keyof typeof SecurityClassificationObservationValueCode];
