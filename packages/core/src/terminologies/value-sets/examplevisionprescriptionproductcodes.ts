/**
 * This value set includes a smattering of Prescription Product codes.
 * http://hl7.org/fhir/ValueSet/vision-product
 */
export const ExampleVisionPrescriptionProductCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleVisionPrescriptionProductCodesCode =
  typeof ExampleVisionPrescriptionProductCodesCode[keyof typeof ExampleVisionPrescriptionProductCodesCode];
