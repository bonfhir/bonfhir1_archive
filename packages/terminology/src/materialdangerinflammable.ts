/**
 * Material is highly inflammable and in certain mixtures (with air) may lead to explosions. Keep away from fire, sparks and excessive heat.
 * http://terminology.hl7.org/ValueSet/v3-MaterialDangerInflammable
 */
export const MaterialDangerInflammableCode = {
  /**
   * inflammable
   */
  IFL: "IFL",

  /**
   * explosive
   */
  EXP: "EXP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaterialDangerInflammableCode =
  typeof MaterialDangerInflammableCode[keyof typeof MaterialDangerInflammableCode];
