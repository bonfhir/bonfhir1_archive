/**
 * How an entity was used in an activity.
 * http://hl7.org/fhir/provenance-entity-role
 */
export const ProvenanceEntityRoleCodeSystem = {
  resourceType: "CodeSystem",
  id: "provenance-entity-role",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>ProvenanceEntityRole</h2>\n      \n      \n      <div>\n        \n        \n        <p>How an entity was used in an activity.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://hl7.org/fhir/provenance-entity-role defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">derivation\n            \n            \n            <a name="provenance-entity-role-derivation"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Derivation</td>\n          \n          \n          <td>A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  revision\n            \n            \n            <a name="provenance-entity-role-revision"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Revision</td>\n          \n          \n          <td>A derivation for which the resulting entity is a revised version of some original.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  quotation\n            \n            \n            <a name="provenance-entity-role-quotation"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Quotation</td>\n          \n          \n          <td>The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  source\n            \n            \n            <a name="provenance-entity-role-source"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Source</td>\n          \n          \n          <td>A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic\'s study, without benefit from hindsight.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  removal\n            \n            \n            <a name="provenance-entity-role-removal"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Removal</td>\n          \n          \n          <td>A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sec",
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
  url: "http://hl7.org/fhir/provenance-entity-role",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.437",
    },
  ],
  version: "4.3.0",
  name: "ProvenanceEntityRole",
  title: "ProvenanceEntityRole",
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
  description: "How an entity was used in an activity.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/provenance-entity-role",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "derivation",
      display: "Derivation",
      definition:
        "A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.",
      concept: [
        {
          code: "revision",
          display: "Revision",
          definition:
            "A derivation for which the resulting entity is a revised version of some original.",
        },
        {
          code: "quotation",
          display: "Quotation",
          definition:
            "The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.",
        },
        {
          code: "source",
          display: "Source",
          definition:
            "A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.",
        },
        {
          code: "removal",
          display: "Removal",
          definition:
            "A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.",
        },
      ],
    },
  ],
};
