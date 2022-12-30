/**
 * Identifies the type of verification investigation being undertaken with respect to the subject of the verification activity.

**Examples:**

1.  Verification of eligibility for coverage under a policy or program - aka enrolled/covered by a policy or program
2.  Verification of record - e.g., person has record in an immunization registry
3.  Verification of enumeration - e.g. NPI
4.  Verification of Board Certification - provider specific
5.  Verification of Certification - e.g. JAHCO, NCQA, URAC
6.  Verification of Conformance - e.g. entity use with HIPAA, conformant to the CCHIT EHR system criteria
7.  Verification of Provider Credentials
8.  Verification of no adverse findings - e.g. on National Provider Data Bank, Health Integrity Protection Data Base (HIPDB)
 * http://terminology.hl7.org/ValueSet/v3-ActObservationVerificationType
 */
export const ActObservationVerificationTypeCode = {
  /**
   * act observation verification
   */
  _ActObservationVerificationType: "_ActObservationVerificationType",

  /**
   * verify paper
   */
  VFPAPER: "VFPAPER",

  /**
   * verify paper
   */
  VRFPAPER: "VRFPAPER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActObservationVerificationTypeCode =
  typeof ActObservationVerificationTypeCode[keyof typeof ActObservationVerificationTypeCode];
