/**
 * Value Set of codes that specify the date format for a decontamination/sterilization instance.
 * http://terminology.hl7.org/ValueSet/v2-0653
 */
export const Hl7VSDateFormatCode = {
  /**
   * mm/dd/yy
   */
  "1": "1",

  /**
   * yy.mm.dd
   */
  "2": "2",

  /**
   * dd/mm/yy
   */
  "3": "3",

  /**
   * dd.mm.yy
   */
  "4": "4",

  /**
   * yy/mm/dd
   */
  "5": "5",

  /**
   * Yymmdd
   */
  "6": "6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDateFormatCode =
  typeof Hl7VSDateFormatCode[keyof typeof Hl7VSDateFormatCode];
