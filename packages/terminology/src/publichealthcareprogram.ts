/**
 * **Definition:** A a public or governmental health program with an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health and financial status. These programs are established by legislation with provisions for ongoing government oversight. Regulations mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation.

For example, A Canadian provincial or national health plan such as the BC MSP (British Columbia Medical Services Plan) OHIP (Ontario Health Insurance Plan), NHS (National Health Service). Examples of U.S. government funded health programs include those for maternity case management, behavioral health, and HIV-AIDs, such as the Ryan White program.
 * http://terminology.hl7.org/ValueSet/v3-PublicHealthcareProgram
 */
export const PublicHealthcareProgramCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PublicHealthcareProgramCode =
  typeof PublicHealthcareProgramCode[keyof typeof PublicHealthcareProgramCode];
