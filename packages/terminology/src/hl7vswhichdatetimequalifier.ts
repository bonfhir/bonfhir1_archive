/**
 * Value Set of codes that specify the type of date referred to in the other date fields in the QRF segment.
 * http://terminology.hl7.org/ValueSet/v2-0156
 */
export const Hl7VSWhichDateTimeQualifierCode = {
  /**
   * Cancellation date/time
   */
  Cancellationdatetime: "CAN",

  /**
   * Any date/time within a range
   */
  Anydatetimewithinarange: "ANY",

  /**
   * Collection date/time, equivalent to film or sample collection date/time
   */
  Collectiondatetimeequivalenttofilmorsamplecollectiondatetime: "COL",

  /**
   * Order date/time
   */
  Orderdatetime: "ORD",

  /**
   * Specimen receipt date/time, receipt of specimen in filling ancillary (Lab)
   */
  SpecimenreceiptdatetimereceiptofspecimeninfillingancillaryLab: "RCT",

  /**
   * Report date/time, report date/time at filling ancillary (i.e., Lab)
   */
  ReportdatetimereportdatetimeatfillingancillaryieLab: "REP",

  /**
   * Schedule date/time
   */
  Scheduledatetime: "SCHED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhichDateTimeQualifierCode =
  typeof Hl7VSWhichDateTimeQualifierCode[keyof typeof Hl7VSWhichDateTimeQualifierCode];
