/**
 * The set of actions that define an experiment to assess the effectiveness and/or safety of a biopharmaceutical product (food, drug, device, etc.). In definition mood, this set of actions is often embodied in a clinical trial protocol; in event mood, this designates the aggregate act of applying the actions to one or more subjects.
 * http://terminology.hl7.org/ValueSet/v3-ActClassClinicalTrial
 */
export const ActClassClinicalTrialCode = {
  /**
   * clinical trial
   */
  clinicaltrial: "CLNTRL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassClinicalTrialCode =
  typeof ActClassClinicalTrialCode[keyof typeof ActClassClinicalTrialCode];
