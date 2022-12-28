/**
 * A semisolid dosage form containing one or more drug substances dissolved or dispersed in a suitable base; more recently, the term has been restricted to products consisting of oil-in-water emulsions or aqueous microcrystalline dispersions of long chain fatty acids or alcohols that are water washable and more cosmetically and aesthetically acceptable.
 * http://terminology.hl7.org/ValueSet/v3-CreamDrugForm
 */
export const CreamDrugFormCode = {
  /**
   * Cream
   */
  CRM: "CRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CreamDrugFormCode =
  typeof CreamDrugFormCode[keyof typeof CreamDrugFormCode];
