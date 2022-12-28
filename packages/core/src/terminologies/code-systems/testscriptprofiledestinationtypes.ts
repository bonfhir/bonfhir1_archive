export const TestScriptProfileDestinationTypes = {
  resourceType: "CodeSystem",
  id: "testscript-profile-destination-types",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">FHIR-Server<a name="testscript-profile-destination-types-FHIR-Server"> </a></td><td>FHIR Server</td><td>General FHIR server used to respond to operations sent from a FHIR client.</td></tr><tr><td style="white-space:nowrap">FHIR-SDC-FormManager<a name="testscript-profile-destination-types-FHIR-SDC-FormManager"> </a></td><td>FHIR SDC FormManager</td><td>A FHIR server acting as a Structured Data Capture Form Manager.</td></tr><tr><td style="white-space:nowrap">FHIR-SDC-FormProcessor<a name="testscript-profile-destination-types-FHIR-SDC-FormProcessor"> </a></td><td>FHIR SDC FormProcessor</td><td>A FHIR server acting as a Structured Data Capture Form Processor.</td></tr><tr><td style="white-space:nowrap">FHIR-SDC-FormReceiver<a name="testscript-profile-destination-types-FHIR-SDC-FormReceiver"> </a></td><td>FHIR SDC FormReceiver</td><td>A FHIR server acting as a Structured Data Capture Form Receiver.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1197",
    },
  ],
  version: "4.3.0",
  name: "TestScriptProfileDestinationTypes",
  status: "draft",
  experimental: false,
  description:
    "This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "FHIR-Server",
      display: "FHIR Server",
      definition:
        "General FHIR server used to respond to operations sent from a FHIR client.",
    },
    {
      code: "FHIR-SDC-FormManager",
      display: "FHIR SDC FormManager",
      definition:
        "A FHIR server acting as a Structured Data Capture Form Manager.",
    },
    {
      code: "FHIR-SDC-FormProcessor",
      display: "FHIR SDC FormProcessor",
      definition:
        "A FHIR server acting as a Structured Data Capture Form Processor.",
    },
    {
      code: "FHIR-SDC-FormReceiver",
      display: "FHIR SDC FormReceiver",
      definition:
        "A FHIR server acting as a Structured Data Capture Form Receiver.",
    },
  ],
};
