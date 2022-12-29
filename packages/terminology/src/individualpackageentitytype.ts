/**
 * Container intended to contain sufficient material for only one use.
 * http://terminology.hl7.org/ValueSet/v3-IndividualPackageEntityType
 */
export const IndividualPackageEntityTypeCode = {
  /**
   * Ampule
   */
  Ampule: "AMP",

  /**
   * Minim
   */
  Minim: "MINIM",

  /**
   * Nebuamp
   */
  Nebuamp: "NEBAMP",

  /**
   * Ovule
   */
  Ovule: "OVUL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IndividualPackageEntityTypeCode =
  typeof IndividualPackageEntityTypeCode[keyof typeof IndividualPackageEntityTypeCode];
