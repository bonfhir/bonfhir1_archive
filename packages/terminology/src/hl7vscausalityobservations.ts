/**
 * Value Set of codes that record event observations regarding what may have caused a product related event.
 * http://terminology.hl7.org/ValueSet/v2-0252
 */
export const Hl7VSCausalityObservationsCode = {
  /**
   * Abatement of event after product withdrawn
   */
  Abatementofeventafterproductwithdrawn: "AW",

  /**
   * Event recurred after product reintroduced
   */
  Eventrecurredafterproductreintroduced: "BE",

  /**
   * Literature reports association of product with event
   */
  Literaturereportsassociationofproductwithevent: "LI",

  /**
   * Event occurred after product introduced
   */
  Eventoccurredafterproductintroduced: "IN",

  /**
   * Alternative explanations for the event available
   */
  Alternativeexplanationsfortheeventavailable: "EX",

  /**
   * Effect observed when patient receives placebo
   */
  Effectobservedwhenpatientreceivesplacebo: "PL",

  /**
   * Toxic levels of product documented in blood or body fluids
   */
  Toxiclevelsofproductdocumentedinbloodorbodyfluids: "TC",

  /**
   * Dose response observed
   */
  Doseresponseobserved: "DR",

  /**
   * Similar events in past for this patient
   */
  Similareventsinpastforthispatient: "SE",

  /**
   * Occurrence of event was confirmed by objective evidence
   */
  Occurrenceofeventwasconfirmedbyobjectiveevidence: "OE",

  /**
   * Other
   */
  Other: "OT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCausalityObservationsCode =
  typeof Hl7VSCausalityObservationsCode[keyof typeof Hl7VSCausalityObservationsCode];
