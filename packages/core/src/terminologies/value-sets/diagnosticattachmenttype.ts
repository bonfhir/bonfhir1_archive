/**
 * Diagnostic Attachment Type codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182836005 (Review of medication (procedure)) or is-a 404684003 (Clinical finding (finding))
 * http://hl7.org/fhir/ValueSet/diagnostic-based-on-snomed
 */
export const DiagnosticAttachmentTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosticAttachmentTypeCode =
  typeof DiagnosticAttachmentTypeCode[keyof typeof DiagnosticAttachmentTypeCode];
