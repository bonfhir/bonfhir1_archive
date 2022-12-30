/**
 * A request or order for a service is an intent directed from a placer (request author) to a fulfiller (service performer).

*Rationale:* The concepts of a "request" and an "order" are viewed as different, because there is an implication of a mandate associated with order. In practice, however, this distinction has no general functional value in the inter-operation of health care computing. "Orders" are commonly refused for a variety of clinical and business reasons, and the notion of a "request" obligates the recipient (the fulfiller) to respond to the sender (the author). Indeed, in many regions, including Australia and Europe, the common term used is "request."

Thus, the concept embodies both notions, as there is no useful distinction to be made. If a mandate is to be associated with a request, this will be embodied in the "local" business rules applied to the transactions. Should HL7 desire to provide a distinction between these in the future, the individual concepts could be added as specializations of this concept.

The critical distinction here, is the difference between this concept and an "intent", of which it is a specialization. An intent involves decisions by a single party, the author. A request, however, involves decisions by two parties, the author and the fulfiller, with an obligation on the part of the fulfiller to respond to the request indicating that the fulfiller will indeed fulfill the request.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodRequest
 */
export const ActMoodRequestCode = {
  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodRequestCode =
  typeof ActMoodRequestCode[keyof typeof ActMoodRequestCode];
