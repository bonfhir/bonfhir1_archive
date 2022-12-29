/**
 * Value Set of codes that specify a location on the body where a dose is to be administered, e.g., IV, IM, Subcutaneous.
 * http://terminology.hl7.org/ValueSet/v2-0034
 */
export const Hl7VSSiteAdministeredCode = {
  /**
   * Buttock
   */
  Buttock: "B",

  /**
   * Left arm
   */
  Leftarm: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSiteAdministeredCode =
  typeof Hl7VSSiteAdministeredCode[keyof typeof Hl7VSSiteAdministeredCode];
