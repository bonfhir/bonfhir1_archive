/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DropsDrugForm
 */
export const DropsDrugFormCode = {
  /**
   * Drops
   */
  Drops: "DROP",

  /**
   * Nasal Drops
   */
  NasalDrops: "NDROP",

  /**
   * Ophthalmic Drops
   */
  OphthalmicDrops: "OPDROP",

  /**
   * Oral Drops
   */
  OralDrops: "ORDROP",

  /**
   * Otic Drops
   */
  OticDrops: "OTDROP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DropsDrugFormCode =
  typeof DropsDrugFormCode[keyof typeof DropsDrugFormCode];
