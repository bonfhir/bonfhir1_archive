/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 * http://terminology.hl7.org/ValueSet/endpoint-connection-type
 */
export const EndpointConnectionTypeCode = {
  /**
   * DICOM WADO-RS
   */
  "dicom-wado-rs": "dicom-wado-rs",

  /**
   * DICOM QIDO-RS
   */
  "dicom-qido-rs": "dicom-qido-rs",

  /**
   * DICOM STOW-RS
   */
  "dicom-stow-rs": "dicom-stow-rs",

  /**
   * DICOM WADO-URI
   */
  "dicom-wado-uri": "dicom-wado-uri",

  /**
   * HL7 FHIR
   */
  "hl7-fhir-rest": "hl7-fhir-rest",

  /**
   * HL7 FHIR Messaging
   */
  "hl7-fhir-msg": "hl7-fhir-msg",

  /**
   * HL7 v2 MLLP
   */
  "hl7v2-mllp": "hl7v2-mllp",

  /**
   * Secure email
   */
  "secure-email": "secure-email",

  /**
   * Direct Project
   */
  "direct-project": "direct-project",

  /**
   * CDS Hooks Service
   */
  "cds-hooks-service": "cds-hooks-service",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndpointConnectionTypeCode =
  typeof EndpointConnectionTypeCode[keyof typeof EndpointConnectionTypeCode];
