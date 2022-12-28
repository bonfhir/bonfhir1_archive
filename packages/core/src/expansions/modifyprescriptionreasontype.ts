/**
 * Indicates why an existing prescription is changed.
 * http://terminology.hl7.org/ValueSet/v3-ModifyPrescriptionReasonType
 */
export const ModifyPrescriptionReasonTypeCode = {
  /**
   * ModifyPrescriptionReasonType
   */
  _ModifyPrescriptionReasonType: "_ModifyPrescriptionReasonType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModifyPrescriptionReasonTypeCode =
  typeof ModifyPrescriptionReasonTypeCode[keyof typeof ModifyPrescriptionReasonTypeCode];
