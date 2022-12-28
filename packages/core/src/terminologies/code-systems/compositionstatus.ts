export const CompositionStatus = {
  resourceType: "CodeSystem",
  id: "composition-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>CompositionStatus</h2>\n      \n      <div>\n        \n        <p>The workflow/clinical status of the composition.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/composition-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">preliminary\n            \n            <a name="composition-status-preliminary"> </a>\n          \n          </td>\n          \n          <td>Preliminary</td>\n          \n          <td>This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">final\n            \n            <a name="composition-status-final"> </a>\n          \n          </td>\n          \n          <td>Final</td>\n          \n          <td>This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">amended\n            \n            <a name="composition-status-amended"> </a>\n          \n          </td>\n          \n          <td>Amended</td>\n          \n          <td>The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as &quot;final&quot; and the composition is complete and verified by an authorized person.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="composition-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in Error</td>\n          \n          <td>The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sd",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/composition-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.242",
    },
  ],
  version: "4.3.0",
  name: "CompositionStatus",
  title: "CompositionStatus",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The workflow/clinical status of the composition.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/composition-status",
  content: "complete",
  concept: [
    {
      code: "preliminary",
      display: "Preliminary",
      definition:
        "This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.",
    },
    {
      code: "final",
      display: "Final",
      definition:
        "This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.",
    },
    {
      code: "amended",
      display: "Amended",
      definition:
        'The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.',
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        "The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.",
    },
  ],
};
