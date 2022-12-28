/**
 * **Description:** All coded binding realms for terminology constraint context binding.
 * http://terminology.hl7.org/ValueSet/v3-BindingRealm
 */
export const BindingRealmCode = {
  /**
   * binding realms
   */
  BindingRealms: "BindingRealms",

  /**
   * Affiliate Realms
   */
  AffiliateRealms: "AffiliateRealms",

  /**
   * Argentina
   */
  AR: "AR",

  /**
   * Austria
   */
  AT: "AT",

  /**
   * Australia
   */
  AU: "AU",

  /**
   * Brazil
   */
  BR: "BR",

  /**
   * Canada
   */
  CA: "CA",

  /**
   * Switzerland
   */
  CH: "CH",

  /**
   * Chile
   */
  CL: "CL",

  /**
   * China
   */
  CN: "CN",

  /**
   * Columbia
   */
  CO: "CO",

  /**
   * Czech Republic
   */
  CZ: "CZ",

  /**
   * Germany
   */
  DE: "DE",

  /**
   * Denmark
   */
  DK: "DK",

  /**
   * Spain
   */
  ES: "ES",

  /**
   * Finland
   */
  FI: "FI",

  /**
   * France
   */
  FR: "FR",

  /**
   * Greece
   */
  GR: "GR",

  /**
   * Croatia
   */
  HR: "HR",

  /**
   * Ireland
   */
  IE: "IE",

  /**
   * India
   */
  IN: "IN",

  /**
   * Italy
   */
  IT: "IT",

  /**
   * Japan
   */
  JP: "JP",

  /**
   * Korea
   */
  KR: "KR",

  /**
   * Lithuania
   */
  LT: "LT",

  /**
   * Mexico
   */
  MX: "MX",

  /**
   * The Netherlands
   */
  NL: "NL",

  /**
   * New Zealand
   */
  NZ: "NZ",

  /**
   * Romania
   */
  RO: "RO",

  /**
   * Russian Federation
   */
  RU: "RU",

  /**
   * Sweden
   */
  SE: "SE",

  /**
   * Singapore
   */
  SG: "SG",

  /**
   * Southern Africa
   */
  SOA: "SOA",

  /**
   * Turkey
   */
  TR: "TR",

  /**
   * Taiwan
   */
  TW: "TW",

  /**
   * United Kingdom
   */
  UK: "UK",

  /**
   * United States of America
   */
  US: "US",

  /**
   * Universal
   */
  UV: "UV",

  /**
   * Uruguay
   */
  UY: "UY",

  /**
   * Unclassified Realm
   */
  C1: "C1",

  /**
   * Great Britain
   */
  GB: "GB",

  /**
   * Representative Realm
   */
  R1: "R1",

  /**
   * Example Realm
   */
  X1: "X1",

  /**
   * namespace realms
   */
  NamespaceRealms: "NamespaceRealms",

  /**
   * Localized Version
   */
  ZZ: "ZZ",

  /**
   * Special Realms
   */
  SpecialRealms: "SpecialRealms",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BindingRealmCode =
  typeof BindingRealmCode[keyof typeof BindingRealmCode];
