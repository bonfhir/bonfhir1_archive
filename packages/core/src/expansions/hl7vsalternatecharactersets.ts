/**
 * Value Set of codes that identify one of a number of possible standard alternate character sets for a message, either single-byte or double-byte.
 * http://terminology.hl7.org/ValueSet/v2-0211
 */
export const Hl7VSAlternateCharacterSetsCode = {
  /**
   * A subset of ISO2020 used for most Kanjii transmissions
   */
  JAS2020: "JAS2020",

  /**
   * ISO 2022 with escape sequences for Kanjii
   */
  "JIS X 0202": "JIS X 0202",

  /**
   * The printable 7-bit ASCII character set.
   */
  ASCII: "ASCII",

  /**
   * The printable characters from the ISO 8859/1 Character set
   */
  "8859/1": "8859/1",

  /**
   * The printable characters from the ISO 8859/2 Character set
   */
  "8859/2": "8859/2",

  /**
   * The printable characters from the ISO 8859/3 Character set
   */
  "8859/3": "8859/3",

  /**
   * The printable characters from the ISO 8859/4 Character set
   */
  "8859/4": "8859/4",

  /**
   * The printable characters from the ISO 8859/5 Character set
   */
  "8859/5": "8859/5",

  /**
   * The printable characters from the ISO 8859/6 Character set
   */
  "8859/6": "8859/6",

  /**
   * The printable characters from the ISO 8859/7 Character set
   */
  "8859/7": "8859/7",

  /**
   * The printable characters from the ISO 8859/8 Character set
   */
  "8859/8": "8859/8",

  /**
   * The printable characters from the ISO 8859/9 Character set
   */
  "8859/9": "8859/9",

  /**
   * The printable characters from the ISO 8859/15 (Latin-15)
   */
  "8859/15": "8859/15",

  /**
   * ASCII graphic character set consisting of 94 characters.
   */
  "ISO IR6": "ISO IR6",

  /**
   * Code for Information Exchange (one byte)(JIS X 0201-1976).
   */
  "ISO IR14": "ISO IR14",

  /**
   * Code for the Japanese Graphic Character set for information interchange (JIS X 0208-1990),
   */
  "ISO IR87": "ISO IR87",

  /**
   * Code of the supplementary Japanese Graphic Character set for information interchange (JIS X 0212-1990).
   */
  "ISO IR159": "ISO IR159",

  /**
   * Code for Chinese Character Set (GB 18030-2000)
   */
  "GB 18030-2000": "GB 18030-2000",

  /**
   * Code for Korean Character Set (KS X 1001)
   */
  "KS X 1001": "KS X 1001",

  /**
   * Code for Taiwanese Character Set (CNS 11643-1992)
   */
  "CNS 11643-1992": "CNS 11643-1992",

  /**
   * Code for Taiwanese Character Set (BIG-5)
   */
  "BIG-5": "BIG-5",

  /**
   * The world wide character standard from ISO/IEC 10646-1-1993
   */
  UNICODE: "UNICODE",

  /**
   * UCS Transformation Format, 8-bit form
   */
  "UNICODE UTF-8": "UNICODE UTF-8",

  /**
   * UCS Transformation Format, 16-bit form
   */
  "UNICODE UTF-16": "UNICODE UTF-16",

  /**
   * UCS Transformation Format, 32-bit form
   */
  "UNICODE UTF-32": "UNICODE UTF-32",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAlternateCharacterSetsCode =
  typeof Hl7VSAlternateCharacterSetsCode[keyof typeof Hl7VSAlternateCharacterSetsCode];
