/**
 * Base values for the order of the items in a list resource.
 * http://terminology.hl7.org/ValueSet/list-order
 */
export const ListOrderCodesCode = {
  /**
   * Sorted by User
   */
  SortedbyUser: "user",

  /**
   * Sorted by System
   */
  SortedbySystem: "system",

  /**
   * Sorted by Event Date
   */
  SortedbyEventDate: "event-date",

  /**
   * Sorted by Item Date
   */
  SortedbyItemDate: "entry-date",

  /**
   * Sorted by Priority
   */
  SortedbyPriority: "priority",

  /**
   * Sorted Alphabetically
   */
  SortedAlphabetically: "alphabetic",

  /**
   * Sorted by Category
   */
  SortedbyCategory: "category",

  /**
   * Sorted by Patient
   */
  SortedbyPatient: "patient",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListOrderCodesCode =
  typeof ListOrderCodesCode[keyof typeof ListOrderCodesCode];
