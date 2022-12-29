/**
 * Value Set of codes specifying the status of a shipment.
 * http://terminology.hl7.org/ValueSet/v2-0905
 */
export const Hl7VSShipmentStatusCode = {
  /**
   * On Hold
   */
  OnHold: "ONH",

  /**
   * Inventoried
   */
  Inventoried: "INV",

  /**
   * Processing
   */
  Processing: "PRC",

  /**
   * Rejected
   */
  Rejected: "REJ",

  /**
   * Triaged to Lab
   */
  TriagedtoLab: "TTL",

  /**
   * In Transit
   */
  InTransit: "TRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSShipmentStatusCode =
  typeof Hl7VSShipmentStatusCode[keyof typeof Hl7VSShipmentStatusCode];
