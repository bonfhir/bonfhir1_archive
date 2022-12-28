/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xAccommodationRequestorRole
 */
export const XAccommodationRequestorRoleCode = {
  /**
   * agent
   */
  AGNT: "AGNT",

  /**
   * patient
   */
  PAT: "PAT",

  /**
   * healthcare provider
   */
  PROV: "PROV",

  /**
   * personal relationship
   */
  PRS: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XAccommodationRequestorRoleCode =
  typeof XAccommodationRequestorRoleCode[keyof typeof XAccommodationRequestorRoleCode];
