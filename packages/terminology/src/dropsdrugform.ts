/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DropsDrugForm
 */
export const DropsDrugFormCode = {
  /**
   * Drops
   */
  DROP: "DROP",

  /**
   * Nasal Drops
   */
  NDROP: "NDROP",

  /**
   * Ophthalmic Drops
   */
  OPDROP: "OPDROP",

  /**
   * Oral Drops
   */
  ORDROP: "ORDROP",

  /**
   * Otic Drops
   */
  OTDROP: "OTDROP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DropsDrugFormCode =
  typeof DropsDrugFormCode[keyof typeof DropsDrugFormCode];
