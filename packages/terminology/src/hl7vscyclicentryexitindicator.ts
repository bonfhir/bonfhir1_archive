/**
 * Value Set of codes that specify if this service request is the first or last service request in a cyclic series of service requests.
 * http://terminology.hl7.org/ValueSet/v2-0505
 */
export const Hl7VSCyclicEntryExitIndicatorCode = {
  /**
   * First service
   */
  F: "F",

  /**
   * Last service
   */
  L: "L",

  /**
   * The first service request in a cyclic group
   */
  "*": "*",

  /**
   * The last service request in a cyclic group.
   */
  "#": "#",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCyclicEntryExitIndicatorCode =
  typeof Hl7VSCyclicEntryExitIndicatorCode[keyof typeof Hl7VSCyclicEntryExitIndicatorCode];
