/**
 * Value Set of codes that specify whether the sterilization load for a device is built in the sub-sterile area adjacent to an Operating Room or the Central Processing Department.
 * http://terminology.hl7.org/ValueSet/v2-0659
 */
export const Hl7VSLotControlCode = {
  /**
   * OR Mode Without Operator
   */
  "1": "1",

  /**
   * OR Mode with Operator
   */
  "2": "2",

  /**
   * CPD Mode Without Operator
   */
  "3": "3",

  /**
   * CPD Mode With Operator
   */
  "4": "4",

  /**
   * Offline Mode
   */
  "5": "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLotControlCode =
  typeof Hl7VSLotControlCode[keyof typeof Hl7VSLotControlCode];
