/**
 * **Description:** A rule set by regulators of product that somehow constrain the use of products. Regulator may be any organization with a mandate to issue such rules, regardless of level, regional, country, state, and local (e.g., an institutional Pharmaceutical and Treatment Committee.)

**Examples:**

 *  Prescription Only
 *  Controlled Substance Schedule II
 *  Standard of Practice
 * http://terminology.hl7.org/ValueSet/v3-RegulationPolicyActCode
 */
export const RegulationPolicyActCodeCode = {
  /**
   * non prescription medicine
   */
  OTC: "OTC",

  /**
   * prescription only medicine
   */
  RX: "RX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RegulationPolicyActCodeCode =
  typeof RegulationPolicyActCodeCode[keyof typeof RegulationPolicyActCodeCode];
