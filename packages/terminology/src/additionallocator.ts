/**
 * This can be a unit designator, such as apartment number, suite number, or floor. There may be several unit designators in an address (e.g., "3rd floor, Appt. 342".) This can also be a designator pointing away from the location (e.g. Across the street from).
 * http://terminology.hl7.org/ValueSet/v3-AdditionalLocator
 */
export const AdditionalLocatorCode = {
  /**
   * additional locator
   */
  additionallocator: "ADL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdditionalLocatorCode =
  typeof AdditionalLocatorCode[keyof typeof AdditionalLocatorCode];
