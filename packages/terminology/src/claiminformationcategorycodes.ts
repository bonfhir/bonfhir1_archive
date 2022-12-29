/**
 * This value set includes sample Information Category codes.
 * http://terminology.hl7.org/ValueSet/claim-informationcategory
 */
export const ClaimInformationCategoryCodesCode = {
  /**
   * Information
   */
  Information: "info",

  /**
   * Discharge
   */
  Discharge: "discharge",

  /**
   * Onset
   */
  Onset: "onset",

  /**
   * Related Services
   */
  RelatedServices: "related",

  /**
   * Exception
   */
  Exception: "exception",

  /**
   * Materials Forwarded
   */
  MaterialsForwarded: "material",

  /**
   * Attachment
   */
  Attachment: "attachment",

  /**
   * Missing Tooth
   */
  MissingTooth: "missingtooth",

  /**
   * Prosthesis
   */
  Prosthesis: "prosthesis",

  /**
   * Other
   */
  Other: "other",

  /**
   * Hospitalized
   */
  Hospitalized: "hospitalized",

  /**
   * EmploymentImpacted
   */
  EmploymentImpacted: "employmentimpacted",

  /**
   * External Caause
   */
  ExternalCaause: "externalcause",

  /**
   * Patient Reason for Visit
   */
  PatientReasonforVisit: "patientreasonforvisit",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimInformationCategoryCodesCode =
  typeof ClaimInformationCategoryCodesCode[keyof typeof ClaimInformationCategoryCodesCode];
