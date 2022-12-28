/**
 * Set of LOINC codes that identify the type of date that is specified within an immunization forecast step.
 * http://terminology.hl7.org/ValueSet/v3-immunizationForecastDate
 */
export const ImmunizationForecastDateCode = {
  /**
   * Earliest date to give
   */
  "30981-5": "30981-5",

  /**
   * Date vaccine due
   */
  "30980-7": "30980-7",

  /**
   * Latest date to give immunization
   */
  "59777-3": "59777-3",

  /**
   * Date when overdue for immunization
   */
  "59778-1": "59778-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationForecastDateCode =
  typeof ImmunizationForecastDateCode[keyof typeof ImmunizationForecastDateCode];
