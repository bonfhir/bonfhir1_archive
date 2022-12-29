/**
 * An Outbreak is a concern resulting from a series of public health cases.
 * http://terminology.hl7.org/ValueSet/v3-ActClassOutbreak2
 */
export const ActClassOutbreak2Code = {
  /**
   * outbreak
   */
  outbreak: "OUTBR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassOutbreak2Code =
  typeof ActClassOutbreak2Code[keyof typeof ActClassOutbreak2Code];
