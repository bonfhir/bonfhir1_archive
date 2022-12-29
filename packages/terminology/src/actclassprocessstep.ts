/**
 *
 * http://terminology.hl7.org/ValueSet/v3-ActClassProcessStep
 */
export const ActClassProcessStepCode = {
  /**
   * transportation
   */
  transportation: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassProcessStepCode =
  typeof ActClassProcessStepCode[keyof typeof ActClassProcessStepCode];
