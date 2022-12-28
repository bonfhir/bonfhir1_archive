/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 * http://hl7.org/fhir/ValueSet/doc-classcodes
 */
export const DocumentClassValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentClassValueSetCode =
  typeof DocumentClassValueSetCode[keyof typeof DocumentClassValueSetCode];
