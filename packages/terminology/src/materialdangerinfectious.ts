/**
 * Material known to be infectious with human pathogenic microorganisms. Those who handle this material must take precautions for their protection.
 * http://terminology.hl7.org/ValueSet/v3-MaterialDangerInfectious
 */
export const MaterialDangerInfectiousCode = {
  /**
   * infectious
   */
  infectious: "INF",

  /**
   * biohazard
   */
  biohazard: "BHZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaterialDangerInfectiousCode =
  typeof MaterialDangerInfectiousCode[keyof typeof MaterialDangerInfectiousCode];
