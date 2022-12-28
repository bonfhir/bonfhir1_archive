export const ContractActorRoleCodes = {
  resourceType: "CodeSystem",
  id: "contract-actorrole",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-actorrole defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">practitioner<a name="contract-actorrole-practitioner"> </a></td><td>Practitioner</td><td>Someone who provides health care related services to people or animals including both clinical and support services.</td></tr><tr><td style="white-space:nowrap">patient<a name="contract-actorrole-patient"> </a></td><td>Patient</td><td>A receiver, human or animal, of health care related goods and services.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-actorrole",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ContractActorRoleCodes",
  title: "Contract Actor Role Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Contract Actor Role codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "practitioner",
      display: "Practitioner",
      definition:
        "Someone who provides health care related services to people or animals including both clinical and support services.",
    },
    {
      code: "patient",
      display: "Patient",
      definition:
        "A receiver, human or animal, of health care related goods and services.",
    },
  ],
};
