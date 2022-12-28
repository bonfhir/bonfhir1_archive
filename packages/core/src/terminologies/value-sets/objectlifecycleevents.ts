/**
 * This example FHIR value set is comprised of lifecycle event codes. The FHIR Actor value set is based on    DICOM Audit Message, ParticipantObjectDataLifeCycle;   ISO Standard, TS 21089-2017;
 * http://hl7.org/fhir/ValueSet/object-lifecycle-events
 */
export const ObjectLifecycleEventsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObjectLifecycleEventsCode =
  typeof ObjectLifecycleEventsCode[keyof typeof ObjectLifecycleEventsCode];
