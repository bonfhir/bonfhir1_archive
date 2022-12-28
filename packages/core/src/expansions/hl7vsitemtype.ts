/**
 * Value Set of codes that specify a classification of material items into like groups as defined and utilized within an operating room setting for charting procedures.
 * http://terminology.hl7.org/ValueSet/v2-0778
 */
export const Hl7VSItemTypeCode = {
  /**
   * Equipment
   */
  EQP: "EQP",

  /**
   * Supply
   */
  SUP: "SUP",

  /**
   * Implant
   */
  IMP: "IMP",

  /**
   * Medication
   */
  MED: "MED",

  /**
   * Tubes, Drains, and Catheters
   */
  TDC: "TDC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSItemTypeCode =
  typeof Hl7VSItemTypeCode[keyof typeof Hl7VSItemTypeCode];
