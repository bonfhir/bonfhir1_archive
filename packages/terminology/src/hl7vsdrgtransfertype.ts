/**
 * Value Set of codes that specify a type of hospital receiving a transfer patient, which affects how a facility is reimbursed under diagnosis related group (DRG's), for example, exempt or non-exempt.
 * http://terminology.hl7.org/ValueSet/v2-0415
 */
export const Hl7VSDrgTransferTypeCode = {
  /**
   * DRG Non Exempt
   */
  DRGNonExempt: "N",

  /**
   * DRG Exempt
   */
  DRGExempt: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgTransferTypeCode =
  typeof Hl7VSDrgTransferTypeCode[keyof typeof Hl7VSDrgTransferTypeCode];
