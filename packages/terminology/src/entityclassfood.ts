/**
 * Naturally occurring, processed or manufactured entities that are primarily used as food for humans and animals.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassFood
 */
export const EntityClassFoodCode = {
  /**
   * food
   */
  food: "FOOD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassFoodCode =
  typeof EntityClassFoodCode[keyof typeof EntityClassFoodCode];
