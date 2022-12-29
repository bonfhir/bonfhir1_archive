/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xAccommodationRequestorRole
 */
export const XAccommodationRequestorRoleCode = {
  /**
   * agent
   */
  agent: "AGNT",

  /**
   * patient
   */
  patient: "PAT",

  /**
   * healthcare provider
   */
  healthcareprovider: "PROV",

  /**
   * personal relationship
   */
  personalrelationship: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XAccommodationRequestorRoleCode =
  typeof XAccommodationRequestorRoleCode[keyof typeof XAccommodationRequestorRoleCode];
