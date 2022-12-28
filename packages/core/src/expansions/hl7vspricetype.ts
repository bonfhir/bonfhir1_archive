/**
 * Value Set of codes that identify the intent for the dollar amount on a pricing transaction.
 * http://terminology.hl7.org/ValueSet/v2-0205
 */
export const Hl7VSPriceTypeCode = {
  /**
   * administrative price or handling fee
   */
  AP: "AP",

  /**
   * direct unit cost
   */
  DC: "DC",

  /**
   * indirect unit cost
   */
  IC: "IC",

  /**
   * professional fee for performing provider
   */
  PF: "PF",

  /**
   * technology fee for use of equipment
   */
  TF: "TF",

  /**
   * total price
   */
  TP: "TP",

  /**
   * unit price, may be based on length of procedure or service
   */
  UP: "UP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPriceTypeCode =
  typeof Hl7VSPriceTypeCode[keyof typeof Hl7VSPriceTypeCode];
