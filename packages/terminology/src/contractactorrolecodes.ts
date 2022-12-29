/**
 * This value set includes sample Contract Actor Role codes.
 * http://terminology.hl7.org/ValueSet/contract-actorrole
 */
export const ContractActorRoleCodesCode = {
  /**
   * Practitioner
   */
  Practitioner: "practitioner",

  /**
   * Patient
   */
  Patient: "patient",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractActorRoleCodesCode =
  typeof ContractActorRoleCodesCode[keyof typeof ContractActorRoleCodesCode];
