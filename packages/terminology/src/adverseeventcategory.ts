/**
 * Overall categorization of the event, e.g. product-related or situational.
 * http://terminology.hl7.org/ValueSet/adverse-event-category
 */
export const AdverseEventCategoryCode = {
  /**
   * Wrong Patient
   */
  "wrong-patient": "wrong-patient",

  /**
   * Procedure Mishap
   */
  "procedure-mishap": "procedure-mishap",

  /**
   * Medication Mishap
   */
  "medication-mishap": "medication-mishap",

  /**
   * Device
   */
  device: "device",

  /**
   * Unsafe Physical Environment
   */
  "unsafe-physical-environment": "unsafe-physical-environment",

  /**
   * Hospital Acquired Infection
   */
  "hospital-aquired-infection": "hospital-aquired-infection",

  /**
   * Wrong Body Site
   */
  "wrong-body-site": "wrong-body-site",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCategoryCode =
  typeof AdverseEventCategoryCode[keyof typeof AdverseEventCategoryCode];
