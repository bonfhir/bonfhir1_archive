/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsDuring
 */
export const ActRelationshipStartsDuringCode = {
  /**
   * starts during
   */
  startsduring: "SDU",

  /**
   * start after start of, contains end of
   */
  startafterstartofcontainsendof: "SASSBEEAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsDuringCode =
  typeof ActRelationshipStartsDuringCode[keyof typeof ActRelationshipStartsDuringCode];
