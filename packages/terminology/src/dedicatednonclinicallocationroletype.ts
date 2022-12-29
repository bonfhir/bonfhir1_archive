/**
 * A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
 * http://terminology.hl7.org/ValueSet/v3-DedicatedNonClinicalLocationRoleType
 */
export const DedicatedNonClinicalLocationRoleTypeCode = {
  /**
   * Delivery Address
   */
  DeliveryAddress: "DADDR",

  /**
   * Mobile Unit
   */
  MobileUnit: "MOBL",

  /**
   * Ambulance
   */
  Ambulance: "AMB",

  /**
   * Pharmacy
   */
  Pharmacy: "PHARM",

  /**
   * inpatient pharmacy
   */
  inpatientpharmacy: "INPHARM",

  /**
   * outpatient pharmacy
   */
  outpatientpharmacy: "OUTPHARM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DedicatedNonClinicalLocationRoleTypeCode =
  typeof DedicatedNonClinicalLocationRoleTypeCode[keyof typeof DedicatedNonClinicalLocationRoleTypeCode];
