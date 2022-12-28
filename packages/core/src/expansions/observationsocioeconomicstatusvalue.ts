/**
 * Code specifying observations or indicators related to socio-economic status used to assess to assess for services, e.g., discharge planning, or to establish eligibility for coverage under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ObservationSocioEconomicStatusValue
 */
export const ObservationSocioEconomicStatusValueCode = {
  /**
   * socio economic status
   */
  SOECSTAT: "SOECSTAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationSocioEconomicStatusValueCode =
  typeof ObservationSocioEconomicStatusValueCode[keyof typeof ObservationSocioEconomicStatusValueCode];
