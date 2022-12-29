/**
 * Value Set of codes that specify a classification of material items into like groups as defined and utilized within an operating room setting for charting procedures.
 * http://terminology.hl7.org/ValueSet/v2-0778
 */
export const Hl7VSItemTypeCode = {
  /**
   * Equipment
   */
  Equipment: "EQP",

  /**
   * Supply
   */
  Supply: "SUP",

  /**
   * Implant
   */
  Implant: "IMP",

  /**
   * Medication
   */
  Medication: "MED",

  /**
   * Tubes, Drains, and Catheters
   */
  TubesDrainsandCatheters: "TDC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSItemTypeCode =
  typeof Hl7VSItemTypeCode[keyof typeof Hl7VSItemTypeCode];
