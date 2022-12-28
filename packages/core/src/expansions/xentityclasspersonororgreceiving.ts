/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xEntityClassPersonOrOrgReceiving
 */
export const XEntityClassPersonOrOrgReceivingCode = {
  /**
   * person
   */
  PSN: "PSN",

  /**
   * organization
   */
  ORG: "ORG",

  /**
   * public institution
   */
  PUB: "PUB",

  /**
   * state
   */
  STATE: "STATE",

  /**
   * Nation
   */
  NAT: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XEntityClassPersonOrOrgReceivingCode =
  typeof XEntityClassPersonOrOrgReceivingCode[keyof typeof XEntityClassPersonOrOrgReceivingCode];
