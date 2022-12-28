/**
 * This value set includes sample Missing Tooth Reason codes.
 * http://terminology.hl7.org/CodeSystem/missingtoothreason
 */
export const MissingToothReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "missing-tooth-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/missingtoothreason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">e<a name="missing-tooth-reason-e"> </a></td><td>E</td><td>Extraction</td></tr><tr><td style="white-space:nowrap">c<a name="missing-tooth-reason-c"> </a></td><td>C</td><td>Congenital</td></tr><tr><td style="white-space:nowrap">u<a name="missing-tooth-reason-u"> </a></td><td>U</td><td>Unknown</td></tr><tr><td style="white-space:nowrap">o<a name="missing-tooth-reason-o"> </a></td><td>O</td><td>Other</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1150",
    },
  ],
  version: "4.3.0",
  name: "MissingToothReasonCodes",
  title: "Missing Tooth Reason Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Missing Tooth Reason codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "e", display: "E", definition: "Extraction" },
    { code: "c", display: "C", definition: "Congenital" },
    { code: "u", display: "U", definition: "Unknown" },
    { code: "o", display: "O", definition: "Other" },
  ],
};
