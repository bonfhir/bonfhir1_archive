/**
 * Value Set of codes that specify the method by which treatment is dispensed.
 * http://terminology.hl7.org/ValueSet/v2-0321
 */
export const Hl7VSDispenseMethodCode = {
  /**
   * Traditional
   */
  Traditional: "TR",

  /**
   * Unit Dose
   */
  UnitDose: "UD",

  /**
   * Floor Stock
   */
  FloorStock: "F",

  /**
   * Automatic Dispensing
   */
  AutomaticDispensing: "AD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDispenseMethodCode =
  typeof Hl7VSDispenseMethodCode[keyof typeof Hl7VSDispenseMethodCode];
