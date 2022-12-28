export const ProvenanceParticipantRole = {
  resourceType: "CodeSystem",
  id: "provenance-participant-role",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/provenance-participant-role defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">enterer<a name="provenance-participant-role-enterer"> </a></td><td>Enterer</td><td>A person entering the data into the originating system</td></tr><tr><td>1</td><td style="white-space:nowrap">performer<a name="provenance-participant-role-performer"> </a></td><td>Performer</td><td>A person, animal, organization or device that who actually and principally carries out the activity</td></tr><tr><td>1</td><td style="white-space:nowrap">author<a name="provenance-participant-role-author"> </a></td><td>Author</td><td>A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource</td></tr><tr><td>1</td><td style="white-space:nowrap">verifier<a name="provenance-participant-role-verifier"> </a></td><td>Verifier</td><td>A person who verifies the correctness and appropriateness of activity</td></tr><tr><td>2</td><td style="white-space:nowrap">  legal<a name="provenance-participant-role-legal"> </a></td><td>Legal Authenticator</td><td>The person authenticated the content and accepted legal responsibility for its content</td></tr><tr><td>1</td><td style="white-space:nowrap">attester<a name="provenance-participant-role-attester"> </a></td><td>Attester</td><td>A verifier who attests to the accuracy of the resource</td></tr><tr><td>1</td><td style="white-space:nowrap">informant<a name="provenance-participant-role-informant"> </a></td><td>Informant</td><td>A person who reported information that contributed to the resource</td></tr><tr><td>1</td><td style="white-space:nowrap">custodian<a name="provenance-participant-role-custodian"> </a></td><td>Custodian</td><td>The entity that is accountable for maintaining a true an accurate copy of the original record</td></tr><tr><td>1</td><td style="white-space:nowrap">assembler<a name="provenance-participant-role-assembler"> </a></td><td>Assembler</td><td>A device that operates independently of an author on custodian\'s algorithms for data extraction of existing information for purpose of generating a new artifact.</td></tr><tr><td>1</td><td style="white-space:nowrap">composer<a name="provenance-participant-role-composer"> </a></td><td>Composer</td><td>A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/provenance-participant-role",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ProvenanceParticipantRole",
  status: "draft",
  experimental: false,
  date: "2023-05-12T00:00:00+10:00",
  description: "The role that a provenance participant played",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/provenance-participant-role",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "enterer",
      display: "Enterer",
      definition: "A person entering the data into the originating system",
    },
    {
      code: "performer",
      display: "Performer",
      definition:
        "A person, animal, organization or device that who actually and principally carries out the activity",
    },
    {
      code: "author",
      display: "Author",
      definition:
        "A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource",
    },
    {
      code: "verifier",
      display: "Verifier",
      definition:
        "A person who verifies the correctness and appropriateness of activity",
      concept: [
        {
          code: "legal",
          display: "Legal Authenticator",
          definition:
            "The person authenticated the content and accepted legal responsibility for its content",
        },
      ],
    },
    {
      code: "attester",
      display: "Attester",
      definition: "A verifier who attests to the accuracy of the resource",
    },
    {
      code: "informant",
      display: "Informant",
      definition:
        "A person who reported information that contributed to the resource",
    },
    {
      code: "custodian",
      display: "Custodian",
      definition:
        "The entity that is accountable for maintaining a true an accurate copy of the original record",
    },
    {
      code: "assembler",
      display: "Assembler",
      definition:
        "A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.",
    },
    {
      code: "composer",
      display: "Composer",
      definition:
        "A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.",
    },
  ],
};
