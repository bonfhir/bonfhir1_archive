/**
 * Confirmed drug therapy appropriate
 * http://terminology.hl7.org/ValueSet/v3-TherapyAppropriateManagementCode
 */
export const TherapyAppropriateManagementCodeCode = {
  /**
   * Therapy Appropriate
   */
  TherapyAppropriate: "1",

  /**
   * Consulted Supplier
   */
  ConsultedSupplier: "19",

  /**
   * Assessed Patient
   */
  AssessedPatient: "2",

  /**
   * appropriate indication or diagnosis
   */
  appropriateindicationordiagnosis: "22",

  /**
   * prior therapy documented
   */
  priortherapydocumented: "23",

  /**
   * Patient Explanation
   */
  PatientExplanation: "3",

  /**
   * Consulted Other Source
   */
  ConsultedOtherSource: "4",

  /**
   * Consulted Prescriber
   */
  ConsultedPrescriber: "5",

  /**
   * Prescriber Declined Change
   */
  PrescriberDeclinedChange: "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  InteractingTherapyNoLongerActivePlanned: "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapyAppropriateManagementCodeCode =
  typeof TherapyAppropriateManagementCodeCode[keyof typeof TherapyAppropriateManagementCodeCode];
