/**
 * Indicates the form in which the drug product should be administered.

This element only needs to be specified when (a) the form in which the drug is measured for dispensing differs from the form in which the drug is administered; and (b) the form in which the quantity of the administered drug being administered is not expressed as a discrete measured mass or volume.*Usage:*
 * http://terminology.hl7.org/ValueSet/v3-AdministrableDrugForm
 */
export const AdministrableDrugFormCode = {
  /**
   * Applicatorful
   */
  Applicatorful: "APPFUL",

  /**
   * Puff
   */
  Puff: "PUFF",

  /**
   * Scoops
   */
  Scoops: "SCOOP",

  /**
   * Sprays
   */
  Sprays: "SPRY",

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
export type AdministrableDrugFormCode =
  typeof AdministrableDrugFormCode[keyof typeof AdministrableDrugFormCode];
