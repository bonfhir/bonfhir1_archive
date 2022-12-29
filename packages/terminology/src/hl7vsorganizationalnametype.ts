/**
 * Concepts used to specify the type of name for an organization i.e., legal name, display name.
 * http://terminology.hl7.org/ValueSet/v2-0204
 */
export const Hl7VSOrganizationalNameTypeCode = {
  /**
   * Alias name
   */
  Aliasname: "A",

  /**
   * Legal name
   */
  Legalname: "L",

  /**
   * Display name
   */
  Displayname: "D",

  /**
   * Stock exchange listing name
   */
  Stockexchangelistingname: "SL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationalNameTypeCode =
  typeof Hl7VSOrganizationalNameTypeCode[keyof typeof Hl7VSOrganizationalNameTypeCode];
