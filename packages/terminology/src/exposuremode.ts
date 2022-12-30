/**
 * Code for the mechanism by which the exposure agent was exchanged or potentially exchanged by the participants involved in the exposure.
 * http://terminology.hl7.org/ValueSet/v3-ExposureMode
 */
export const ExposureModeCode = {
  /**
   * ExposureMode
   */
  _ExposureMode: "_ExposureMode",

  /**
   * airborne
   */
  AIRBORNE: "AIRBORNE",

  /**
   * contact
   */
  CONTACT: "CONTACT",

  /**
   * foodborne
   */
  FOODBORNE: "FOODBORNE",

  /**
   * waterborne
   */
  WATERBORNE: "WATERBORNE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExposureModeCode =
  typeof ExposureModeCode[keyof typeof ExposureModeCode];
