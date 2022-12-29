/**
 * An identified point during a clinical trial at which one or more actions are scheduled to be performed (definition mood), or are actually performed (event mood). The actions may or may not involve an encounter between the subject and a healthcare professional.
 * http://terminology.hl7.org/ValueSet/v3-ActClassClinicalTrialTimepointEvent
 */
export const ActClassClinicalTrialTimepointEventCode = {
  /**
   * clinical trial timepoint event
   */
  clinicaltrialtimepointevent: "CTTEVENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassClinicalTrialTimepointEventCode =
  typeof ActClassClinicalTrialTimepointEventCode[keyof typeof ActClassClinicalTrialTimepointEventCode];
