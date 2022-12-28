/**
 * This code system supports describing the source of the vaccine actually administered. This may be different than the patient eligbility (e.g. the patient may be eligibile for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
 * http://terminology.hl7.org/CodeSystem/immunization-funding-source
 */
export const ImmunizationEventFundingSourceCodeSystem = {
  resourceType: "CodeSystem",
  id: "immunization-funding-source",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/immunization-funding-source defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">private<a name="immunization-funding-source-private"> </a></td><td>Private</td><td>The vaccine was purchased with private funds.</td></tr><tr><td style="white-space:nowrap">public<a name="immunization-funding-source-public"> </a></td><td>Public</td><td>The vaccine was purchased with public funds.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pher",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1100",
    },
  ],
  version: "4.3.0",
  name: "ImmunizationEventFundingSource",
  title: "Immunization Event Funding Source",
  status: "draft",
  experimental: false,
  description:
    "This code system supports describing the source of the vaccine actually administered. This may be different than the patient eligbility (e.g. the patient may be eligibile for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "private",
      display: "Private",
      definition: "The vaccine was purchased with private funds.",
    },
    {
      code: "public",
      display: "Public",
      definition: "The vaccine was purchased with public funds.",
    },
  ],
};
