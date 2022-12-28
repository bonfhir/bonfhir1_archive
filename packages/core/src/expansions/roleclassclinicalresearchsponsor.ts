/**
 * A role played by an entity, usually an organization, that is the sponsor of a clinical research trial or study. The sponsor commissions the study, bears the expenses, is responsible for satisfying all legal requirements concerning subject safety and privacy, and is generally responsible for collection, storage and analysis of the data generated during the trial. No scoper is necessary, as a clinical research sponsor undertakes the role on its own authority and declaration. Clinical research sponsors are usually educational or other research organizations, government agencies or biopharmaceutical companies.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassClinicalResearchSponsor
 */
export const RoleClassClinicalResearchSponsorCode = {
  /**
   * clinical research sponsor
   */
  CRSPNSR: "CRSPNSR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassClinicalResearchSponsorCode =
  typeof RoleClassClinicalResearchSponsorCode[keyof typeof RoleClassClinicalResearchSponsorCode];
