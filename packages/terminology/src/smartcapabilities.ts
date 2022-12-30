/**
 * Codes that define what the server is capable of.
 * http://terminology.hl7.org/ValueSet/smart-capabilities
 */
export const SmartCapabilitiesCode = {
  /**
   * EHR Launch Mode
   */
  "launch-ehr": "launch-ehr",

  /**
   * Standalone Launch Mode
   */
  "launch-standalone": "launch-standalone",

  /**
   * Public Client Profile
   */
  "client-public": "client-public",

  /**
   * Confidential Client Profile
   */
  "client-confidential-symmetric": "client-confidential-symmetric",

  /**
   * Supports OpenID Connect
   */
  "sso-openid-connect": "sso-openid-connect",

  /**
   * Allows "Need Patient Banner"
   */
  "context-passthrough-banner": "context-passthrough-banner",

  /**
   * Allows "Smart Style Style"
   */
  "context-passthrough-style": "context-passthrough-style",

  /**
   * Allows "Patient Level Launch Context (EHR)"
   */
  "context-ehr-patient": "context-ehr-patient",

  /**
   * Allows "Encounter Level Launch Context (EHR)"
   */
  "context-ehr-encounter": "context-ehr-encounter",

  /**
   * Allows "Patient Level Launch Context (STANDALONE)"
   */
  "context-standalone-patient": "context-standalone-patient",

  /**
   * Allows "Encounter Level Launch Context (STANDALONE)"
   */
  "context-standalone-encounter": "context-standalone-encounter",

  /**
   * Supports Refresh Token
   */
  "permission-offline": "permission-offline",

  /**
   * Supports Patient Level Scopes
   */
  "permission-patient": "permission-patient",

  /**
   * Supports User Level Scopes
   */
  "permission-user": "permission-user",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SmartCapabilitiesCode =
  typeof SmartCapabilitiesCode[keyof typeof SmartCapabilitiesCode];
