/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 * http://hl7.org/fhir/contract-content-derivative
 */
export const ContractContentDerivativeCodeSystem = {
  resourceType: "CodeSystem",
  id: "contract-content-derivative",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-content-derivative defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">registration<a name="contract-content-derivative-registration"> </a></td><td>Content Registration</td><td>Content derivative that conveys sufficient information needed to register the source basal content from which it is derived.  This derivative content may be used to register the basal content as it changes status in its lifecycle.  For example, content registration may occur when the basal content is created, updated, inactive, or deleted.</td></tr><tr><td style="white-space:nowrap">retrieval<a name="contract-content-derivative-retrieval"> </a></td><td>Content Retrieval</td><td>A content derivative that conveys sufficient information to locate and retrieve the content.</td></tr><tr><td style="white-space:nowrap">statement<a name="contract-content-derivative-statement"> </a></td><td>Content Statement</td><td>Content derivative that has less than full fidelity to the basal information source from which it was \'transcribed\'. It provides recipients with the full content representation they may require for compliance purposes, and typically include a reference to or an attached unstructured representation for recipients needing an exact copy of the legal agreement.</td></tr><tr><td style="white-space:nowrap">shareable<a name="contract-content-derivative-shareable"> </a></td><td>Shareable Content</td><td>A Content Derivative that conveys sufficient information to determine the authorized entities with which the content may be shared.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-content-derivative",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.746",
    },
  ],
  version: "4.3.0",
  name: "ContractContentDerivative",
  status: "draft",
  experimental: true,
  date: "2017-02-19",
  publisher: "HL7 International",
  contact: [
    {
      name: "FHIR project team",
      telecom: [{ system: "url", value: "http://hl7.org/fhir" }],
    },
  ],
  description:
    "This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "registration",
      display: "Content Registration",
      definition:
        "Content derivative that conveys sufficient information needed to register the source basal content from which it is derived.  This derivative content may be used to register the basal content as it changes status in its lifecycle.  For example, content registration may occur when the basal content is created, updated, inactive, or deleted.",
    },
    {
      code: "retrieval",
      display: "Content Retrieval",
      definition:
        "A content derivative that conveys sufficient information to locate and retrieve the content.",
    },
    {
      code: "statement",
      display: "Content Statement",
      definition:
        "Content derivative that has less than full fidelity to the basal information source from which it was 'transcribed'. It provides recipients with the full content representation they may require for compliance purposes, and typically include a reference to or an attached unstructured representation for recipients needing an exact copy of the legal agreement.",
    },
    {
      code: "shareable",
      display: "Shareable Content",
      definition:
        "A Content Derivative that conveys sufficient information to determine the authorized entities with which the content may be shared.",
    },
  ],
};
