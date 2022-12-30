/**
 * V2 Table 0971 Version Master (Online Verification Result Error Code)
 * http://terminology.hl7.org/ValueSet/v2-0971
 */
export const Hl7VSOnlineVerificationResultErrorCodesCode = {
  /**
   * Update technically not possible
   */
  "1": "1",

  /**
   * Invalid Authentification certificate
   */
  "2": "2",

  /**
   * Online verification technically not possible
   */
  "3": "3",

  /**
   * Update technically not possible due to offline time exceeded
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOnlineVerificationResultErrorCodesCode =
  typeof Hl7VSOnlineVerificationResultErrorCodesCode[keyof typeof Hl7VSOnlineVerificationResultErrorCodesCode];
