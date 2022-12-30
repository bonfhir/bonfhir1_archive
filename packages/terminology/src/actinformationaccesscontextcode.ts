/**
 * Conveyance of the type of context in which authorization given under jurisdictional law, by organizational policy, or by a patient consent directive permits the collection, access, use or disclosure of specified patient health information.

*Steward:* Security WG
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccessContextCode
 */
export const ActInformationAccessContextCodeCode = {
  /**
   * ActInformationAccessContextCode
   */
  _ActInformationAccessContextCode: "_ActInformationAccessContextCode",

  /**
   * authorized information transfer
   */
  INFAUT: "INFAUT",

  /**
   * after explicit consent
   */
  INFCON: "INFCON",

  /**
   * only on court order
   */
  INFCRT: "INFCRT",

  /**
   * only if danger to others
   */
  INFDNG: "INFDNG",

  /**
   * only in an emergency
   */
  INFEMER: "INFEMER",

  /**
   * only if public welfare risk
   */
  INFPWR: "INFPWR",

  /**
   * regulatory information transfer
   */
  INFREG: "INFREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessContextCodeCode =
  typeof ActInformationAccessContextCodeCode[keyof typeof ActInformationAccessContextCodeCode];
