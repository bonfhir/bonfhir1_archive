/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 * http://terminology.hl7.org/ValueSet/encounter-diet
 */
export const DietCode = {
  /**
   * Vegetarian
   */
  Vegetarian: "vegetarian",

  /**
   * Dairy Free
   */
  DairyFree: "dairy-free",

  /**
   * Nut Free
   */
  NutFree: "nut-free",

  /**
   * Gluten Free
   */
  GlutenFree: "gluten-free",

  /**
   * Vegan
   */
  Vegan: "vegan",

  /**
   * Halal
   */
  Halal: "halal",

  /**
   * Kosher
   */
  Kosher: "kosher",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DietCode = typeof DietCode[keyof typeof DietCode];
