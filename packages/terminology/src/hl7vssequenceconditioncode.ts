/**
 * Value Set of codes that specify the relationship between the start/end of the related service request(s) and the current service request.
 * http://terminology.hl7.org/ValueSet/v2-0504
 */
export const Hl7VSSequenceConditionCodeCode = {
  /**
   * End related service request(s), end current service request.
   */
  Endrelatedservicerequestsendcurrentservicerequest: "EE",

  /**
   * End related service request(s), start current service request.
   */
  Endrelatedservicerequestsstartcurrentservicerequest: "ES",

  /**
   * Start related service request(s), start current service request.
   */
  Startrelatedservicerequestsstartcurrentservicerequest: "SS",

  /**
   * Start related service request(s), end current service request.
   */
  Startrelatedservicerequestsendcurrentservicerequest: "SE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequenceConditionCodeCode =
  typeof Hl7VSSequenceConditionCodeCode[keyof typeof Hl7VSSequenceConditionCodeCode];
