/**
 * The type of personal health information to which the subject of the information, or the delegate of the subject, consents or dissents to authorize access.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccessCode
 */
export const ActInformationAccessCodeCode = {
  /**
   * ActInformationAccessCode
   */
  ActInformationAccessCode: "_ActInformationAccessCode",

  /**
   * adverse drug reaction access
   */
  adversedrugreactionaccess: "ACADR",

  /**
   * all access
   */
  allaccess: "ACALL",

  /**
   * allergy access
   */
  allergyaccess: "ACALLG",

  /**
   * informational consent access
   */
  informationalconsentaccess: "ACCONS",

  /**
   * demographics access
   */
  demographicsaccess: "ACDEMO",

  /**
   * diagnostic imaging access
   */
  diagnosticimagingaccess: "ACDI",

  /**
   * immunization access
   */
  immunizationaccess: "ACIMMUN",

  /**
   * lab test result access
   */
  labtestresultaccess: "ACLAB",

  /**
   * medication access
   */
  medicationaccess: "ACMED",

  /**
   * medical condition access
   */
  medicalconditionaccess: "ACMEDC",

  /**
   * mental health access
   */
  mentalhealthaccess: "ACMEN",

  /**
   * common observations access
   */
  commonobservationsaccess: "ACOBS",

  /**
   * policy or program information access
   */
  policyorprograminformationaccess: "ACPOLPRG",

  /**
   * provider information access
   */
  providerinformationaccess: "ACPROV",

  /**
   * professional service access
   */
  professionalserviceaccess: "ACPSERV",

  /**
   * substance abuse access
   */
  substanceabuseaccess: "ACSUBSTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessCodeCode =
  typeof ActInformationAccessCodeCode[keyof typeof ActInformationAccessCodeCode];
