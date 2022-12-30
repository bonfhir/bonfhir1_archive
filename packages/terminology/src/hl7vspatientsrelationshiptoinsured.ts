/**
 * Value Set of codes that specify the relationship of the patient to the insured, as defined by CMS or other regulatory agencies.
 * http://terminology.hl7.org/ValueSet/v2-0344
 */
export const Hl7VSPatientSRelationshipToInsuredCode = {
  /**
   * Patient is insured
   */
  "01": "01",

  /**
   * Spouse
   */
  "02": "02",

  /**
   * Natural child/insured financial responsibility
   */
  "03": "03",

  /**
   * Natural child/Insured does not have financial responsibility
   */
  "04": "04",

  /**
   * Step child
   */
  "05": "05",

  /**
   * Foster child
   */
  "06": "06",

  /**
   * Ward of the court
   */
  "07": "07",

  /**
   * Employee
   */
  "08": "08",

  /**
   * Unknown
   */
  "09": "09",

  /**
   * Handicapped dependent
   */
  "10": "10",

  /**
   * Organ donor
   */
  "11": "11",

  /**
   * Cadaver donor
   */
  "12": "12",

  /**
   * Grandchild
   */
  "13": "13",

  /**
   * Niece/nephew
   */
  "14": "14",

  /**
   * Injured plaintiff
   */
  "15": "15",

  /**
   * Sponsored dependent
   */
  "16": "16",

  /**
   * Minor dependent of a minor dependent
   */
  "17": "17",

  /**
   * Parent
   */
  "18": "18",

  /**
   * Grandparent
   */
  "19": "19",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientSRelationshipToInsuredCode =
  typeof Hl7VSPatientSRelationshipToInsuredCode[keyof typeof Hl7VSPatientSRelationshipToInsuredCode];
