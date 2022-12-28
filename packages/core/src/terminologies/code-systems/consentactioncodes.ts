/**
 * This value set includes example Consent Action codes.
 * http://terminology.hl7.org/CodeSystem/consentaction
 */
export const ConsentActionCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "consent-action",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/consentaction defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">collect<a name="consent-action-collect"> </a></td><td>Collect</td><td>Gather retrieved information for storage</td></tr><tr><td style="white-space:nowrap">access<a name="consent-action-access"> </a></td><td>Access</td><td>Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)</td></tr><tr><td style="white-space:nowrap">use<a name="consent-action-use"> </a></td><td>Use</td><td>Utilize the retrieved information</td></tr><tr><td style="white-space:nowrap">disclose<a name="consent-action-disclose"> </a></td><td>Disclose</td><td>Transfer retrieved information</td></tr><tr><td style="white-space:nowrap">correct<a name="consent-action-correct"> </a></td><td>Access and Correct</td><td>Allow retrieval of a patient\'s information for the purpose of update or rectify</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cbcc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/consentaction",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1227",
    },
  ],
  version: "4.3.0",
  name: "ConsentActionCodes",
  title: "Consent Action Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes example Consent Action codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "collect",
      display: "Collect",
      definition: "Gather retrieved information for storage",
    },
    {
      code: "access",
      display: "Access",
      definition:
        "Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)",
    },
    {
      code: "use",
      display: "Use",
      definition: "Utilize the retrieved information",
    },
    {
      code: "disclose",
      display: "Disclose",
      definition: "Transfer retrieved information",
    },
    {
      code: "correct",
      display: "Access and Correct",
      definition:
        "Allow retrieval of a patient's information for the purpose of update or rectify",
    },
  ],
};
