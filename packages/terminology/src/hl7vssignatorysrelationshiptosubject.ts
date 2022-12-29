/**
 * Value Set of codes that specify the relationship of the consenter to the subject.
 * http://terminology.hl7.org/ValueSet/v2-0548
 */
export const Hl7VSSignatorySRelationshipToSubjectCode = {
  /**
   * Self
   */
  Self: "1",

  /**
   * Parent
   */
  Parent: "2",

  /**
   * Next of Kin
   */
  NextofKin: "3",

  /**
   * Durable Power of Attorney in Healthcare Affairs
   */
  DurablePowerofAttorneyinHealthcareAffairs: "4",

  /**
   * Conservator
   */
  Conservator: "5",

  /**
   * Emergent Practitioner (practitioner judging case as emergency requiring care without a consent)
   */
  EmergentPractitionerpractitionerjudgingcaseasemergencyrequiringcarewithoutaconsent:
    "6",

  /**
   * Non-Emergent Practitioner (i.e. medical ethics committee)
   */
  NonEmergentPractitioneriemedicalethicscommittee: "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSignatorySRelationshipToSubjectCode =
  typeof Hl7VSSignatorySRelationshipToSubjectCode[keyof typeof Hl7VSSignatorySRelationshipToSubjectCode];
