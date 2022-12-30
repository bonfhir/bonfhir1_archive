/**
 * The number of a building, house or lot alongside the street. Also known as "primary street number". This does not number the street but rather the building.
 * http://terminology.hl7.org/ValueSet/v3-BuildingNumber
 */
export const BuildingNumberCode = {
  /**
   * building number
   */
  BNR: "BNR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BuildingNumberCode =
  typeof BuildingNumberCode[keyof typeof BuildingNumberCode];
