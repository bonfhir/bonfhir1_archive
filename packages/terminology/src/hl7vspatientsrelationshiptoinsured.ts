/**
 * Value Set of codes that specify the relationship of the patient to the insured, as defined by CMS or other regulatory agencies.
 * http://terminology.hl7.org/ValueSet/v2-0344
 */
export const Hl7VSPatientSRelationshipToInsuredCode = {
  /**
   * Patient is insured
   */
  Patientisinsured: "01",

  /**
   * Spouse
   */
  Spouse: "02",

  /**
   * Natural child/insured financial responsibility
   */
  Naturalchildinsuredfinancialresponsibility: "03",

  /**
   * Natural child/Insured does not have financial responsibility
   */
  NaturalchildInsureddoesnothavefinancialresponsibility: "04",

  /**
   * Step child
   */
  Stepchild: "05",

  /**
   * Foster child
   */
  Fosterchild: "06",

  /**
   * Ward of the court
   */
  Wardofthecourt: "07",

  /**
   * Employee
   */
  Employee: "08",

  /**
   * Unknown
   */
  Unknown: "09",

  /**
   * Handicapped dependent
   */
  Handicappeddependent: "10",

  /**
   * Organ donor
   */
  Organdonor: "11",

  /**
   * Cadaver donor
   */
  Cadaverdonor: "12",

  /**
   * Grandchild
   */
  Grandchild: "13",

  /**
   * Niece/nephew
   */
  Niecenephew: "14",

  /**
   * Injured plaintiff
   */
  Injuredplaintiff: "15",

  /**
   * Sponsored dependent
   */
  Sponsoreddependent: "16",

  /**
   * Minor dependent of a minor dependent
   */
  Minordependentofaminordependent: "17",

  /**
   * Parent
   */
  Parent: "18",

  /**
   * Grandparent
   */
  Grandparent: "19",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientSRelationshipToInsuredCode =
  typeof Hl7VSPatientSRelationshipToInsuredCode[keyof typeof Hl7VSPatientSRelationshipToInsuredCode];
