/**
 * Value Set of codes that specify the relationship of the consenter to the subject.
 * http://terminology.hl7.org/ValueSet/v2-0548
 */
export const Hl7VSSignatorySRelationshipToSubjectCode = {
  /**
   * Self
   */
  "1": "1",

  /**
   * Parent
   */
  "2": "2",

  /**
   * Next of Kin
   */
  "3": "3",

  /**
   * Durable Power of Attorney in Healthcare Affairs
   */
  "4": "4",

  /**
   * Conservator
   */
  "5": "5",

  /**
   * Emergent Practitioner (practitioner judging case as emergency requiring care without a consent)
   */
  "6": "6",

  /**
   * Non-Emergent Practitioner (i.e. medical ethics committee)
   */
  "7": "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSignatorySRelationshipToSubjectCode =
  typeof Hl7VSSignatorySRelationshipToSubjectCode[keyof typeof Hl7VSSignatorySRelationshipToSubjectCode];
