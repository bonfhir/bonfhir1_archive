/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 * http://terminology.hl7.org/ValueSet/testscript-profile-destination-types
 */
export const TestScriptProfileDestinationTypeCode = {
  /**
   * FHIR Server
   */
  FHIRServer: "FHIR-Server",

  /**
   * FHIR SDC FormManager
   */
  FHIRSDCFormManager: "FHIR-SDC-FormManager",

  /**
   * FHIR SDC FormProcessor
   */
  FHIRSDCFormProcessor: "FHIR-SDC-FormProcessor",

  /**
   * FHIR SDC FormReceiver
   */
  FHIRSDCFormReceiver: "FHIR-SDC-FormReceiver",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptProfileDestinationTypeCode =
  typeof TestScriptProfileDestinationTypeCode[keyof typeof TestScriptProfileDestinationTypeCode];
