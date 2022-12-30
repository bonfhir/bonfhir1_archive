/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xEntityClassDocumentReceiving
 */
export const XEntityClassDocumentReceivingCode = {
  /**
   * health chart entity
   */
  HCE: "HCE",

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
export type XEntityClassDocumentReceivingCode =
  typeof XEntityClassDocumentReceivingCode[keyof typeof XEntityClassDocumentReceivingCode];
