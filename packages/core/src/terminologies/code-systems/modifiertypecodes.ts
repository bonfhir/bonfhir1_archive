/**
 * This value set includes sample Modifier type codes.
 * http://terminology.hl7.org/CodeSystem/modifiers
 */
export const ModifierTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "claim-modifiers",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/modifiers defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">a<a name="claim-modifiers-a"> </a></td><td>Repair of prior service or installation</td><td>Repair of prior service or installation.</td></tr><tr><td style="white-space:nowrap">b<a name="claim-modifiers-b"> </a></td><td>Temporary service or installation</td><td>Temporary service or installation.</td></tr><tr><td style="white-space:nowrap">c<a name="claim-modifiers-c"> </a></td><td>TMJ treatment</td><td>Treatment associated with TMJ.</td></tr><tr><td style="white-space:nowrap">e<a name="claim-modifiers-e"> </a></td><td>Implant or associated with an implant</td><td>Implant or associated with an implant.</td></tr><tr><td style="white-space:nowrap">rooh<a name="claim-modifiers-rooh"> </a></td><td>Rush or Outside of office hours</td><td>A Rush service or service performed outside of normal office hours.</td></tr><tr><td style="white-space:nowrap">x<a name="claim-modifiers-x"> </a></td><td>None</td><td>None.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/modifiers",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1151",
    },
  ],
  version: "4.3.0",
  name: "ModifierTypeCodes",
  title: "Modifier type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Modifier type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "a",
      display: "Repair of prior service or installation",
      definition: "Repair of prior service or installation.",
    },
    {
      code: "b",
      display: "Temporary service or installation",
      definition: "Temporary service or installation.",
    },
    {
      code: "c",
      display: "TMJ treatment",
      definition: "Treatment associated with TMJ.",
    },
    {
      code: "e",
      display: "Implant or associated with an implant",
      definition: "Implant or associated with an implant.",
    },
    {
      code: "rooh",
      display: "Rush or Outside of office hours",
      definition:
        "A Rush service or service performed outside of normal office hours.",
    },
    { code: "x", display: "None", definition: "None." },
  ],
};
