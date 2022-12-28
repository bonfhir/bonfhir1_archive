/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ChiwereWinnebago
 */
export const ChiwereWinnebagoCode = {
  /**
   * Chiwere
   */
  "x-IOW": "x-IOW",

  /**
   * Hocak
   */
  "x-WIN": "x-WIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChiwereWinnebagoCode =
  typeof ChiwereWinnebagoCode[keyof typeof ChiwereWinnebagoCode];
