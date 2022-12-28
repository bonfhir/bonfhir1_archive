/**
 * This value set represents codes for types of edible substances and is provided as a suggestive example.  It include codes from [SNOMED CT](http://snomed.info/sct) where concept has a parent of 327997002 Foods for special diets (product) or has a parent of 229963004 Cultural food types (substance).
 * http://hl7.org/fhir/ValueSet/nutrition-product-category
 */
export const CategoriesofNutritionProductsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CategoriesofNutritionProductsCode =
  typeof CategoriesofNutritionProductsCode[keyof typeof CategoriesofNutritionProductsCode];
