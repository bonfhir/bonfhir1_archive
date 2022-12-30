/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClaimAttachmentCategoryCode
 */
export const ActClaimAttachmentCategoryCodeCode = {
  /**
   * ActClaimAttachmentCategoryCode
   */
  _ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode",

  /**
   * auto attachment
   */
  AUTOATTCH: "AUTOATTCH",

  /**
   * document
   */
  DOCUMENT: "DOCUMENT",

  /**
   * health record
   */
  HEALTHREC: "HEALTHREC",

  /**
   * image attachment
   */
  IMG: "IMG",

  /**
   * lab results
   */
  LABRESULTS: "LABRESULTS",

  /**
   * model
   */
  MODEL: "MODEL",

  /**
   * work injury report attachment
   */
  WIATTCH: "WIATTCH",

  /**
   * x-ray
   */
  XRAY: "XRAY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClaimAttachmentCategoryCodeCode =
  typeof ActClaimAttachmentCategoryCodeCode[keyof typeof ActClaimAttachmentCategoryCodeCode];
