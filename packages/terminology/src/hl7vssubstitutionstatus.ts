/**
 * Value Set of codes that specify the substitution status.
 * http://terminology.hl7.org/ValueSet/v2-0167
 */
export const Hl7VSSubstitutionStatusCode = {
  /**
   * No substitute was dispensed.  This is equivalent to the default (null) value.
   */
  NosubstitutewasdispensedThisisequivalenttothedefaultnullvalue: "N",

  /**
   * A generic substitution was dispensed.
   */
  Agenericsubstitutionwasdispensed: "G",

  /**
   * A therapeutic substitution was dispensed.
   */
  Atherapeuticsubstitutionwasdispensed: "T",

  /**
   * No product selection indicated
   */
  Noproductselectionindicated: "0",

  /**
   * Substitution not allowed by prescriber
   */
  Substitutionnotallowedbyprescriber: "1",

  /**
   * Substitution allowed - patient requested product dispensed
   */
  Substitutionallowedpatientrequestedproductdispensed: "2",

  /**
   * Substitution allowed - pharmacist selected product dispensed
   */
  Substitutionallowedpharmacistselectedproductdispensed: "3",

  /**
   * Substitution allowed - generic drug not in stock
   */
  Substitutionallowedgenericdrugnotinstock: "4",

  /**
   * Substitution allowed - brand drug dispensed as a generic
   */
  Substitutionallowedbranddrugdispensedasageneric: "5",

  /**
   * Substitution not allowed - brand drug mandated by law
   */
  Substitutionnotallowedbranddrugmandatedbylaw: "7",

  /**
   * Substitution allowed - generic drug not available in marketplace
   */
  Substitutionallowedgenericdrugnotavailableinmarketplace: "8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstitutionStatusCode =
  typeof Hl7VSSubstitutionStatusCode[keyof typeof Hl7VSSubstitutionStatusCode];
