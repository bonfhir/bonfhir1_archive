/**
 * Code specifying eligibility indicators used to assess or establish eligibility for coverage under a policy or program eligibility status, e.g., certificates of creditable coverage; student enrollment; adoption, marriage or birth certificate.
 * http://terminology.hl7.org/ValueSet/v3-ObservationEligibilityIndicatorValue
 */
export const ObservationEligibilityIndicatorValueCode = {
  /**
   * eligibility indicator
   */
  eligibilityindicator: "ELSTAT",

  /**
   * adoption document
   */
  adoptiondocument: "ADOPT",

  /**
   * birth certificate
   */
  birthcertificate: "BTHCERT",

  /**
   * creditable coverage document
   */
  creditablecoveragedocument: "CCOC",

  /**
   * driver license
   */
  driverlicense: "DRLIC",

  /**
   * foster child document
   */
  fosterchilddocument: "FOSTER",

  /**
   * program or policy member
   */
  programorpolicymember: "MEMBER",

  /**
   * military identification
   */
  militaryidentification: "MIL",

  /**
   * marriage certificate
   */
  marriagecertificate: "MRGCERT",

  /**
   * passport
   */
  passport: "PASSPORT",

  /**
   * student enrollment
   */
  studentenrollment: "STUDENRL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationEligibilityIndicatorValueCode =
  typeof ObservationEligibilityIndicatorValueCode[keyof typeof ObservationEligibilityIndicatorValueCode];
