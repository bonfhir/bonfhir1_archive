/**
 * This CodeSystem contains FHIR-defined contract definition subtypes.
 * http://hl7.org/fhir/contract-definition-subtype
 */
export const ContractDefinitionSubtypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "contract-definition-subtype",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-definition-subtype defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">temp<a name="contract-definition-subtype-temp"> </a></td><td>Temporary Value</td><td>To be completed</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-definition-subtype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1213",
    },
  ],
  version: "4.3.0",
  name: "ContractDefinitionSubtype",
  status: "draft",
  experimental: true,
  date: "2017-02-13",
  publisher: "HL7 International",
  contact: [
    {
      name: "FHIR project team",
      telecom: [{ system: "url", value: "http://hl7.org/fhir" }],
    },
  ],
  description:
    "This CodeSystem contains FHIR-defined contract definition subtypes.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "temp", display: "Temporary Value", definition: "To be completed" },
  ],
};
