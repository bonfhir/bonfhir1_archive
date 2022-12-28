/**
 * The presentation types of notes.
 * http://hl7.org/fhir/ValueSet/note-type
 */
export const NoteTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NoteTypeCode = typeof NoteTypeCode[keyof typeof NoteTypeCode];
