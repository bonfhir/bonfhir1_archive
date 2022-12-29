/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InuitInupiaq
 */
export const InuitInupiaqCode = {
  /**
   * North Alaskan Inuktitut
   */
  NorthAlaskanInuktitut: "x-ESI",

  /**
   * Northwest Alaska Inuktitut
   */
  NorthwestAlaskaInuktitut: "x-ESK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InuitInupiaqCode =
  typeof InuitInupiaqCode[keyof typeof InuitInupiaqCode];
