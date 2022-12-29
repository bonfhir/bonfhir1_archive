/**
 * Identifies the reason the patient is assigned to this accommodation type
 * http://terminology.hl7.org/ValueSet/v3-ActAccommodationReason
 */
export const ActAccommodationReasonCode = {
  /**
   * Accommodation Requested Not Available
   */
  AccommodationRequestedNotAvailable: "ACCREQNA",

  /**
   * Floor Convenience
   */
  FloorConvenience: "FLRCNV",

  /**
   * Medical Necessity
   */
  MedicalNecessity: "MEDNEC",

  /**
   * Patient request
   */
  Patientrequest: "PAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAccommodationReasonCode =
  typeof ActAccommodationReasonCode[keyof typeof ActAccommodationReasonCode];
