/**
 * Value Set of codes identifying what search components (e.g., name, birthdate, social security number) of the record returned matched the original query where the responding system does not assign numeric match weights or confidence levels.  It
 * http://terminology.hl7.org/ValueSet/v2-0392
 */
export const Hl7VSMatchReasonCode = {
  /**
   * Match on Date of Birth
   */
  MatchonDateofBirth: "DB",

  /**
   * Match on Name (Alpha Match)
   */
  MatchonNameAlphaMatch: "NA",

  /**
   * Match on Name (Phonetic Match)
   */
  MatchonNamePhoneticMatch: "NP",

  /**
   * Match on Social Security Number
   */
  MatchonSocialSecurityNumber: "SS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMatchReasonCode =
  typeof Hl7VSMatchReasonCode[keyof typeof Hl7VSMatchReasonCode];
