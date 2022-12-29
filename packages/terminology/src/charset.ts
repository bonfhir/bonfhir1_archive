/**
 * Internet Assigned Numbers Authority (IANA) Charset Types
 * http://terminology.hl7.org/ValueSet/v3-Charset
 */
export const CharsetCode = {
  /**
   * EBCDIC
   */
  EBCDIC: "EBCDIC",

  /**
   * ISO-10646-UCS-2
   */
  ISO10646UCS2: "ISO-10646-UCS-2",

  /**
   * ISO-10646-UCS-4
   */
  ISO10646UCS4: "ISO-10646-UCS-4",

  /**
   * ISO-8859-1
   */
  ISO88591: "ISO-8859-1",

  /**
   * ISO-8859-2
   */
  ISO88592: "ISO-8859-2",

  /**
   * ISO-8859-5
   */
  ISO88595: "ISO-8859-5",

  /**
   * JIS-2022-JP
   */
  JIS2022JP: "JIS-2022-JP",

  /**
   * US-ASCII
   */
  USASCII: "US-ASCII",

  /**
   * UTF-7
   */
  UTF7: "UTF-7",

  /**
   * UTF-8
   */
  UTF8: "UTF-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CharsetCode = typeof CharsetCode[keyof typeof CharsetCode];
