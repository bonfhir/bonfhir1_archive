/**
 * Target on behalf of whom the service happens, but that is not necessarily present in the service. Can occur together with direct target to indicate that a target is both, as in the case where the patient is the indirect beneficiary of a service rendered to a family member, e.g. counseling or given home care instructions. This concept includes a participant, such as a covered party, who derives benefits from a service act covered by a coverage act.

Note that the semantic role of the intended recipient who benefits from the happening denoted by the verb in the clause. Thus, a patient who has no coverage under a policy or program may be a beneficiary of a health service while not being the beneficiary of coverage for that service.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationBeneficiary
 */
export const ParticipationBeneficiaryCode = {
  /**
   * beneficiary
   */
  beneficiary: "BEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationBeneficiaryCode =
  typeof ParticipationBeneficiaryCode[keyof typeof ParticipationBeneficiaryCode];
