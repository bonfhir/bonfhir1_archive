/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tsimshianic
 */
export const TsimshianicCode = {
  /**
   * Coast Tsimshain
   */
  CoastTsimshain: "x-TSI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TsimshianicCode =
  typeof TsimshianicCode[keyof typeof TsimshianicCode];
