/**
 * Concepts which specify a status of results for an order.  Used in HL7 Version 2.x messaging in the OBR segment.
 * http://terminology.hl7.org/ValueSet/v2-0123
 */
export const Hl7VSResultStatusObrCode = {
  /**
   * Order received; specimen not yet received
   */
  Orderreceivedspecimennotyetreceived: "O",

  /**
   * No results available; specimen received, procedure incomplete
   */
  Noresultsavailablespecimenreceivedprocedureincomplete: "I",

  /**
   * No results available; procedure scheduled, but not done
   */
  Noresultsavailableprocedurescheduledbutnotdone: "S",

  /**
   * Some, but not all, results available
   */
  Somebutnotallresultsavailable: "A",

  /**
   * Preliminary
   */
  Preliminary: "P",

  /**
   * Corrected, final
   */
  Correctedfinal: "C",

  /**
   * Results stored; not yet verified
   */
  Resultsstorednotyetverified: "R",

  /**
   * Final results
   */
  Finalresults: "F",

  /**
   * No results available; Order canceled
   */
  NoresultsavailableOrdercanceled: "X",

  /**
   * No order on record for this test
   */
  Noorderonrecordforthistest: "Y",

  /**
   * No record of this patient
   */
  Norecordofthispatient: "Z",

  /**
   * Corrected, not final
   */
  Correctednotfinal: "M",

  /**
   * Procedure completed, results pending
   */
  Procedurecompletedresultspending: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSResultStatusObrCode =
  typeof Hl7VSResultStatusObrCode[keyof typeof Hl7VSResultStatusObrCode];
