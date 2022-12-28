/**
 * This value set includes sample Contract Term Type codes.
 * http://hl7.org/fhir/contract-term-type
 */
export const ContractTermTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "contract-term-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-term-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">statutory<a name="contract-term-type-statutory"> </a></td><td>Statutory</td><td>Based on specialized statutes that deal with particular subjects.</td></tr><tr><td style="white-space:nowrap">subject-to<a name="contract-term-type-subject-to"> </a></td><td>Subject To</td><td>Execution of the term in the contract is conditional on the execution of other actions.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-term-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ContractTermTypeCodes",
  title: "Contract Term Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Contract Term Type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "statutory",
      display: "Statutory",
      definition:
        "Based on specialized statutes that deal with particular subjects.",
    },
    {
      code: "subject-to",
      display: "Subject To",
      definition:
        "Execution of the term in the contract is conditional on the execution of other actions.",
    },
  ],
};
