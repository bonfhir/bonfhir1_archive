/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClaimAttachmentCategoryCode
 */
export const ActClaimAttachmentCategoryCodeCode = {
  /**
   * ActClaimAttachmentCategoryCode
   */
  _ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClaimAttachmentCategoryCodeCode =
  typeof ActClaimAttachmentCategoryCodeCode[keyof typeof ActClaimAttachmentCategoryCodeCode];
