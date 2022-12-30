/**
 * A wad of absorbent material usually wound around one end of a small stick and used for applying medication or for removing material from an area.
 * http://terminology.hl7.org/ValueSet/v3-SwabDrugForm
 */
export const SwabDrugFormCode = {
  /**
   * Swab
   */
  SWAB: "SWAB",

  /**
   * Medicated swab
   */
  MEDSWAB: "MEDSWAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SwabDrugFormCode =
  typeof SwabDrugFormCode[keyof typeof SwabDrugFormCode];
