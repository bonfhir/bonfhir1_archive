/**
 * Value Set of codes that identify the mechanism of product transmission when the product has not been directly applied to the patient.
 * http://terminology.hl7.org/ValueSet/v2-0253
 */
export const Hl7VSIndirectExposureMechanismCode = {
  /**
   * Breast milk
   */
  Breastmilk: "B",

  /**
   * Transplacental
   */
  Transplacental: "P",

  /**
   * Father
   */
  Father: "F",

  /**
   * Blood product
   */
  Bloodproduct: "X",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIndirectExposureMechanismCode =
  typeof Hl7VSIndirectExposureMechanismCode[keyof typeof Hl7VSIndirectExposureMechanismCode];
