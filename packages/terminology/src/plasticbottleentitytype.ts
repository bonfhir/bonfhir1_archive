/**
 * A bottle made of plastic
 * http://terminology.hl7.org/ValueSet/v3-PlasticBottleEntityType
 */
export const PlasticBottleEntityTypeCode = {
  /**
   * Plastic Bottle
   */
  PlasticBottle: "BOTP",

  /**
   * Polyethylene Bottle
   */
  PolyethyleneBottle: "BOTPLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlasticBottleEntityTypeCode =
  typeof PlasticBottleEntityTypeCode[keyof typeof PlasticBottleEntityTypeCode];
