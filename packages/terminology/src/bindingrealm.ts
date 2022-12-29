/**
 * **Description:** All coded binding realms for terminology constraint context binding.
 * http://terminology.hl7.org/ValueSet/v3-BindingRealm
 */
export const BindingRealmCode = {
  /**
   * binding realms
   */
  bindingrealms: "BindingRealms",

  /**
   * Affiliate Realms
   */
  AffiliateRealms: "AffiliateRealms",

  /**
   * Argentina
   */
  Argentina: "AR",

  /**
   * Austria
   */
  Austria: "AT",

  /**
   * Australia
   */
  Australia: "AU",

  /**
   * Brazil
   */
  Brazil: "BR",

  /**
   * Canada
   */
  Canada: "CA",

  /**
   * Switzerland
   */
  Switzerland: "CH",

  /**
   * Chile
   */
  Chile: "CL",

  /**
   * China
   */
  China: "CN",

  /**
   * Columbia
   */
  Columbia: "CO",

  /**
   * Czech Republic
   */
  CzechRepublic: "CZ",

  /**
   * Germany
   */
  Germany: "DE",

  /**
   * Denmark
   */
  Denmark: "DK",

  /**
   * Spain
   */
  Spain: "ES",

  /**
   * Finland
   */
  Finland: "FI",

  /**
   * France
   */
  France: "FR",

  /**
   * Greece
   */
  Greece: "GR",

  /**
   * Croatia
   */
  Croatia: "HR",

  /**
   * Ireland
   */
  Ireland: "IE",

  /**
   * India
   */
  India: "IN",

  /**
   * Italy
   */
  Italy: "IT",

  /**
   * Japan
   */
  Japan: "JP",

  /**
   * Korea
   */
  Korea: "KR",

  /**
   * Lithuania
   */
  Lithuania: "LT",

  /**
   * Mexico
   */
  Mexico: "MX",

  /**
   * The Netherlands
   */
  TheNetherlands: "NL",

  /**
   * New Zealand
   */
  NewZealand: "NZ",

  /**
   * Romania
   */
  Romania: "RO",

  /**
   * Russian Federation
   */
  RussianFederation: "RU",

  /**
   * Sweden
   */
  Sweden: "SE",

  /**
   * Singapore
   */
  Singapore: "SG",

  /**
   * Southern Africa
   */
  SouthernAfrica: "SOA",

  /**
   * Turkey
   */
  Turkey: "TR",

  /**
   * Taiwan
   */
  Taiwan: "TW",

  /**
   * United Kingdom
   */
  UnitedKingdom: "UK",

  /**
   * United States of America
   */
  UnitedStatesofAmerica: "US",

  /**
   * Universal
   */
  Universal: "UV",

  /**
   * Uruguay
   */
  Uruguay: "UY",

  /**
   * Unclassified Realm
   */
  UnclassifiedRealm: "C1",

  /**
   * Great Britain
   */
  GreatBritain: "GB",

  /**
   * Representative Realm
   */
  RepresentativeRealm: "R1",

  /**
   * Example Realm
   */
  ExampleRealm: "X1",

  /**
   * namespace realms
   */
  namespacerealms: "NamespaceRealms",

  /**
   * Localized Version
   */
  LocalizedVersion: "ZZ",

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
