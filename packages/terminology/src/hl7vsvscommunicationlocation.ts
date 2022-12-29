/**
 * Value Set of codes specifying a communication location.
 * http://terminology.hl7.org/ValueSet/v2-0939
 */
export const Hl7VSVSCommunicationLocationCode = {
  /**
   * OBX segment following an OBR segment
   */
  OBXsegmentfollowinganOBRsegment: "OBR-OBX",

  /**
   * OBX segment following an SPM segment
   */
  OBXsegmentfollowinganSPMsegment: "SPM-OBX",

  /**
   * Diagnosis Code
   */
  DiagnosisCode: "DG1-3",

  /**
   * Next of Kin / Associated Parties Job Code/Class
   */
  NextofKinAssociatedPartiesJobCodeClass: "NK1-11",

  /**
   * Organization Name - NK1
   */
  OrganizationNameNK1: "NK1-13",

  /**
   * Ethnic Group
   */
  EthnicGroup: "NK1-28",

  /**
   * Race
   */
  Race: "NK1-35",

  /**
   * Ordering Provider
   */
  OrderingProvider: "OBR-16",

  /**
   * Relevant Clinical Information
   */
  RelevantClinicalInformation: "OBR-13",

  /**
   * Result Handling
   */
  ResultHandling: "OBR-49",

  /**
   * Patient Address
   */
  PatientAddress: "PID-11",

  /**
   * Patient Identifier List
   */
  PatientIdentifierList: "PID-3",

  /**
   * Patient Name
   */
  PatientName: "PID-5",

  /**
   * Mother's Maiden Name
   */
  MothersMaidenName: "PID-6",

  /**
   * Date/Time of Birth
   */
  DateTimeofBirth: "PID-7",

  /**
   * Phone Number - Home
   */
  PhoneNumberHome: "PID-13",

  /**
   * Phone Number - Business
   */
  PhoneNumberBusiness: "PID-14",

  /**
   * Phone Number
   */
  PhoneNumber: "PID-40",

  /**
   * Participation Person
   */
  ParticipationPerson: "PRT-5",

  /**
   * Specimen Type
   */
  SpecimenType: "SPM-4",

  /**
   * Specimen Source Site
   */
  SpecimenSourceSite: "SPM-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSCommunicationLocationCode =
  typeof Hl7VSVSCommunicationLocationCode[keyof typeof Hl7VSVSCommunicationLocationCode];
