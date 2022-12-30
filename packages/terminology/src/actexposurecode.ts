/**
 * Concepts that identify the type or nature of exposure interaction. Examples include "household", "care giver", "intimate partner", "common space", "common substance", etc. to further describe the nature of interaction.
 * http://terminology.hl7.org/ValueSet/v3-ActExposureCode
 */
export const ActExposureCodeCode = {
  /**
   * ActExposureCode
   */
  _ActExposureCode: "_ActExposureCode",

  /**
   * Day care - Child care Interaction
   */
  CHLDCARE: "CHLDCARE",

  /**
   * Common Conveyance Interaction
   */
  CONVEYNC: "CONVEYNC",

  /**
   * Health Care Interaction - Not Patient Care
   */
  HLTHCARE: "HLTHCARE",

  /**
   * Care Giver Interaction
   */
  HOMECARE: "HOMECARE",

  /**
   * Hospital Patient Interaction
   */
  HOSPPTNT: "HOSPPTNT",

  /**
   * Hospital Visitor Interaction
   */
  HOSPVSTR: "HOSPVSTR",

  /**
   * Household Interaction
   */
  HOUSEHLD: "HOUSEHLD",

  /**
   * Inmate Interaction
   */
  INMATE: "INMATE",

  /**
   * Intimate Interaction
   */
  INTIMATE: "INTIMATE",

  /**
   * Long Term Care Facility Interaction
   */
  LTRMCARE: "LTRMCARE",

  /**
   * Common Space Interaction
   */
  PLACE: "PLACE",

  /**
   * Health Care Interaction - Patient Care
   */
  PTNTCARE: "PTNTCARE",

  /**
   * School Interaction
   */
  SCHOOL2: "SCHOOL2",

  /**
   * Social/Extended Family Interaction
   */
  SOCIAL2: "SOCIAL2",

  /**
   * Common Substance Interaction
   */
  SUBSTNCE: "SUBSTNCE",

  /**
   * Common Travel Interaction
   */
  TRAVINT: "TRAVINT",

  /**
   * Work Interaction
   */
  WORK2: "WORK2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActExposureCodeCode =
  typeof ActExposureCodeCode[keyof typeof ActExposureCodeCode];
