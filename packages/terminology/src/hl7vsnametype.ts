/**
 * Concepts for types of names for persons.
 * http://terminology.hl7.org/ValueSet/v2-0200
 */
export const Hl7VSNameTypeCode = {
  /**
   * Other
   */
  Other: "O",

  /**
   * Assigned
   */
  Assigned: "A",

  /**
   * Birth name
   */
  Birthname: "B",

  /**
   * Bad Name
   */
  BadName: "BAD",

  /**
   * Adopted Name
   */
  AdoptedName: "C",

  /**
   * Customary Name
   */
  CustomaryName: "D",

  /**
   * Fathers Name
   */
  FathersName: "F",

  /**
   * Licensing Name
   */
  LicensingName: "I",

  /**
   * Business name
   */
  Businessname: "K",

  /**
   * Official Registry Name
   */
  OfficialRegistryName: "L",

  /**
   * Maiden Name
   */
  MaidenName: "M",

  /**
   * Masked
   */
  Masked: "MSK",

  /**
   * Nickname
   */
  Nickname: "N",

  /**
   * Temporarily Unavailable
   */
  TemporarilyUnavailable: "NAV",

  /**
   * Newborn Name
   */
  NewbornName: "NB",

  /**
   * No Longer To Be Used
   */
  NoLongerToBeUsed: "NOUSE",

  /**
   * Name of Partner/Spouse
   */
  NameofPartnerSpouse: "P",

  /**
   * Registered Name
   */
  RegisteredName: "R",

  /**
   * Religious
   */
  Religious: "REL",

  /**
   * Pseudonym
   */
  Pseudonym: "S",

  /**
   * Indigenous/Tribal
   */
  IndigenousTribal: "T",

  /**
   * Temporary Name
   */
  TemporaryName: "TEMP",

  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * No suggested values defined
   */
  Nosuggestedvaluesdefined: "...",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNameTypeCode =
  typeof Hl7VSNameTypeCode[keyof typeof Hl7VSNameTypeCode];
