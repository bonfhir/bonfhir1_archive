/**
 * Value Set of codes that identify the type of entity to which the event has been reported.
 * http://terminology.hl7.org/ValueSet/v2-0236
 */
export const Hl7VSEventReportedToCode = {
  /**
   * Manufacturer
   */
  Manufacturer: "M",

  /**
   * Local facility/user facility
   */
  Localfacilityuserfacility: "L",

  /**
   * Regulatory agency
   */
  Regulatoryagency: "R",

  /**
   * Distributor
   */
  Distributor: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventReportedToCode =
  typeof Hl7VSEventReportedToCode[keyof typeof Hl7VSEventReportedToCode];
