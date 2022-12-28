/**
 * Concepts that identify the type or nature of exposure interaction. Examples include "household", "care giver", "intimate partner", "common space", "common substance", etc. to further describe the nature of interaction.
 * http://terminology.hl7.org/ValueSet/v3-ActExposureCode
 */
export const ActExposureCodeCode = {
  /**
   * ActExposureCode
   */
  _ActExposureCode: "_ActExposureCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActExposureCodeCode =
  typeof ActExposureCodeCode[keyof typeof ActExposureCodeCode];
