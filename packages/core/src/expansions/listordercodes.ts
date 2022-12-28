/**
 * Base values for the order of the items in a list resource.
 * http://terminology.hl7.org/ValueSet/list-order
 */
export const ListOrderCodesCode = {
  /**
   * Sorted by User
   */
  user: "user",

  /**
   * Sorted by System
   */
  system: "system",

  /**
   * Sorted by Event Date
   */
  "event-date": "event-date",

  /**
   * Sorted by Item Date
   */
  "entry-date": "entry-date",

  /**
   * Sorted by Priority
   */
  priority: "priority",

  /**
   * Sorted Alphabetically
   */
  alphabetic: "alphabetic",

  /**
   * Sorted by Category
   */
  category: "category",

  /**
   * Sorted by Patient
   */
  patient: "patient",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListOrderCodesCode =
  typeof ListOrderCodesCode[keyof typeof ListOrderCodesCode];
