/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LabSpecimenCollectionProviders
 */
export const LabSpecimenCollectionProvidersCode = {
  /**
   * Community Laboratory
   */
  communityLaboratory: "communityLaboratory",

  /**
   * Home Health
   */
  homeHealth: "homeHealth",

  /**
   * Laboratory
   */
  laboratory: "laboratory",

  /**
   * Pathologist
   */
  pathologist: "pathologist",

  /**
   * Phlebotomist
   */
  phlebotomist: "phlebotomist",

  /**
   * Self
   */
  subject: "subject",

  /**
   * Third Party
   */
  thirdParty: "thirdParty",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LabSpecimenCollectionProvidersCode =
  typeof LabSpecimenCollectionProvidersCode[keyof typeof LabSpecimenCollectionProvidersCode];
