/**
 *
 * http://hl7.org/fhir/CodeSystem/medicationrequest-intent
 */
export const MedicationRequestIntentCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicationrequest-intent",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/CodeSystem/medicationrequest-intent defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">proposal<a name="medicationrequest-intent-proposal"> </a></td><td>Proposal</td><td>The request is a suggestion made by someone/something that doesn\'t have an intention to ensure it occurs and without providing an authorization to act</td></tr><tr><td style="white-space:nowrap">plan<a name="medicationrequest-intent-plan"> </a></td><td>Plan</td><td>The request represents an intention to ensure something occurs without providing an authorization for others to act.</td></tr><tr><td style="white-space:nowrap">order<a name="medicationrequest-intent-order"> </a></td><td>Order</td><td>The request represents a request/demand and authorization for action</td></tr><tr><td style="white-space:nowrap">original-order<a name="medicationrequest-intent-original-order"> </a></td><td>Original Order</td><td>The request represents the original authorization for the medication request.</td></tr><tr><td style="white-space:nowrap">reflex-order<a name="medicationrequest-intent-reflex-order"> </a></td><td>Reflex Order</td><td>The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..</td></tr><tr><td style="white-space:nowrap">filler-order<a name="medicationrequest-intent-filler-order"> </a></td><td>Filler Order</td><td>The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller\'s intention to act upon a submitted order.</td></tr><tr><td style="white-space:nowrap">instance-order<a name="medicationrequest-intent-instance-order"> </a></td><td>Instance Order</td><td>The request represents an instance for the particular order, for example a medication administration record.</td></tr><tr><td style="white-space:nowrap">option<a name="medicationrequest-intent-option"> </a></td><td>Option</td><td>The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://hl7.org/fhir/CodeSystem/medicationrequest-intent",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1378",
    },
  ],
  version: "4.3.0",
  name: "MedicationRequest Intent Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationrequest-intent",
  content: "complete",
  concept: [
    {
      code: "proposal",
      display: "Proposal",
      definition:
        "The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act",
    },
    {
      code: "plan",
      display: "Plan",
      definition:
        "The request represents an intention to ensure something occurs without providing an authorization for others to act.",
    },
    {
      code: "order",
      display: "Order",
      definition:
        "The request represents a request/demand and authorization for action",
    },
    {
      code: "original-order",
      display: "Original Order",
      definition:
        "The request represents the original authorization for the medication request.",
    },
    {
      code: "reflex-order",
      display: "Reflex Order",
      definition:
        "The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..",
    },
    {
      code: "filler-order",
      display: "Filler Order",
      definition:
        "The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.",
    },
    {
      code: "instance-order",
      display: "Instance Order",
      definition:
        "The request represents an instance for the particular order, for example a medication administration record.",
    },
    {
      code: "option",
      display: "Option",
      definition:
        "The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.",
    },
  ],
};
