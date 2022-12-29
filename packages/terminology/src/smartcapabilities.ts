/**
 * Codes that define what the server is capable of.
 * http://terminology.hl7.org/ValueSet/smart-capabilities
 */
export const SmartCapabilitiesCode = {
  /**
   * EHR Launch Mode
   */
  EHRLaunchMode: "launch-ehr",

  /**
   * Standalone Launch Mode
   */
  StandaloneLaunchMode: "launch-standalone",

  /**
   * Public Client Profile
   */
  PublicClientProfile: "client-public",

  /**
   * Confidential Client Profile
   */
  ConfidentialClientProfile: "client-confidential-symmetric",

  /**
   * Supports OpenID Connect
   */
  SupportsOpenIDConnect: "sso-openid-connect",

  /**
   * Allows "Need Patient Banner"
   */
  AllowsNeedPatientBanner: "context-passthrough-banner",

  /**
   * Allows "Smart Style Style"
   */
  AllowsSmartStyleStyle: "context-passthrough-style",

  /**
   * Allows "Patient Level Launch Context (EHR)"
   */
  AllowsPatientLevelLaunchContextEHR: "context-ehr-patient",

  /**
   * Allows "Encounter Level Launch Context (EHR)"
   */
  AllowsEncounterLevelLaunchContextEHR: "context-ehr-encounter",

  /**
   * Allows "Patient Level Launch Context (STANDALONE)"
   */
  AllowsPatientLevelLaunchContextSTANDALONE: "context-standalone-patient",

  /**
   * Allows "Encounter Level Launch Context (STANDALONE)"
   */
  AllowsEncounterLevelLaunchContextSTANDALONE: "context-standalone-encounter",

  /**
   * Supports Refresh Token
   */
  SupportsRefreshToken: "permission-offline",

  /**
   * Supports Patient Level Scopes
   */
  SupportsPatientLevelScopes: "permission-patient",

  /**
   * Supports User Level Scopes
   */
  SupportsUserLevelScopes: "permission-user",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SmartCapabilitiesCode =
  typeof SmartCapabilitiesCode[keyof typeof SmartCapabilitiesCode];
