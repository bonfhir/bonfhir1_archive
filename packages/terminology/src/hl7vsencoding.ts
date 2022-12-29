/**
 * Concept identifying the type of IETF encoding used to represent successive octets of binary data as displayable ASCII characters.
 * http://terminology.hl7.org/ValueSet/v2-0299
 */
export const Hl7VSEncodingCode = {
  /**
   * No encoding - data are displayable ASCII characters.
   */
  NoencodingdataaredisplayableASCIIcharacters: "A",

  /**
   * Hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets.
   */
  Hexadecimalencodingconsecutivepairsofhexadecimaldigitsrepresentconsecutivesingleoctets:
    "Hex",

  /**
   * Encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521. Four consecutive ASCII characters represent three consecutive octets of binary data. Base64 utilizes a 65-character subset of US-ASCII, consisting of both the upper and
   */
  EncodingasdefinedbyMIMEMultipurposeInternetMailExtensionsstandardRFC1521FourconsecutiveASCIIcharactersrepresentthreeconsecutiveoctetsofbinarydataBase64utilizesa65charactersubsetofUSASCIIconsistingofboththeupperand:
    "Base64",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEncodingCode =
  typeof Hl7VSEncodingCode[keyof typeof Hl7VSEncodingCode];
