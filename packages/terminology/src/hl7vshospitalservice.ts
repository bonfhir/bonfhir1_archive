/**
 * Value Set of codes that specify the treatment or type of surgery the patient is scheduled to receive.
 * http://terminology.hl7.org/ValueSet/v2-0069
 */
export const Hl7VSHospitalServiceCode = {
  /**
   * Medical Service
   */
  MedicalService: "MED",

  /**
   * Surgical Service
   */
  SurgicalService: "SUR",

  /**
   * Urology Service
   */
  UrologyService: "URO",

  /**
   * Pulmonary Service
   */
  PulmonaryService: "PUL",

  /**
   * Cardiac Service
   */
  CardiacService: "CAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSHospitalServiceCode =
  typeof Hl7VSHospitalServiceCode[keyof typeof Hl7VSHospitalServiceCode];
