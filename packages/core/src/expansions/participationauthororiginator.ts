/**
 * **Definition:** A party that originates the Act and therefore has responsibility for the information given in the Act and ownership of this Act.

**Example:** the report writer, the person writing the act definition, the guideline author, the placer of an order, the EKG cart (device) creating a report etc. Every Act should have an author. Authorship is regardless of mood always actual authorship.

Examples of such policies might include:

 *  The author and anyone they explicitly delegate may update the report;
 *  All administrators within the same clinic may cancel and reschedule appointments created by other administrators within that clinic;

A party that is neither an author nor a party who is extended authorship maintenance rights by policy, may only amend, reverse, override, replace, or follow up in other ways on this Act, whereby the Act remains intact and is linked to another Act authored by that other party.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAuthorOriginator
 */
export const ParticipationAuthorOriginatorCode = {
  /**
   * author (originator)
   */
  AUT: "AUT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAuthorOriginatorCode =
  typeof ParticipationAuthorOriginatorCode[keyof typeof ParticipationAuthorOriginatorCode];
