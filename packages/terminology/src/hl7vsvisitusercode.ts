/**
 * Value Set of codes that specify categories of a patient's visit with respect to an individual institution's needs, and is expected to be different on a site-specific basis.
 * http://terminology.hl7.org/ValueSet/v2-0130
 */
export const Hl7VSVisitUserCodeCode = {
  /**
   * Teaching
   */
  Teaching: "TE",

  /**
   * Home
   */
  Home: "HO",

  /**
   * Mobile Unit
   */
  MobileUnit: "MO",

  /**
   * Phone
   */
  Phone: "PH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVisitUserCodeCode =
  typeof Hl7VSVisitUserCodeCode[keyof typeof Hl7VSVisitUserCodeCode];
