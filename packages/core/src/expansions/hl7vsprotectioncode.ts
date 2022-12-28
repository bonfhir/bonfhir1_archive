/**
 * Value Set of codes that specify that an address needs to be treated with special care or sensitivity.
 * http://terminology.hl7.org/ValueSet/v2-0618
 */
export const Hl7VSProtectionCodeCode = {
  /**
   * Listed
   */
  LI: "LI",

  /**
   * Unlisted (Should not appear in directories)
   */
  UL: "UL",

  /**
   * Unpublished
   */
  UP: "UP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProtectionCodeCode =
  typeof Hl7VSProtectionCodeCode[keyof typeof Hl7VSProtectionCodeCode];
