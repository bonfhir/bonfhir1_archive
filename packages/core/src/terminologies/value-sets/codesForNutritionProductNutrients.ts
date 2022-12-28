/**
 * This value set represents codes for food nutrients and is provided as a suggestive example.  It include codes from [SNOMED CT](http://snomed.info/sct) where concept has a parent of 226355009 Nutrients (substance).
 * http://hl7.org/fhir/ValueSet/nutrition-product-nutrient
 */
export const CodesforNutritionProductNutrientsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodesforNutritionProductNutrientsCode =
  typeof CodesforNutritionProductNutrientsCode[keyof typeof CodesforNutritionProductNutrientsCode];
