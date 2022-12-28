/**
 * Represents the patient's status with respect to their immunization guideline as of an evaluation date.
 * http://terminology.hl7.org/ValueSet/v3-immunizationForecastStatusObservationValue
 */
export const ImmunizationForecastStatusObservationValueCode = {
  /**
   * Up-to-date with immunizations
   */
  "171258008": "171258008",

  /**
   * Immunization due
   */
  "171279008": "171279008",

  /**
   * Not up to date with immunizations (finding)
   */
  "171259000": "171259000",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationForecastStatusObservationValueCode =
  typeof ImmunizationForecastStatusObservationValueCode[keyof typeof ImmunizationForecastStatusObservationValueCode];
