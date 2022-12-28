/**
 * The requestor for the accommodation. Steward is Financial Management Technical Committee
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassAccommodationRequestor
 */
export const XRoleClassAccommodationRequestorCode = {
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
export type XRoleClassAccommodationRequestorCode =
  typeof XRoleClassAccommodationRequestorCode[keyof typeof XRoleClassAccommodationRequestorCode];
