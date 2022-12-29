/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ResidentialTreatmentPracticeSetting
 */
export const ResidentialTreatmentPracticeSettingCode = {
  /**
   * Residential treatment facility
   */
  Residentialtreatmentfacility: "RTF",

  /**
   * Pain rehabilitation center
   */
  Painrehabilitationcenter: "PRC",

  /**
   * Substance use rehabilitation facility
   */
  Substanceuserehabilitationfacility: "SURF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResidentialTreatmentPracticeSettingCode =
  typeof ResidentialTreatmentPracticeSettingCode[keyof typeof ResidentialTreatmentPracticeSettingCode];
