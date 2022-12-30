/**
 * Value Set of codes specifying a communication location.
 * http://terminology.hl7.org/ValueSet/v2-0939
 */
export const Hl7VSVSCommunicationLocationCode = {
  /**
   * OBX segment following an OBR segment
   */
  "OBR-OBX": "OBR-OBX",

  /**
   * OBX segment following an SPM segment
   */
  "SPM-OBX": "SPM-OBX",

  /**
   * Diagnosis Code
   */
  "DG1-3": "DG1-3",

  /**
   * Next of Kin / Associated Parties Job Code/Class
   */
  "NK1-11": "NK1-11",

  /**
   * Organization Name - NK1
   */
  "NK1-13": "NK1-13",

  /**
   * Ethnic Group
   */
  "NK1-28": "NK1-28",

  /**
   * Race
   */
  "NK1-35": "NK1-35",

  /**
   * Ordering Provider
   */
  "OBR-16": "OBR-16",

  /**
   * Relevant Clinical Information
   */
  "OBR-13": "OBR-13",

  /**
   * Result Handling
   */
  "OBR-49": "OBR-49",

  /**
   * Patient Address
   */
  "PID-11": "PID-11",

  /**
   * Patient Identifier List
   */
  "PID-3": "PID-3",

  /**
   * Patient Name
   */
  "PID-5": "PID-5",

  /**
   * Mother's Maiden Name
   */
  "PID-6": "PID-6",

  /**
   * Date/Time of Birth
   */
  "PID-7": "PID-7",

  /**
   * Phone Number - Home
   */
  "PID-13": "PID-13",

  /**
   * Phone Number - Business
   */
  "PID-14": "PID-14",

  /**
   * Phone Number
   */
  "PID-40": "PID-40",

  /**
   * Participation Person
   */
  "PRT-5": "PRT-5",

  /**
   * Specimen Type
   */
  "SPM-4": "SPM-4",

  /**
   * Specimen Source Site
   */
  "SPM-8": "SPM-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSCommunicationLocationCode =
  typeof Hl7VSVSCommunicationLocationCode[keyof typeof Hl7VSVSCommunicationLocationCode];
