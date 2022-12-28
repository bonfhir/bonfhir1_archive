/**
 * The set of body locations to or through which a drug product may be administered.
 * http://terminology.hl7.org/ValueSet/v3-HumanSubstanceAdministrationSite
 */
export const HumanSubstanceAdministrationSiteCode = {
  /**
   * HumanSubstanceAdministrationSite
   */
  _HumanSubstanceAdministrationSite: "_HumanSubstanceAdministrationSite",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HumanSubstanceAdministrationSiteCode =
  typeof HumanSubstanceAdministrationSiteCode[keyof typeof HumanSubstanceAdministrationSiteCode];
