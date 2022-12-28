/**
 * Value Set of codes that specify the type of dispensing event that occurred.
 * http://terminology.hl7.org/ValueSet/v2-0484
 */
export const Hl7VSDispenseTypeCode = {
  /**
   * Trial Quantity Balance
   */
  B: "B",

  /**
   * Compassionate Fill
   */
  C: "C",

  /**
   * New/Renew - Full Fill
   */
  N: "N",

  /**
   * New/Renew - Part Fill
   */
  P: "P",

  /**
   * Refill - Part Fill
   */
  Q: "Q",

  /**
   * Refill - Full Fill
   */
  R: "R",

  /**
   * Manufacturer Sample
   */
  S: "S",

  /**
   * Trial Quantity
   */
  T: "T",

  /**
   * Non-Prescription Fill
   */
  Z: "Z",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDispenseTypeCode =
  typeof Hl7VSDispenseTypeCode[keyof typeof Hl7VSDispenseTypeCode];
