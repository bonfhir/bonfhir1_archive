/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LabSpecimenCollectionProviders
 */
export const LabSpecimenCollectionProvidersCode = {
  /**
   * Community Laboratory
   */
  CommunityLaboratory: "communityLaboratory",

  /**
   * Home Health
   */
  HomeHealth: "homeHealth",

  /**
   * Laboratory
   */
  Laboratory: "laboratory",

  /**
   * Pathologist
   */
  Pathologist: "pathologist",

  /**
   * Phlebotomist
   */
  Phlebotomist: "phlebotomist",

  /**
   * Self
   */
  Self: "subject",

  /**
   * Third Party
   */
  ThirdParty: "thirdParty",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LabSpecimenCollectionProvidersCode =
  typeof LabSpecimenCollectionProvidersCode[keyof typeof LabSpecimenCollectionProvidersCode];
