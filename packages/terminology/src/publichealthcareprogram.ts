/**
 * **Definition:** A a public or governmental health program with an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health and financial status. These programs are established by legislation with provisions for ongoing government oversight. Regulations mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation.

For example, A Canadian provincial or national health plan such as the BC MSP (British Columbia Medical Services Plan) OHIP (Ontario Health Insurance Plan), NHS (National Health Service). Examples of U.S. government funded health programs include those for maternity case management, behavioral health, and HIV-AIDs, such as the Ryan White program.
 * http://terminology.hl7.org/ValueSet/v3-PublicHealthcareProgram
 */
export const PublicHealthcareProgramCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PublicHealthcareProgramCode =
  typeof PublicHealthcareProgramCode[keyof typeof PublicHealthcareProgramCode];
