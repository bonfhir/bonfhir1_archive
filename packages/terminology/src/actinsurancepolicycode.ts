/**
 * Set of codes indicating the type of insurance policy or other source of funds to cover healthcare costs.
 * http://terminology.hl7.org/ValueSet/v3-ActInsurancePolicyCode
 */
export const ActInsurancePolicyCodeCode = {
  /**
   * extended healthcare
   */
  extendedhealthcare: "EHCPOL",

  /**
   * health spending account
   */
  healthspendingaccount: "HSAPOL",

  /**
   * automobile
   */
  automobile: "AUTOPOL",

  /**
   * collision coverage policy
   */
  collisioncoveragepolicy: "COL",

  /**
   * uninsured motorist policy
   */
  uninsuredmotoristpolicy: "UNINSMOT",

  /**
   * public healthcare
   */
  publichealthcare: "PUBLICPOL",

  /**
   * dental program
   */
  dentalprogram: "DENTPRG",

  /**
   * public health program
   */
  publichealthprogram: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  womenscancerdetectionprogram: "CANPRG",

  /**
   * end renal program
   */
  endrenalprogram: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDSprogram: "HIVAIDS",

  /**
   * mandatory health program
   */
  mandatoryhealthprogram: "MANDPOL",

  /**
   * mental health program
   */
  mentalhealthprogram: "MENTPRG",

  /**
   * safety net clinic program
   */
  safetynetclinicprogram: "SAFNET",

  /**
   * substance use program
   */
  substanceuseprogram: "SUBPRG",

  /**
   * subsidized health program
   */
  subsidizedhealthprogram: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  subsidizedmanagedcareprogram: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  subsidizedsupplementalhealthprogram: "SUBSUPP",

  /**
   * worker's compensation
   */
  workerscompensation: "WCBPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInsurancePolicyCodeCode =
  typeof ActInsurancePolicyCodeCode[keyof typeof ActInsurancePolicyCodeCode];
