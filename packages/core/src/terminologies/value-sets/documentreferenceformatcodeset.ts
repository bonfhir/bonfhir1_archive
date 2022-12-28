/**
 * The value set is defined to be the set of format codes defined by the IHE Technical Framework, and also including additional format codes defined by the    HL7. The value set is listed in HITSP C80 Table 2-153 Format Code Value Set Definition,    with additions published later by IHE as published    at http://wiki.ihe.net/index.php?title=IHE_Format_Codes   and with additions published later by HL7 as published at https://confluence.hl7.org/display/SD/Format+Codes+for+IHE+XDS.   This is the code specifying the technical format of the document. Along with the typeCode,    it should provide sufficient information to allow any potential document consumer to know    if it will be able to process the document. The code shall be sufficiently specific to    ensure processing/display by identifying a document encoding, structure and template. The actual list of codes here is incomplete
 * http://hl7.org/fhir/ValueSet/formatcodes
 */
export const DocumentReferenceFormatCodeSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentReferenceFormatCodeSetCode =
  typeof DocumentReferenceFormatCodeSetCode[keyof typeof DocumentReferenceFormatCodeSetCode];
