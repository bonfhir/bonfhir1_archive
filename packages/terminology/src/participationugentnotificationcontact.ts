/**
 * An information recipient to notify for urgent matters about this Act. (e.g., in a laboratory order, critical results are being called by phone right away, this is the contact to call; or for an inpatient encounter, a next of kin to notify when the patient becomes critically ill).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationUgentNotificationContact
 */
export const ParticipationUgentNotificationContactCode = {
  /**
   * ugent notification contact
   */
  ugentnotificationcontact: "NOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationUgentNotificationContactCode =
  typeof ParticipationUgentNotificationContactCode[keyof typeof ParticipationUgentNotificationContactCode];
