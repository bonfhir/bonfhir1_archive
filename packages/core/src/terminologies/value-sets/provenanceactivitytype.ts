/**
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 * http://hl7.org/fhir/ValueSet/provenance-activity-type
 */
export const ProvenanceActivityTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceActivityTypeCode =
  typeof ProvenanceActivityTypeCode[keyof typeof ProvenanceActivityTypeCode];
