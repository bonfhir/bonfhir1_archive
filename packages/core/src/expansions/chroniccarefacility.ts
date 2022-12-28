/**
 * (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
 * http://terminology.hl7.org/ValueSet/v3-ChronicCareFacility
 */
export const ChronicCareFacilityCode = {
  /**
   * Chronic Care Facility
   */
  CHR: "CHR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChronicCareFacilityCode =
  typeof ChronicCareFacilityCode[keyof typeof ChronicCareFacilityCode];
