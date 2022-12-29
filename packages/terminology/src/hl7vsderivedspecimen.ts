/**
 * Value Set of codes that specify the parents and children for diagnostic studies, especially in microbiology, where the initial specimen (e.g., blood) is processed to produce results (e.g., the identity of the bacteria grown out of the culture).  The pro
 * http://terminology.hl7.org/ValueSet/v2-0170
 */
export const Hl7VSDerivedSpecimenCode = {
  /**
   * Parent Observation
   */
  ParentObservation: "P",

  /**
   * Child Observation
   */
  ChildObservation: "C",

  /**
   * Not Applicable
   */
  NotApplicable: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDerivedSpecimenCode =
  typeof Hl7VSDerivedSpecimenCode[keyof typeof Hl7VSDerivedSpecimenCode];
