/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InuitInupiaq
 */
export const InuitInupiaqCode = {
  /**
   * North Alaskan Inuktitut
   */
  "x-ESI": "x-ESI",

  /**
   * Northwest Alaska Inuktitut
   */
  "x-ESK": "x-ESK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InuitInupiaqCode =
  typeof InuitInupiaqCode[keyof typeof InuitInupiaqCode];
