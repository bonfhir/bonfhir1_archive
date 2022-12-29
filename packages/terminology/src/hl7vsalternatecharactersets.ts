/**
 * Value Set of codes that identify one of a number of possible standard alternate character sets for a message, either single-byte or double-byte.
 * http://terminology.hl7.org/ValueSet/v2-0211
 */
export const Hl7VSAlternateCharacterSetsCode = {
  /**
   * A subset of ISO2020 used for most Kanjii transmissions
   */
  AsubsetofISO2020usedformostKanjiitransmissions: "JAS2020",

  /**
   * ISO 2022 with escape sequences for Kanjii
   */
  ISO2022withescapesequencesforKanjii: "JIS X 0202",

  /**
   * The printable 7-bit ASCII character set.
   */
  Theprintable7bitASCIIcharacterset: "ASCII",

  /**
   * The printable characters from the ISO 8859/1 Character set
   */
  TheprintablecharactersfromtheISO88591Characterset: "8859/1",

  /**
   * The printable characters from the ISO 8859/2 Character set
   */
  TheprintablecharactersfromtheISO88592Characterset: "8859/2",

  /**
   * The printable characters from the ISO 8859/3 Character set
   */
  TheprintablecharactersfromtheISO88593Characterset: "8859/3",

  /**
   * The printable characters from the ISO 8859/4 Character set
   */
  TheprintablecharactersfromtheISO88594Characterset: "8859/4",

  /**
   * The printable characters from the ISO 8859/5 Character set
   */
  TheprintablecharactersfromtheISO88595Characterset: "8859/5",

  /**
   * The printable characters from the ISO 8859/6 Character set
   */
  TheprintablecharactersfromtheISO88596Characterset: "8859/6",

  /**
   * The printable characters from the ISO 8859/7 Character set
   */
  TheprintablecharactersfromtheISO88597Characterset: "8859/7",

  /**
   * The printable characters from the ISO 8859/8 Character set
   */
  TheprintablecharactersfromtheISO88598Characterset: "8859/8",

  /**
   * The printable characters from the ISO 8859/9 Character set
   */
  TheprintablecharactersfromtheISO88599Characterset: "8859/9",

  /**
   * The printable characters from the ISO 8859/15 (Latin-15)
   */
  TheprintablecharactersfromtheISO885915Latin15: "8859/15",

  /**
   * ASCII graphic character set consisting of 94 characters.
   */
  ASCIIgraphiccharactersetconsistingof94characters: "ISO IR6",

  /**
   * Code for Information Exchange (one byte)(JIS X 0201-1976).
   */
  CodeforInformationExchangeonebyteJISX02011976: "ISO IR14",

  /**
   * Code for the Japanese Graphic Character set for information interchange (JIS X 0208-1990),
   */
  CodefortheJapaneseGraphicCharactersetforinformationinterchangeJISX02081990:
    "ISO IR87",

  /**
   * Code of the supplementary Japanese Graphic Character set for information interchange (JIS X 0212-1990).
   */
  CodeofthesupplementaryJapaneseGraphicCharactersetforinformationinterchangeJISX02121990:
    "ISO IR159",

  /**
   * Code for Chinese Character Set (GB 18030-2000)
   */
  CodeforChineseCharacterSetGB180302000: "GB 18030-2000",

  /**
   * Code for Korean Character Set (KS X 1001)
   */
  CodeforKoreanCharacterSetKSX1001: "KS X 1001",

  /**
   * Code for Taiwanese Character Set (CNS 11643-1992)
   */
  CodeforTaiwaneseCharacterSetCNS116431992: "CNS 11643-1992",

  /**
   * Code for Taiwanese Character Set (BIG-5)
   */
  CodeforTaiwaneseCharacterSetBIG5: "BIG-5",

  /**
   * The world wide character standard from ISO/IEC 10646-1-1993
   */
  TheworldwidecharacterstandardfromISOIEC1064611993: "UNICODE",

  /**
   * UCS Transformation Format, 8-bit form
   */
  UCSTransformationFormat8bitform: "UNICODE UTF-8",

  /**
   * UCS Transformation Format, 16-bit form
   */
  UCSTransformationFormat16bitform: "UNICODE UTF-16",

  /**
   * UCS Transformation Format, 32-bit form
   */
  UCSTransformationFormat32bitform: "UNICODE UTF-32",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAlternateCharacterSetsCode =
  typeof Hl7VSAlternateCharacterSetsCode[keyof typeof Hl7VSAlternateCharacterSetsCode];
