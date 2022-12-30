/**
 * This value set includes sample Information Category codes.
 * http://terminology.hl7.org/ValueSet/claim-informationcategory
 */
export const ClaimInformationCategoryCodesCode = {
  /**
   * Information
   */
  info: "info",

  /**
   * Discharge
   */
  discharge: "discharge",

  /**
   * Onset
   */
  onset: "onset",

  /**
   * Related Services
   */
  related: "related",

  /**
   * Exception
   */
  exception: "exception",

  /**
   * Materials Forwarded
   */
  material: "material",

  /**
   * Attachment
   */
  attachment: "attachment",

  /**
   * Missing Tooth
   */
  missingtooth: "missingtooth",

  /**
   * Prosthesis
   */
  prosthesis: "prosthesis",

  /**
   * Other
   */
  other: "other",

  /**
   * Hospitalized
   */
  hospitalized: "hospitalized",

  /**
   * EmploymentImpacted
   */
  employmentimpacted: "employmentimpacted",

  /**
   * External Caause
   */
  externalcause: "externalcause",

  /**
   * Patient Reason for Visit
   */
  patientreasonforvisit: "patientreasonforvisit",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimInformationCategoryCodesCode =
  typeof ClaimInformationCategoryCodesCode[keyof typeof ClaimInformationCategoryCodesCode];
