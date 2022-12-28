/**
 * FluidConsistencyType :  Codes used to represent the consistency of fluids and liquids provided to the patient. This value set includes concepts from [SNOMED CT](http://snomed.info/sct)(US Extension) where concept is a 435681000124103  (Dietary liquid consistency diet (regime/therapy)). It is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/consistency-type
 */
export const FluidConsistencyTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FluidConsistencyTypeCodesCode =
  typeof FluidConsistencyTypeCodesCode[keyof typeof FluidConsistencyTypeCodesCode];
