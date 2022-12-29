/**
 * Value Set of codes that specify any payment adjustment due to drugs or medical devices.
 * http://terminology.hl7.org/ValueSet/v2-0468
 */
export const Hl7VSPaymentAdjustmentCodeCode = {
  /**
   * No payment adjustment
   */
  Nopaymentadjustment: "1",

  /**
   * Designated current drug or biological payment adjustment applies to APC (status indicator G)
   */
  DesignatedcurrentdrugorbiologicalpaymentadjustmentappliestoAPCstatusindicatorG:
    "2",

  /**
   * Designated new device payment adjustment applies to APC (status indicator H)
   */
  DesignatednewdevicepaymentadjustmentappliestoAPCstatusindicatorH: "3",

  /**
   * Designated new drug or new biological payment adjustment applies to APC (status indicator J)
   */
  DesignatednewdrugornewbiologicalpaymentadjustmentappliestoAPCstatusindicatorJ:
    "4",

  /**
   * Deductible not applicable (specific list of HCPCS codes)
   */
  DeductiblenotapplicablespecificlistofHCPCScodes: "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPaymentAdjustmentCodeCode =
  typeof Hl7VSPaymentAdjustmentCodeCode[keyof typeof Hl7VSPaymentAdjustmentCodeCode];
