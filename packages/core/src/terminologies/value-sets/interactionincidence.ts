/**
 * A categorisation for incidence of occurence of an interaction.
 * http://hl7.org/fhir/ValueSet/interaction-incidence
 */
export const InteractionIncidenceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionIncidenceCode =
  typeof InteractionIncidenceCode[keyof typeof InteractionIncidenceCode];
