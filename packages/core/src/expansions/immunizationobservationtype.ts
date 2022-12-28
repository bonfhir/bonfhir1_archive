/**
 * **Description:** Indicates the valid antigen count.
 * http://terminology.hl7.org/ValueSet/v3-ImmunizationObservationType
 */
export const ImmunizationObservationTypeCode = {
  /**
   * ImmunizationObservationType
   */
  _ImmunizationObservationType: "_ImmunizationObservationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationObservationTypeCode =
  typeof ImmunizationObservationTypeCode[keyof typeof ImmunizationObservationTypeCode];
