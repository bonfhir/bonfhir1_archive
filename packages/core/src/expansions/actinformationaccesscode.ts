/**
 * The type of personal health information to which the subject of the information, or the delegate of the subject, consents or dissents to authorize access.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccessCode
 */
export const ActInformationAccessCodeCode = {
  /**
   * ActInformationAccessCode
   */
  _ActInformationAccessCode: "_ActInformationAccessCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessCodeCode =
  typeof ActInformationAccessCodeCode[keyof typeof ActInformationAccessCodeCode];
