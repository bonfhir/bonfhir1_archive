/**
 * The type of personal health information to which the subject of the information, or the delegate of the subject, consents or dissents to authorize access.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccessCode
 */
export const ActInformationAccessCodeCode = {
  /**
   * ActInformationAccessCode
   */
  _ActInformationAccessCode: "_ActInformationAccessCode",

  /**
   * adverse drug reaction access
   */
  ACADR: "ACADR",

  /**
   * all access
   */
  ACALL: "ACALL",

  /**
   * allergy access
   */
  ACALLG: "ACALLG",

  /**
   * informational consent access
   */
  ACCONS: "ACCONS",

  /**
   * demographics access
   */
  ACDEMO: "ACDEMO",

  /**
   * diagnostic imaging access
   */
  ACDI: "ACDI",

  /**
   * immunization access
   */
  ACIMMUN: "ACIMMUN",

  /**
   * lab test result access
   */
  ACLAB: "ACLAB",

  /**
   * medication access
   */
  ACMED: "ACMED",

  /**
   * medical condition access
   */
  ACMEDC: "ACMEDC",

  /**
   * mental health access
   */
  ACMEN: "ACMEN",

  /**
   * common observations access
   */
  ACOBS: "ACOBS",

  /**
   * policy or program information access
   */
  ACPOLPRG: "ACPOLPRG",

  /**
   * provider information access
   */
  ACPROV: "ACPROV",

  /**
   * professional service access
   */
  ACPSERV: "ACPSERV",

  /**
   * substance abuse access
   */
  ACSUBSTAB: "ACSUBSTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessCodeCode =
  typeof ActInformationAccessCodeCode[keyof typeof ActInformationAccessCodeCode];
