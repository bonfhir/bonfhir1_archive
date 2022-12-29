/**
 * Recommended values for criticality observations

>

*Steward:* Security WG
 * http://terminology.hl7.org/ValueSet/v3-CriticalityObservationValue
 */
export const CriticalityObservationValueCode = {
  /**
   * high criticality
   */
  highcriticality: "CRITH",

  /**
   * low criticality
   */
  lowcriticality: "CRITL",

  /**
   * unable to assess criticality
   */
  unabletoassesscriticality: "CRITU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CriticalityObservationValueCode =
  typeof CriticalityObservationValueCode[keyof typeof CriticalityObservationValueCode];
