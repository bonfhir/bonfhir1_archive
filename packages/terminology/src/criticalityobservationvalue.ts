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
  CRITH: "CRITH",

  /**
   * low criticality
   */
  CRITL: "CRITL",

  /**
   * unable to assess criticality
   */
  CRITU: "CRITU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CriticalityObservationValueCode =
  typeof CriticalityObservationValueCode[keyof typeof CriticalityObservationValueCode];
