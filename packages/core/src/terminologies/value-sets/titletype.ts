/**
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 * http://hl7.org/fhir/ValueSet/title-type
 */
export const TitleTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TitleTypeCode = typeof TitleTypeCode[keyof typeof TitleTypeCode];
