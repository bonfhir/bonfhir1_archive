/**
 * **Definition:** A public or government health program that administers and funds coverage for health and social services to assist program eligible who meet financial and health status criteria related to a particular disease.

**Example:** Reproductive health, sexually transmitted disease, and end renal disease programs.
 * http://terminology.hl7.org/ValueSet/v3-DiseaseProgram
 */
export const DiseaseProgramCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiseaseProgramCode =
  typeof DiseaseProgramCode[keyof typeof DiseaseProgramCode];
