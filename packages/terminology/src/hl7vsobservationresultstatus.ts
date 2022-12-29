/**
 * Concepts which specify observation result status. These codes reflect the current completion status of the results for one Observation Identifier.
 * http://terminology.hl7.org/ValueSet/v2-0085
 */
export const Hl7VSObservationResultStatusCode = {
  /**
   * Amended based on adjustments provided by the Placer (Physician) regarding patient demographics (such as age and/or gender or other patient specific information
   */
  AmendedbasedonadjustmentsprovidedbythePlacerPhysicianregardingpatientdemographicssuchasageandorgenderorotherpatientspecificinformation:
    "A",

  /**
   * Appended Report - Final results reviewed and further information provided for clarity without change to the original result values.
   */
  AppendedReportFinalresultsreviewedandfurtherinformationprovidedforclaritywithoutchangetotheoriginalresultvalues:
    "B",

  /**
   * Record coming over is a correction and thus replaces a final result
   */
  Recordcomingoverisacorrectionandthusreplacesafinalresult: "C",

  /**
   * Deletes the OBX record
   */
  DeletestheOBXrecord: "D",

  /**
   * Final results
   */
  Finalresults: "F",

  /**
   * Specimen in lab; results pending
   */
  Specimeninlabresultspending: "I",

  /**
   * Not asked; used to affirmatively document that the observation identified in the OBX was not sought when the universal service ID in OBR-4 implies that it would be sought.
   */
  NotaskedusedtoaffirmativelydocumentthattheobservationidentifiedintheOBXwasnotsoughtwhentheuniversalserviceIDinOBR4impliesthatitwouldbesought:
    "N",

  /**
   * Order detail description only (no result)
   */
  Orderdetaildescriptiononlynoresult: "O",

  /**
   * Preliminary results
   */
  Preliminaryresults: "P",

  /**
   * Results entered -- not verified
   */
  Resultsenterednotverified: "R",

  /**
   * Partial results.   Deprecated. Retained only for backward compatibility as of V2.6.
   */
  PartialresultsDeprecatedRetainedonlyforbackwardcompatibilityasofV26: "S",

  /**
   * Verified - Final results reviewed and confirmed to be correct, no change to result value, normal range or abnormal flag
   */
  VerifiedFinalresultsreviewedandconfirmedtobecorrectnochangetoresultvaluenormalrangeorabnormalflag:
    "V",

  /**
   * Results cannot be obtained for this observation
   */
  Resultscannotbeobtainedforthisobservation: "X",

  /**
   * Results status change to final without retransmitting results already sent as 'preliminary.'  E.g., radiology changes status from preliminary to final
   */
  ResultsstatuschangetofinalwithoutretransmittingresultsalreadysentaspreliminaryEgradiologychangesstatusfrompreliminarytofinal:
    "U",

  /**
   * Post original as wrong, e.g., transmitted for wrong patient
   */
  Postoriginalaswrongegtransmittedforwrongpatient: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSObservationResultStatusCode =
  typeof Hl7VSObservationResultStatusCode[keyof typeof Hl7VSObservationResultStatusCode];
