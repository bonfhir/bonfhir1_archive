/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 * http://terminology.hl7.org/ValueSet/encounter-diet
 */
export const DietCode = {
  /**
   * Vegetarian
   */
  vegetarian: "vegetarian",

  /**
   * Dairy Free
   */
  "dairy-free": "dairy-free",

  /**
   * Nut Free
   */
  "nut-free": "nut-free",

  /**
   * Gluten Free
   */
  "gluten-free": "gluten-free",

  /**
   * Vegan
   */
  vegan: "vegan",

  /**
   * Halal
   */
  halal: "halal",

  /**
   * Kosher
   */
  kosher: "kosher",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DietCode = typeof DietCode[keyof typeof DietCode];
