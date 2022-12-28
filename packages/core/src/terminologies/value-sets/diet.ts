/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 * http://hl7.org/fhir/ValueSet/encounter-diet
 */
export const DietCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DietCode = typeof DietCode[keyof typeof DietCode];
