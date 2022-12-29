/**
 * Value Set of codes that identify the intent for the dollar amount on a pricing transaction.
 * http://terminology.hl7.org/ValueSet/v2-0205
 */
export const Hl7VSPriceTypeCode = {
  /**
   * administrative price or handling fee
   */
  administrativepriceorhandlingfee: "AP",

  /**
   * direct unit cost
   */
  directunitcost: "DC",

  /**
   * indirect unit cost
   */
  indirectunitcost: "IC",

  /**
   * professional fee for performing provider
   */
  professionalfeeforperformingprovider: "PF",

  /**
   * technology fee for use of equipment
   */
  technologyfeeforuseofequipment: "TF",

  /**
   * total price
   */
  totalprice: "TP",

  /**
   * unit price, may be based on length of procedure or service
   */
  unitpricemaybebasedonlengthofprocedureorservice: "UP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPriceTypeCode =
  typeof Hl7VSPriceTypeCode[keyof typeof Hl7VSPriceTypeCode];
