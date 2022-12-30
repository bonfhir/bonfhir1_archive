/**
 * The molecule or ion that is responsible for the intended pharmacological action of the drug substance, excluding those appended or associated parts of the molecule that make the molecule an ester, salt (including a salt with hydrogen or coordination bonds), or other noncovalent derivative (such as a complex, chelate, or clathrate).

Examples: heparin-sodium and heparin-potassium have the same active moiety, heparin; the active moiety of morphine-hydrochloride is morphine.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveMoiety
 */
export const RoleClassActiveMoietyCode = {
  /**
   * active moiety
   */
  ACTM: "ACTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveMoietyCode =
  typeof RoleClassActiveMoietyCode[keyof typeof RoleClassActiveMoietyCode];
