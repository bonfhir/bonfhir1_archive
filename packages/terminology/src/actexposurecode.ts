/**
 * Concepts that identify the type or nature of exposure interaction. Examples include "household", "care giver", "intimate partner", "common space", "common substance", etc. to further describe the nature of interaction.
 * http://terminology.hl7.org/ValueSet/v3-ActExposureCode
 */
export const ActExposureCodeCode = {
  /**
   * ActExposureCode
   */
  ActExposureCode: "_ActExposureCode",

  /**
   * Day care - Child care Interaction
   */
  DaycareChildcareInteraction: "CHLDCARE",

  /**
   * Common Conveyance Interaction
   */
  CommonConveyanceInteraction: "CONVEYNC",

  /**
   * Health Care Interaction - Not Patient Care
   */
  HealthCareInteractionNotPatientCare: "HLTHCARE",

  /**
   * Care Giver Interaction
   */
  CareGiverInteraction: "HOMECARE",

  /**
   * Hospital Patient Interaction
   */
  HospitalPatientInteraction: "HOSPPTNT",

  /**
   * Hospital Visitor Interaction
   */
  HospitalVisitorInteraction: "HOSPVSTR",

  /**
   * Household Interaction
   */
  HouseholdInteraction: "HOUSEHLD",

  /**
   * Inmate Interaction
   */
  InmateInteraction: "INMATE",

  /**
   * Intimate Interaction
   */
  IntimateInteraction: "INTIMATE",

  /**
   * Long Term Care Facility Interaction
   */
  LongTermCareFacilityInteraction: "LTRMCARE",

  /**
   * Common Space Interaction
   */
  CommonSpaceInteraction: "PLACE",

  /**
   * Health Care Interaction - Patient Care
   */
  HealthCareInteractionPatientCare: "PTNTCARE",

  /**
   * School Interaction
   */
  SchoolInteraction: "SCHOOL2",

  /**
   * Social/Extended Family Interaction
   */
  SocialExtendedFamilyInteraction: "SOCIAL2",

  /**
   * Common Substance Interaction
   */
  CommonSubstanceInteraction: "SUBSTNCE",

  /**
   * Common Travel Interaction
   */
  CommonTravelInteraction: "TRAVINT",

  /**
   * Work Interaction
   */
  WorkInteraction: "WORK2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActExposureCodeCode =
  typeof ActExposureCodeCode[keyof typeof ActExposureCodeCode];
