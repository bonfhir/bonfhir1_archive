/**
 * Conveyance of the type of context in which authorization given under jurisdictional law, by organizational policy, or by a patient consent directive permits the collection, access, use or disclosure of specified patient health information.

*Steward:* Security WG
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccessContextCode
 */
export const ActInformationAccessContextCodeCode = {
  /**
   * ActInformationAccessContextCode
   */
  ActInformationAccessContextCode: "_ActInformationAccessContextCode",

  /**
   * authorized information transfer
   */
  authorizedinformationtransfer: "INFAUT",

  /**
   * after explicit consent
   */
  afterexplicitconsent: "INFCON",

  /**
   * only on court order
   */
  onlyoncourtorder: "INFCRT",

  /**
   * only if danger to others
   */
  onlyifdangertoothers: "INFDNG",

  /**
   * only in an emergency
   */
  onlyinanemergency: "INFEMER",

  /**
   * only if public welfare risk
   */
  onlyifpublicwelfarerisk: "INFPWR",

  /**
   * regulatory information transfer
   */
  regulatoryinformationtransfer: "INFREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessContextCodeCode =
  typeof ActInformationAccessContextCodeCode[keyof typeof ActInformationAccessContextCodeCode];
