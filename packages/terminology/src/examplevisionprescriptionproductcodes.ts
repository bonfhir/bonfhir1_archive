/**
 * This value set includes a smattering of Prescription Product codes.
 * http://terminology.hl7.org/ValueSet/vision-product
 */
export const ExampleVisionPrescriptionProductCodesCode = {
  /**
   * Lens
   */
  Lens: "lens",

  /**
   * Contact Lens
   */
  ContactLens: "contact",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleVisionPrescriptionProductCodesCode =
  typeof ExampleVisionPrescriptionProductCodesCode[keyof typeof ExampleVisionPrescriptionProductCodesCode];
