/**
 * Value Set of codes specifying the status of a shipment.
 * http://terminology.hl7.org/ValueSet/v2-0905
 */
export const Hl7VSShipmentStatusCode = {
  /**
   * On Hold
   */
  ONH: "ONH",

  /**
   * Inventoried
   */
  INV: "INV",

  /**
   * Processing
   */
  PRC: "PRC",

  /**
   * Rejected
   */
  REJ: "REJ",

  /**
   * Triaged to Lab
   */
  TTL: "TTL",

  /**
   * In Transit
   */
  TRN: "TRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSShipmentStatusCode =
  typeof Hl7VSShipmentStatusCode[keyof typeof Hl7VSShipmentStatusCode];
