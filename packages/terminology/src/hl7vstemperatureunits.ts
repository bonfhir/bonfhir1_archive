/**
 * Value Set of codes specifying  the units of transport temperature.
 * http://terminology.hl7.org/ValueSet/v2-0931
 */
export const Hl7VSTemperatureUnitsCode = {
  /**
   * Degrees Fahrenheit (note that V2 has erroneously published this for many years without the square brackets)
   */
  DegreesFahrenheitnotethatV2haserroneouslypublishedthisformanyyearswithoutthesquarebrackets:
    "[degF]",

  /**
   * Degrees Celsius
   */
  DegreesCelsius: "Cel",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTemperatureUnitsCode =
  typeof Hl7VSTemperatureUnitsCode[keyof typeof Hl7VSTemperatureUnitsCode];
