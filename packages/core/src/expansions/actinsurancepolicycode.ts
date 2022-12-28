/**
 * Set of codes indicating the type of insurance policy or other source of funds to cover healthcare costs.
 * http://terminology.hl7.org/ValueSet/v3-ActInsurancePolicyCode
 */
export const ActInsurancePolicyCodeCode = {
  /**
   * extended healthcare
   */
  EHCPOL: "EHCPOL",

  /**
   * health spending account
   */
  HSAPOL: "HSAPOL",

  /**
   * automobile
   */
  AUTOPOL: "AUTOPOL",

  /**
   * collision coverage policy
   */
  COL: "COL",

  /**
   * uninsured motorist policy
   */
  UNINSMOT: "UNINSMOT",

  /**
   * public healthcare
   */
  PUBLICPOL: "PUBLICPOL",

  /**
   * dental program
   */
  DENTPRG: "DENTPRG",

  /**
   * public health program
   */
  DISEASEPRG: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  CANPRG: "CANPRG",

  /**
   * end renal program
   */
  ENDRENAL: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDS: "HIVAIDS",

  /**
   * mandatory health program
   */
  MANDPOL: "MANDPOL",

  /**
   * mental health program
   */
  MENTPRG: "MENTPRG",

  /**
   * safety net clinic program
   */
  SAFNET: "SAFNET",

  /**
   * substance use program
   */
  SUBPRG: "SUBPRG",

  /**
   * subsidized health program
   */
  SUBSIDIZ: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  SUBSIDMC: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  SUBSUPP: "SUBSUPP",

  /**
   * worker's compensation
   */
  WCBPOL: "WCBPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInsurancePolicyCodeCode =
  typeof ActInsurancePolicyCodeCode[keyof typeof ActInsurancePolicyCodeCode];
