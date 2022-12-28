export const OrganizationType = {
  resourceType: "CodeSystem",
  id: "organization-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/organization-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">prov<a name="organization-type-prov"> </a></td><td>Healthcare Provider</td><td>An organization that provides healthcare services.</td></tr><tr><td style="white-space:nowrap">dept<a name="organization-type-dept"> </a></td><td>Hospital Department</td><td>A department or ward within a hospital (Generally is not applicable to top level organizations)</td></tr><tr><td style="white-space:nowrap">team<a name="organization-type-team"> </a></td><td>Organizational team</td><td>An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).</td></tr><tr><td style="white-space:nowrap">govt<a name="organization-type-govt"> </a></td><td>Government</td><td>A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.</td></tr><tr><td style="white-space:nowrap">ins<a name="organization-type-ins"> </a></td><td>Insurance Company</td><td>A company that provides insurance to its subscribers that may include healthcare related policies.</td></tr><tr><td style="white-space:nowrap">pay<a name="organization-type-pay"> </a></td><td>Payer</td><td>A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.</td></tr><tr><td style="white-space:nowrap">edu<a name="organization-type-edu"> </a></td><td>Educational Institute</td><td>An educational institution that provides education or research facilities.</td></tr><tr><td style="white-space:nowrap">reli<a name="organization-type-reli"> </a></td><td>Religious Institution</td><td>An organization that is identified as a part of a religious institution.</td></tr><tr><td style="white-space:nowrap">crs<a name="organization-type-crs"> </a></td><td>Clinical Research Sponsor</td><td>An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.</td></tr><tr><td style="white-space:nowrap">cg<a name="organization-type-cg"> </a></td><td>Community Group</td><td>An un-incorporated community group.</td></tr><tr><td style="white-space:nowrap">bus<a name="organization-type-bus"> </a></td><td>Non-Healthcare Business or Corporation</td><td>An organization that is a registered business or corporation but not identified by other types.</td></tr><tr><td style="white-space:nowrap">other<a name="organization-type-other"> </a></td><td>Other</td><td>Other type of organization not already specified.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/organization-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1128",
    },
  ],
  version: "4.3.0",
  name: "OrganizationType",
  status: "draft",
  experimental: false,
  description:
    "This example value set defines a set of codes that can be used to indicate a type of organization.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "prov",
      display: "Healthcare Provider",
      definition: "An organization that provides healthcare services.",
    },
    {
      code: "dept",
      display: "Hospital Department",
      definition:
        "A department or ward within a hospital (Generally is not applicable to top level organizations)",
    },
    {
      code: "team",
      display: "Organizational team",
      definition:
        "An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department).",
    },
    {
      code: "govt",
      display: "Government",
      definition:
        "A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government.",
    },
    {
      code: "ins",
      display: "Insurance Company",
      definition:
        "A company that provides insurance to its subscribers that may include healthcare related policies.",
    },
    {
      code: "pay",
      display: "Payer",
      definition:
        "A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients.",
    },
    {
      code: "edu",
      display: "Educational Institute",
      definition:
        "An educational institution that provides education or research facilities.",
    },
    {
      code: "reli",
      display: "Religious Institution",
      definition:
        "An organization that is identified as a part of a religious institution.",
    },
    {
      code: "crs",
      display: "Clinical Research Sponsor",
      definition:
        "An organization that is identified as a Pharmaceutical/Clinical Research Sponsor.",
    },
    {
      code: "cg",
      display: "Community Group",
      definition: "An un-incorporated community group.",
    },
    {
      code: "bus",
      display: "Non-Healthcare Business or Corporation",
      definition:
        "An organization that is a registered business or corporation but not identified by other types.",
    },
    {
      code: "other",
      display: "Other",
      definition: "Other type of organization not already specified.",
    },
  ],
};
