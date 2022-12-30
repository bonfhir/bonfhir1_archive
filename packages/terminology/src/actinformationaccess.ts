/**
 * **Definition:** Consent to access healthcare information.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationAccess
 */
export const ActInformationAccessCode = {
  /**
   * information access
   */
  INFA: "INFA",

  /**
   * access only
   */
  INFAO: "INFAO",

  /**
   * access and save only
   */
  INFASO: "INFASO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationAccessCode =
  typeof ActInformationAccessCode[keyof typeof ActInformationAccessCode];
