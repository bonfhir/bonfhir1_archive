/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsClinPracticeSetting
 */
export const PedsClinPracticeSettingCode = {
  /**
   * Pediatrics clinic
   */
  PEDC: "PEDC",

  /**
   * Pediatric cardiology clinic
   */
  PEDCARD: "PEDCARD",

  /**
   * Pediatric endocrinology clinic
   */
  PEDE: "PEDE",

  /**
   * Pediatric gastroenterology clinic
   */
  PEDGI: "PEDGI",

  /**
   * Pediatric hematology clinic
   */
  PEDHEM: "PEDHEM",

  /**
   * Pediatric infectious disease clinic
   */
  PEDID: "PEDID",

  /**
   * Pediatric nephrology clinic
   */
  PEDNEPH: "PEDNEPH",

  /**
   * Pediatric oncology clinic
   */
  PEDHO: "PEDHO",

  /**
   * Pediatric rheumatology clinic
   */
  PEDRHEUM: "PEDRHEUM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PedsClinPracticeSettingCode =
  typeof PedsClinPracticeSettingCode[keyof typeof PedsClinPracticeSettingCode];
