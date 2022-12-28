/**
 * UCUM units for recording body length measures such as height and head circumference
 * http://hl7.org/fhir/ValueSet/ucum-bodylength
 */
export const BodyLengthUnitsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodyLengthUnitsCode =
  typeof BodyLengthUnitsCode[keyof typeof BodyLengthUnitsCode];
