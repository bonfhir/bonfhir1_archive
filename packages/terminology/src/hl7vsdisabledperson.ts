/**
 * Value Set of codes that specify to which person the disability information relates in the message.  For example, if the value is PT, the disability information relates to the patient.
 * http://terminology.hl7.org/ValueSet/v2-0334
 */
export const Hl7VSDisabledPersonCode = {
  /**
   * Patient
   */
  Patient: "PT",

  /**
   * Guarantor
   */
  Guarantor: "GT",

  /**
   * Insured
   */
  Insured: "IN",

  /**
   * Associated party
   */
  Associatedparty: "AP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDisabledPersonCode =
  typeof Hl7VSDisabledPersonCode[keyof typeof Hl7VSDisabledPersonCode];
