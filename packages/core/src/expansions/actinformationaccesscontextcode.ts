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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessContextCodeCode =
  typeof ActInformationAccessContextCodeCode[keyof typeof ActInformationAccessContextCodeCode];
