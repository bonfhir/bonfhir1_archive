/**
 * A "helper" vocabulary used to construct complex query filters based on how and whether a prescription has been dispensed.
 * http://terminology.hl7.org/ValueSet/v3-PrescriptionDispenseFilterCode
 */
export const PrescriptionDispenseFilterCodeCode = {
  /**
   * Prescription Dispense Filter Code
   */
  PrescriptionDispenseFilterCode: "_PrescriptionDispenseFilterCode",

  /**
   * Completely dispensed
   */
  Completelydispensed: "C",

  /**
   * Never Dispensed
   */
  NeverDispensed: "N",

  /**
   * Dispensed with remaining fills
   */
  Dispensedwithremainingfills: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrescriptionDispenseFilterCodeCode =
  typeof PrescriptionDispenseFilterCodeCode[keyof typeof PrescriptionDispenseFilterCodeCode];
