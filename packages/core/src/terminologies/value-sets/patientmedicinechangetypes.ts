/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 * http://hl7.org/fhir/ValueSet/list-item-flag
 */
export const PatientMedicineChangeTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientMedicineChangeTypesCode =
  typeof PatientMedicineChangeTypesCode[keyof typeof PatientMedicineChangeTypesCode];
