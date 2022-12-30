/**
 * Transportation is the moving of a payload (people or material) from a location of origin to a destination location. Thus, any transport service has the three target instances of type payload, origin, and destination, besides the targets that are generally used for any service (i.e., performer, device, etc.)
 * http://terminology.hl7.org/ValueSet/v3-ActClassTransportation
 */
export const ActClassTransportationCode = {
  /**
   * transportation
   */
  TRNS: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassTransportationCode =
  typeof ActClassTransportationCode[keyof typeof ActClassTransportationCode];
