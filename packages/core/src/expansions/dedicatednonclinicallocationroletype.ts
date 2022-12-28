/**
 * A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
 * http://terminology.hl7.org/ValueSet/v3-DedicatedNonClinicalLocationRoleType
 */
export const DedicatedNonClinicalLocationRoleTypeCode = {
  /**
   * Delivery Address
   */
  DADDR: "DADDR",

  /**
   * Mobile Unit
   */
  MOBL: "MOBL",

  /**
   * Ambulance
   */
  AMB: "AMB",

  /**
   * Pharmacy
   */
  PHARM: "PHARM",

  /**
   * inpatient pharmacy
   */
  INPHARM: "INPHARM",

  /**
   * outpatient pharmacy
   */
  OUTPHARM: "OUTPHARM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DedicatedNonClinicalLocationRoleTypeCode =
  typeof DedicatedNonClinicalLocationRoleTypeCode[keyof typeof DedicatedNonClinicalLocationRoleTypeCode];
