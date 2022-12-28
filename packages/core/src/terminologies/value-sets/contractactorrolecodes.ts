/**
 * This value set includes sample Contract Actor Role codes.
 * http://hl7.org/fhir/ValueSet/contract-actorrole
 */
export const ContractActorRoleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractActorRoleCodesCode =
  typeof ContractActorRoleCodesCode[keyof typeof ContractActorRoleCodesCode];
