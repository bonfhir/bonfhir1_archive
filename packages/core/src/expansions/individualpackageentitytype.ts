/**
 * Container intended to contain sufficient material for only one use.
 * http://terminology.hl7.org/ValueSet/v3-IndividualPackageEntityType
 */
export const IndividualPackageEntityTypeCode = {
  /**
   * Ampule
   */
  AMP: "AMP",

  /**
   * Minim
   */
  MINIM: "MINIM",

  /**
   * Nebuamp
   */
  NEBAMP: "NEBAMP",

  /**
   * Ovule
   */
  OVUL: "OVUL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IndividualPackageEntityTypeCode =
  typeof IndividualPackageEntityTypeCode[keyof typeof IndividualPackageEntityTypeCode];
