/**
 * This value set includes SNOMED CT codes for materials that specimen containers are made of
 * http://hl7.org/fhir/ValueSet/container-material
 */
export const ContainerMaterialsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContainerMaterialsCode =
  typeof ContainerMaterialsCode[keyof typeof ContainerMaterialsCode];
