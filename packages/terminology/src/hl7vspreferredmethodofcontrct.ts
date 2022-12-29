/**
 * Value Set of codes that specify which of a group of multiple phone numbers is the preferred method of contact for this person.
 * http://terminology.hl7.org/ValueSet/v2-0185
 */
export const Hl7VSPreferredMethodOfContrctCode = {
  /**
   * Beeper Number
   */
  BeeperNumber: "B",

  /**
   * Cellular Phone Number
   */
  CellularPhoneNumber: "C",

  /**
   * E-Mail Address (for backward compatibility)
   */
  EMailAddressforbackwardcompatibility: "E",

  /**
   * FAX Number
   */
  FAXNumber: "F",

  /**
   * Home Phone Number
   */
  HomePhoneNumber: "H",

  /**
   * Office Phone Number
   */
  OfficePhoneNumber: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPreferredMethodOfContrctCode =
  typeof Hl7VSPreferredMethodOfContrctCode[keyof typeof Hl7VSPreferredMethodOfContrctCode];
