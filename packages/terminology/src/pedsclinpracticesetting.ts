/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsClinPracticeSetting
 */
export const PedsClinPracticeSettingCode = {
  /**
   * Pediatrics clinic
   */
  Pediatricsclinic: "PEDC",

  /**
   * Pediatric cardiology clinic
   */
  Pediatriccardiologyclinic: "PEDCARD",

  /**
   * Pediatric endocrinology clinic
   */
  Pediatricendocrinologyclinic: "PEDE",

  /**
   * Pediatric gastroenterology clinic
   */
  Pediatricgastroenterologyclinic: "PEDGI",

  /**
   * Pediatric hematology clinic
   */
  Pediatrichematologyclinic: "PEDHEM",

  /**
   * Pediatric infectious disease clinic
   */
  Pediatricinfectiousdiseaseclinic: "PEDID",

  /**
   * Pediatric nephrology clinic
   */
  Pediatricnephrologyclinic: "PEDNEPH",

  /**
   * Pediatric oncology clinic
   */
  Pediatriconcologyclinic: "PEDHO",

  /**
   * Pediatric rheumatology clinic
   */
  Pediatricrheumatologyclinic: "PEDRHEUM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PedsClinPracticeSettingCode =
  typeof PedsClinPracticeSettingCode[keyof typeof PedsClinPracticeSettingCode];
