/**
 * Concepts that specify the scheme used when any alternative character sets are specified in the second or later iterations of MSH-18 Character Set, and if any special handling scheme is needed.
 * http://terminology.hl7.org/ValueSet/v2-0356
 */
export const Hl7VSAlternateCharacterSetHandlingSchemeCode = {
  /**
   * This standard is titled "Information Technology - Character Code Structure and Extension Technique". .
   */
  ThisstandardistitledInformationTechnologyCharacterCodeStructureandExtensionTechnique:
    "ISO 2022-1994",

  /**
   * The character set switching mode specified in HL7 2.5, section 2.7.2 and section 2.A.46, "XPN - extended person name".
   */
  ThecharactersetswitchingmodespecifiedinHL725section272andsection2A46XPNextendedpersonname:
    "2.3",

  /**
   * This is the default, indicating that there is no character set switching occurring in this message.
   */
  Thisisthedefaultindicatingthatthereisnocharactersetswitchingoccurringinthismessage:
    "<null>",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAlternateCharacterSetHandlingSchemeCode =
  typeof Hl7VSAlternateCharacterSetHandlingSchemeCode[keyof typeof Hl7VSAlternateCharacterSetHandlingSchemeCode];
