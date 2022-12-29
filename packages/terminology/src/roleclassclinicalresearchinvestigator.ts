/**
 * A role played by a provider, always a person, who has agency authority from a Clinical Research Sponsor to direct the conduct of a clinical research trial or study on behalf of the sponsor.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassClinicalResearchInvestigator
 */
export const RoleClassClinicalResearchInvestigatorCode = {
  /**
   * clinical research investigator
   */
  clinicalresearchinvestigator: "CRINV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassClinicalResearchInvestigatorCode =
  typeof RoleClassClinicalResearchInvestigatorCode[keyof typeof RoleClassClinicalResearchInvestigatorCode];
