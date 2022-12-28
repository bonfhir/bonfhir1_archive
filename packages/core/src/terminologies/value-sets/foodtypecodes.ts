/**
 * This value set represents codes for types of foods and is provided as a suggestive example. It include codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 255620007 (Foods (substance)).
 * http://hl7.org/fhir/ValueSet/food-type
 */
export const FoodTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FoodTypeCodesCode =
  typeof FoodTypeCodesCode[keyof typeof FoodTypeCodesCode];
