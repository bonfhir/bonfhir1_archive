/**
 * **Definition:** When identifying the "request" that resulted in an encounter, there is a need to distinguish whether the "request" was a general referral (CareProvisionRequest) or a more specific ordered or scheduled encounter (PatientEncounter).
 * http://terminology.hl7.org/ValueSet/v3-xActClassCareProvisionEncounter
 */
export const XActClassCareProvisionEncounterCode = {
  /**
   * encounter
   */
  encounter: "ENC",

  /**
   * care provision
   */
  careprovision: "PCPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassCareProvisionEncounterCode =
  typeof XActClassCareProvisionEncounterCode[keyof typeof XActClassCareProvisionEncounterCode];
