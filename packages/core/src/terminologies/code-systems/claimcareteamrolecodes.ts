/**
 * This value set includes sample Claim Care Team Role codes.
 * http://terminology.hl7.org/CodeSystem/claimcareteamrole
 */
export const ClaimCareTeamRoleCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "claim-careteamrole",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/claimcareteamrole defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">primary<a name="claim-careteamrole-primary"> </a></td><td>Primary provider</td><td>The primary care provider.</td></tr><tr><td style="white-space:nowrap">assist<a name="claim-careteamrole-assist"> </a></td><td>Assisting Provider</td><td>Assisting care provider.</td></tr><tr><td style="white-space:nowrap">supervisor<a name="claim-careteamrole-supervisor"> </a></td><td>Supervising Provider</td><td>Supervising care provider.</td></tr><tr><td style="white-space:nowrap">other<a name="claim-careteamrole-other"> </a></td><td>Other</td><td>Other role on the care team.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1165",
    },
  ],
  version: "4.3.0",
  name: "ClaimCareTeamRoleCodes",
  title: "Claim Care Team Role Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Claim Care Team Role codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "primary",
      display: "Primary provider",
      definition: "The primary care provider.",
    },
    {
      code: "assist",
      display: "Assisting Provider",
      definition: "Assisting care provider.",
    },
    {
      code: "supervisor",
      display: "Supervising Provider",
      definition: "Supervising care provider.",
    },
    {
      code: "other",
      display: "Other",
      definition: "Other role on the care team.",
    },
  ],
};
