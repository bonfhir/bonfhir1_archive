/**
 * An Act whose immediate and primary outcome (post-condition) is the alteration of the physical condition of the subject.

*Examples:* : Procedures may involve the disruption of some body surface (e.g. an incision in a surgical procedure), but they also include conservative procedures such as reduction of a luxated join, chiropractic treatment, massage, balneotherapy, acupuncture, shiatsu, etc. Outside of clinical medicine, procedures may be such things as alteration of environments (e.g. straightening rivers, draining swamps, building dams) or the repair or change of machinery etc.
 * http://terminology.hl7.org/ValueSet/v3-ActClassProcedure
 */
export const ActClassProcedureCode = {
  /**
   * procedure
   */
  PROC: "PROC",

  /**
   * substance administration
   */
  SBADM: "SBADM",

  /**
   * Substance Extraction
   */
  SBEXT: "SBEXT",

  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassProcedureCode =
  typeof ActClassProcedureCode[keyof typeof ActClassProcedureCode];
