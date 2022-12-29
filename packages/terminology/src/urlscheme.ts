/**
 * A Universal Resource Locator (URL) is a type of telecommunications address specified as Internet standard RFC 1738 \[http://www.ietf.org/rfc/rfc1738.txt\]. The URL specifies the protocol and the contact point defined by that protocol for the resource.
 * http://terminology.hl7.org/ValueSet/v3-URLScheme
 */
export const URLSchemeCode = {
  /**
   * Content ID
   */
  ContentID: "cid",

  /**
   * File
   */
  File: "file",

  /**
   * FTP
   */
  FTP: "ftp",

  /**
   * HL7 Attachment
   */
  HL7Attachment: "hl7-att",

  /**
   * HTTP
   */
  HTTP: "http",

  /**
   * Mailto
   */
  Mailto: "mailto",

  /**
   * MLLP
   */
  MLLP: "mllp",

  /**
   * NFS
   */
  NFS: "nfs",

  /**
   * Telephone
   */
  Telephone: "tel",

  /**
   * Telnet
   */
  Telnet: "telnet",

  /**
   * Fax
   */
  Fax: "fax",

  /**
   * Modem
   */
  Modem: "modem",

  /**
   * Fax
   */
  Fax: "x-text-fax",

  /**
   * Text Telephone
   */
  TextTelephone: "x-text-tel",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type URLSchemeCode = typeof URLSchemeCode[keyof typeof URLSchemeCode];
