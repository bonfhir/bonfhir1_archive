export const ExceptionCodes = {
  resourceType: "CodeSystem",
  id: "claim-exception",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/claim-exception defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">student<a name="claim-exception-student"> </a></td><td>Student (Fulltime)</td><td>Fulltime Student</td></tr><tr><td style="white-space:nowrap">disabled<a name="claim-exception-disabled"> </a></td><td>Disabled</td><td>Disabled</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/claim-exception",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1162",
    },
  ],
  version: "4.3.0",
  name: "ExceptionCodes",
  title: "Exception Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Exception codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "student",
      display: "Student (Fulltime)",
      definition: "Fulltime Student",
    },
    { code: "disabled", display: "Disabled", definition: "Disabled" },
  ],
};
