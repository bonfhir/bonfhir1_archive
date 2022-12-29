/**
 * Value Set of codes that specify whether the consent has been sought and granted.
 * http://terminology.hl7.org/ValueSet/v2-0498
 */
export const Hl7VSConsentStatusCode = {
  /**
   * Active - Consent has been granted
   */
  ActiveConsenthasbeengranted: "A",

  /**
   * Limited - Consent has been granted with limitations
   */
  LimitedConsenthasbeengrantedwithlimitations: "L",

  /**
   * Refused - Consent has been refused
   */
  RefusedConsenthasbeenrefused: "R",

  /**
   * Pending - Consent has not yet been sought
   */
  PendingConsenthasnotyetbeensought: "P",

  /**
   * Rescinded - Consent was initially granted, but was subsequently revoked or ended.
   */
  RescindedConsentwasinitiallygrantedbutwassubsequentlyrevokedorended: "X",

  /**
   * Bypassed (Consent not sought)
   */
  BypassedConsentnotsought: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConsentStatusCode =
  typeof Hl7VSConsentStatusCode[keyof typeof Hl7VSConsentStatusCode];
