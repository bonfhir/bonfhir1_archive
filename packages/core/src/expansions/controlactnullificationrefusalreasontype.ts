/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ControlActNullificationRefusalReasonType
 */
export const ControlActNullificationRefusalReasonTypeCode = {
  /**
   * ControlActNullificationRefusalReasonType
   */
  _ControlActNullificationRefusalReasonType:
    "_ControlActNullificationRefusalReasonType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlActNullificationRefusalReasonTypeCode =
  typeof ControlActNullificationRefusalReasonTypeCode[keyof typeof ControlActNullificationRefusalReasonTypeCode];
