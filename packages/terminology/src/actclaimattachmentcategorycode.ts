/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClaimAttachmentCategoryCode
 */
export const ActClaimAttachmentCategoryCodeCode = {
  /**
   * ActClaimAttachmentCategoryCode
   */
  ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode",

  /**
   * auto attachment
   */
  autoattachment: "AUTOATTCH",

  /**
   * document
   */
  document: "DOCUMENT",

  /**
   * health record
   */
  healthrecord: "HEALTHREC",

  /**
   * image attachment
   */
  imageattachment: "IMG",

  /**
   * lab results
   */
  labresults: "LABRESULTS",

  /**
   * model
   */
  model: "MODEL",

  /**
   * work injury report attachment
   */
  workinjuryreportattachment: "WIATTCH",

  /**
   * x-ray
   */
  xray: "XRAY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClaimAttachmentCategoryCodeCode =
  typeof ActClaimAttachmentCategoryCodeCode[keyof typeof ActClaimAttachmentCategoryCodeCode];
