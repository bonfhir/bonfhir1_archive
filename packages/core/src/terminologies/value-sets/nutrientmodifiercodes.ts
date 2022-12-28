/**
 * NutrientModifier :  Codes for types of nutrients that are being modified such as carbohydrate or sodium.  This value set includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 226355009 (Nutrients(substance)), and the concepts for Sodium, Potassium and Fluid. This is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/nutrient-code
 */
export const NutrientModifierCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NutrientModifierCodesCode =
  typeof NutrientModifierCodesCode[keyof typeof NutrientModifierCodesCode];
