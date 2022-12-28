export const ContractTypeCodes = {
  resourceType: "CodeSystem",
  id: "contract-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">privacy<a name="contract-type-privacy"> </a></td><td>Privacy</td><td>Privacy policy.</td></tr><tr><td style="white-space:nowrap">disclosure<a name="contract-type-disclosure"> </a></td><td>Disclosure</td><td>Information disclosure policy.</td></tr><tr><td style="white-space:nowrap">healthinsurance<a name="contract-type-healthinsurance"> </a></td><td>Health Insurance</td><td>Health Insurance policy.</td></tr><tr><td style="white-space:nowrap">supply<a name="contract-type-supply"> </a></td><td>Supply Contract</td><td>Contract to supply goods or services.</td></tr><tr><td style="white-space:nowrap">consent<a name="contract-type-consent"> </a></td><td>Consent</td><td>Consent Directive.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ContractTypeCodes",
  title: "Contract Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Contract Type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "privacy", display: "Privacy", definition: "Privacy policy." },
    {
      code: "disclosure",
      display: "Disclosure",
      definition: "Information disclosure policy.",
    },
    {
      code: "healthinsurance",
      display: "Health Insurance",
      definition: "Health Insurance policy.",
    },
    {
      code: "supply",
      display: "Supply Contract",
      definition: "Contract to supply goods or services.",
    },
    { code: "consent", display: "Consent", definition: "Consent Directive." },
  ],
};
