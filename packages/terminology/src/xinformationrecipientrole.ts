/**
 * Used to represent the role(s) of those who should receive a copy of a document.
 * http://terminology.hl7.org/ValueSet/v3-xInformationRecipientRole
 */
export const XInformationRecipientRoleCode = {
  /**
   * assigned entity
   */
  assignedentity: "ASSIGNED",

  /**
   * caregiver
   */
  caregiver: "CAREGIVER",

  /**
   * guarantor
   */
  guarantor: "GUAR",

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
export type XInformationRecipientRoleCode =
  typeof XInformationRecipientRoleCode[keyof typeof XInformationRecipientRoleCode];
