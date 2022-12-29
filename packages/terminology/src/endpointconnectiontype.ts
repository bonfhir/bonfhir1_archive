/**
 * This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.
 * http://terminology.hl7.org/ValueSet/endpoint-connection-type
 */
export const EndpointConnectionTypeCode = {
  /**
   * DICOM WADO-RS
   */
  DICOMWADORS: "dicom-wado-rs",

  /**
   * DICOM QIDO-RS
   */
  DICOMQIDORS: "dicom-qido-rs",

  /**
   * DICOM STOW-RS
   */
  DICOMSTOWRS: "dicom-stow-rs",

  /**
   * DICOM WADO-URI
   */
  DICOMWADOURI: "dicom-wado-uri",

  /**
   * HL7 FHIR
   */
  HL7FHIR: "hl7-fhir-rest",

  /**
   * HL7 FHIR Messaging
   */
  HL7FHIRMessaging: "hl7-fhir-msg",

  /**
   * HL7 v2 MLLP
   */
  HL7v2MLLP: "hl7v2-mllp",

  /**
   * Secure email
   */
  Secureemail: "secure-email",

  /**
   * Direct Project
   */
  DirectProject: "direct-project",

  /**
   * CDS Hooks Service
   */
  CDSHooksService: "cds-hooks-service",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EndpointConnectionTypeCode =
  typeof EndpointConnectionTypeCode[keyof typeof EndpointConnectionTypeCode];
