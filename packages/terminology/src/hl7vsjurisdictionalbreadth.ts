/**
 * Value Set of codes that specify the breadth/extent of the jurisdiction where the qualification is valid.
 * http://terminology.hl7.org/ValueSet/v2-0547
 */
export const Hl7VSJurisdictionalBreadthCode = {
  /**
   * County/Parish
   */
  CountyParish: "C",

  /**
   * State/Province
   */
  StateProvince: "S",

  /**
   * Country
   */
  Country: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSJurisdictionalBreadthCode =
  typeof Hl7VSJurisdictionalBreadthCode[keyof typeof Hl7VSJurisdictionalBreadthCode];
