export const SecurityRoleType = {
  resourceType: "CodeSystem",
  id: "extra-security-role-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/extra-security-role-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">authserver<a name="extra-security-role-type-authserver"> </a></td><td>authorization server</td><td>An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner\'s preapproved permissions. For example, an UMA Authorization Server[UMA]</td></tr><tr><td style="white-space:nowrap">datacollector<a name="extra-security-role-type-datacollector"> </a></td><td>data collector</td><td>An entity that collects information over which the data subject may have certain rights under policy or law to control that information\'s management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.</td></tr><tr><td style="white-space:nowrap">dataprocessor<a name="extra-security-role-type-dataprocessor"> </a></td><td>data processor</td><td>An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information\'s management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.</td></tr><tr><td style="white-space:nowrap">datasubject<a name="extra-security-role-type-datasubject"> </a></td><td>data subject</td><td>A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information\'s management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.</td></tr><tr><td style="white-space:nowrap">humanuser<a name="extra-security-role-type-humanuser"> </a></td><td>human user</td><td>The human user that has participated.</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
  version: "4.3.0-cibuild",
  name: "SecurityRoleType",
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
    "This CodeSystem contains Additional FHIR-defined Security Role types not defined elsewhere",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "authserver",
      display: "authorization server",
      definition:
        "An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]",
    },
    {
      code: "datacollector",
      display: "data collector",
      definition:
        "An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.",
    },
    {
      code: "dataprocessor",
      display: "data processor",
      definition:
        "An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.",
    },
    {
      code: "datasubject",
      display: "data subject",
      definition:
        "A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.",
    },
    {
      code: "humanuser",
      display: "human user",
      definition: "The human user that has participated.",
    },
  ],
};
