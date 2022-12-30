/**
 * Value Set of codes that specify the calculation method used to determine the resupply schedule.
 * http://terminology.hl7.org/ValueSet/v2-0642
 */
export const Hl7VSReorderTheoryCodesCode = {
  /**
   * DOP/DOQ
   */
  D: "D",

  /**
   * MIN/MAX
   */
  M: "M",

  /**
   * Override
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReorderTheoryCodesCode =
  typeof Hl7VSReorderTheoryCodesCode[keyof typeof Hl7VSReorderTheoryCodesCode];
