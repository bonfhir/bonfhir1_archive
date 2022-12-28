/**
 * Codes identifying the lifecycle stage of a product.
 * http://hl7.org/fhir/ValueSet/nutritionproduct-status
 */
export const NutritionProductStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NutritionProductStatusCode =
  typeof NutritionProductStatusCode[keyof typeof NutritionProductStatusCode];
