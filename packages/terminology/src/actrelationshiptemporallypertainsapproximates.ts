/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTemporallyPertainsApproximates
 */
export const ActRelationshipTemporallyPertainsApproximatesCode = {
  /**
   * ActRelationshipTemporallyPertainsApproximates
   */
  _ActRelationshipTemporallyPertainsApproximates:
    "_ActRelationshipTemporallyPertainsApproximates",

  /**
   * ends near end
   */
  ENE: "ENE",

  /**
   * ends concurrent with
   */
  ECW: "ECW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",

  /**
   * ends near start
   */
  ENS: "ENS",

  /**
   * ends concurrent with start of
   */
  ECWS: "ECWS",

  /**
   * starts near end
   */
  SNE: "SNE",

  /**
   * starts concurrent with end of
   */
  SCWE: "SCWE",

  /**
   * starts near start
   */
  SNS: "SNS",

  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTemporallyPertainsApproximatesCode =
  typeof ActRelationshipTemporallyPertainsApproximatesCode[keyof typeof ActRelationshipTemporallyPertainsApproximatesCode];
