/**
 * Identifies the reason the patient is assigned to this accommodation type
 * http://terminology.hl7.org/ValueSet/v3-ActAccommodationReason
 */
export const ActAccommodationReasonCode = {
  /**
   * Accommodation Requested Not Available
   */
  ACCREQNA: "ACCREQNA",

  /**
   * Floor Convenience
   */
  FLRCNV: "FLRCNV",

  /**
   * Medical Necessity
   */
  MEDNEC: "MEDNEC",

  /**
   * Patient request
   */
  PAT: "PAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAccommodationReasonCode =
  typeof ActAccommodationReasonCode[keyof typeof ActAccommodationReasonCode];
