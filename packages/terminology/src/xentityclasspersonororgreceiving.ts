/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xEntityClassPersonOrOrgReceiving
 */
export const XEntityClassPersonOrOrgReceivingCode = {
  /**
   * person
   */
  person: "PSN",

  /**
   * organization
   */
  organization: "ORG",

  /**
   * public institution
   */
  publicinstitution: "PUB",

  /**
   * state
   */
  state: "STATE",

  /**
   * Nation
   */
  Nation: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XEntityClassPersonOrOrgReceivingCode =
  typeof XEntityClassPersonOrOrgReceivingCode[keyof typeof XEntityClassPersonOrOrgReceivingCode];
