/**
 * A Universal Resource Locator (URL) is a type of telecommunications address specified as Internet standard RFC 1738 \[http://www.ietf.org/rfc/rfc1738.txt\]. The URL specifies the protocol and the contact point defined by that protocol for the resource.
 * http://terminology.hl7.org/ValueSet/v3-URLScheme
 */
export const URLSchemeCode = {
  /**
   * Content ID
   */
  cid: "cid",

  /**
   * File
   */
  file: "file",

  /**
   * FTP
   */
  ftp: "ftp",

  /**
   * HL7 Attachment
   */
  "hl7-att": "hl7-att",

  /**
   * HTTP
   */
  http: "http",

  /**
   * Mailto
   */
  mailto: "mailto",

  /**
   * MLLP
   */
  mllp: "mllp",

  /**
   * NFS
   */
  nfs: "nfs",

  /**
   * Telephone
   */
  tel: "tel",

  /**
   * Telnet
   */
  telnet: "telnet",

  /**
   * Fax
   */
  fax: "fax",

  /**
   * Modem
   */
  modem: "modem",

  /**
   * Fax
   */
  "x-text-fax": "x-text-fax",

  /**
   * Text Telephone
   */
  "x-text-tel": "x-text-tel",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type URLSchemeCode = typeof URLSchemeCode[keyof typeof URLSchemeCode];
