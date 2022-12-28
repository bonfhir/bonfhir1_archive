/**
 * Relates an Act to its subject Act that the first Act is primarily concerned with.

Examples

1.  The first Act may be a ControlAct manipulating the subject Act
2.  The first act is a region of interest (ROI) that defines a region within the subject Act.
3.  The first act is a reporting or notification Act, that echos the subject Act for a specific new purpose.

Constraints

An Act may have multiple subject acts.

Rationale

The ActRelationshipType "has subject" is similar to the ParticipationType "subject", Acts that primarily operate on physical subjects use the Participation, those Acts that primarily operate on other Acts (other information) use the ActRelationship.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasSubject
 */
export const ActRelationshipHasSubjectCode = {
  /**
   * has subject
   */
  SUBJ: "SUBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasSubjectCode =
  typeof ActRelationshipHasSubjectCode[keyof typeof ActRelationshipHasSubjectCode];
