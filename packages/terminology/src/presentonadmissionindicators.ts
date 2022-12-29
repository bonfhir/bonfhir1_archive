/**
 * Concepts that describe whether a condition is present when a patient is admitted to a healthcare facility.
 * http://terminology.hl7.org/ValueSet/POAIndicators
 */
export const PresentOnAdmissionIndicatorsCode = {
  /**
   *
   */
  Y: "Y",

  /**
   *
   */
  N: "N",

  /**
   *
   */
  U: "U",

  /**
   *
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PresentOnAdmissionIndicatorsCode =
  typeof PresentOnAdmissionIndicatorsCode[keyof typeof PresentOnAdmissionIndicatorsCode];
