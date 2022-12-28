/**
 * This value set represents codes for properties that can be measured and is provided as a suggestive example.  It include codes from [SNOMED CT](http://snomed.info/sct) where concept has a parent of 118598001 Property of measurement (qualifier value).
 * http://hl7.org/fhir/ValueSet/measurement-property
 */
export const CodesforProductCharacteristicsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodesforProductCharacteristicsCode =
  typeof CodesforProductCharacteristicsCode[keyof typeof CodesforProductCharacteristicsCode];
