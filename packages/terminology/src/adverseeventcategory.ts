/**
 * Overall categorization of the event, e.g. product-related or situational.
 * http://terminology.hl7.org/ValueSet/adverse-event-category
 */
export const AdverseEventCategoryCode = {
  /**
   * Wrong Patient
   */
  WrongPatient: "wrong-patient",

  /**
   * Procedure Mishap
   */
  ProcedureMishap: "procedure-mishap",

  /**
   * Medication Mishap
   */
  MedicationMishap: "medication-mishap",

  /**
   * Device
   */
  Device: "device",

  /**
   * Unsafe Physical Environment
   */
  UnsafePhysicalEnvironment: "unsafe-physical-environment",

  /**
   * Hospital Acquired Infection
   */
  HospitalAcquiredInfection: "hospital-aquired-infection",

  /**
   * Wrong Body Site
   */
  WrongBodySite: "wrong-body-site",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCategoryCode =
  typeof AdverseEventCategoryCode[keyof typeof AdverseEventCategoryCode];
