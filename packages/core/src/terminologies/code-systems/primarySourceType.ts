export const primarysourcetype = {
  resourceType: "CodeSystem",
  id: "verificationresult-primary-source-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-primary-source-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">lic-board<a name="verificationresult-primary-source-type-lic-board"> </a></td><td>License Board</td></tr><tr><td style="white-space:nowrap">prim<a name="verificationresult-primary-source-type-prim"> </a></td><td>Primary Education</td></tr><tr><td style="white-space:nowrap">cont-ed<a name="verificationresult-primary-source-type-cont-ed"> </a></td><td>Continuing Education</td></tr><tr><td style="white-space:nowrap">post-serv<a name="verificationresult-primary-source-type-post-serv"> </a></td><td>Postal Service</td></tr><tr><td style="white-space:nowrap">rel-own<a name="verificationresult-primary-source-type-rel-own"> </a></td><td>Relationship owner</td></tr><tr><td style="white-space:nowrap">reg-auth<a name="verificationresult-primary-source-type-reg-auth"> </a></td><td>Registration Authority</td></tr><tr><td style="white-space:nowrap">legal<a name="verificationresult-primary-source-type-legal"> </a></td><td>Legal source</td></tr><tr><td style="white-space:nowrap">issuer<a name="verificationresult-primary-source-type-issuer"> </a></td><td>Issuing source</td></tr><tr><td style="white-space:nowrap">auth-source<a name="verificationresult-primary-source-type-auth-source"> </a></td><td>Authoritative source</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-primary-source-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.893",
    },
  ],
  version: "4.3.0",
  name: "primary-source-type",
  status: "draft",
  experimental: false,
  date: "2018-06-05T14:06:02+00:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Type of the validation primary source",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/primary-source-type",
  content: "complete",
  concept: [
    { code: "lic-board", display: "License Board" },
    { code: "prim", display: "Primary Education" },
    { code: "cont-ed", display: "Continuing Education" },
    { code: "post-serv", display: "Postal Service" },
    { code: "rel-own", display: "Relationship owner" },
    { code: "reg-auth", display: "Registration Authority" },
    { code: "legal", display: "Legal source" },
    { code: "issuer", display: "Issuing source" },
    { code: "auth-source", display: "Authoritative source" },
  ],
};
