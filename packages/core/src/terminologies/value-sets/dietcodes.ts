/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 * http://hl7.org/fhir/ValueSet/diet-type
 */
export const DietCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DietCodesCode = typeof DietCodesCode[keyof typeof DietCodesCode];
