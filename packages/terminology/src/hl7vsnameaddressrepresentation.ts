/**
 * Value Set of codes that provide an indication of the kind of representation provided by a name or address, but does not necessarily specify the character sets used for the data.  It is used to provides hints for a receiver, so it can make choic
 * http://terminology.hl7.org/ValueSet/v2-4000
 */
export const Hl7VSNameAddressRepresentationCode = {
  /**
   * Ideographic (i.e., Kanji)
   */
  IdeographicieKanji: "I",

  /**
   * Alphabetic (i.e., Default or some single-byte)
   */
  AlphabeticieDefaultorsomesinglebyte: "A",

  /**
   * Phonetic (i.e., ASCII, Katakana, Hiragana, etc.)
   */
  PhoneticieASCIIKatakanaHiraganaetc: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNameAddressRepresentationCode =
  typeof Hl7VSNameAddressRepresentationCode[keyof typeof Hl7VSNameAddressRepresentationCode];
