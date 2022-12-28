/**
 * UCUM units for recording Body Temperature
 * http://hl7.org/fhir/ValueSet/ucum-bodytemp
 */
export const BodyTemperatureUnitsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodyTemperatureUnitsCode =
  typeof BodyTemperatureUnitsCode[keyof typeof BodyTemperatureUnitsCode];
