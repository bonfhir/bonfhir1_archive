/**
 * Value Set of codes that specify the general category of pharmacy order which may be used to determine the processing path the order will take.
 * http://terminology.hl7.org/ValueSet/v2-0480
 */
export const Hl7VSPharmacyOrderTypesCode = {
  /**
   * Medication
   */
  Medication: "M",

  /**
   * IV Large Volume Solutions
   */
  IVLargeVolumeSolutions: "S",

  /**
   * Other solution as medication orders
   */
  Othersolutionasmedicationorders: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPharmacyOrderTypesCode =
  typeof Hl7VSPharmacyOrderTypesCode[keyof typeof Hl7VSPharmacyOrderTypesCode];
