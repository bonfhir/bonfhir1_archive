/**
 * A "helper" vocabulary used to construct complex query filters based on how and whether a prescription has been dispensed.
 * http://terminology.hl7.org/ValueSet/v3-PrescriptionDispenseFilterCode
 */
export const PrescriptionDispenseFilterCodeCode = {
  /**
   * Prescription Dispense Filter Code
   */
  _PrescriptionDispenseFilterCode: "_PrescriptionDispenseFilterCode",

  /**
   * Completely dispensed
   */
  C: "C",

  /**
   * Never Dispensed
   */
  N: "N",

  /**
   * Dispensed with remaining fills
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrescriptionDispenseFilterCodeCode =
  typeof PrescriptionDispenseFilterCodeCode[keyof typeof PrescriptionDispenseFilterCodeCode];
