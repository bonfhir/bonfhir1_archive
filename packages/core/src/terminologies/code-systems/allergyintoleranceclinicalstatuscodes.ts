export const AllergyIntoleranceClinicalStatusCodes = {
  resourceType: "CodeSystem",
  id: "allergyintolerance-clinical",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">active<a name="allergyintolerance-clinical-active"> </a></td><td>Active</td><td>The subject is currently experiencing, or is at risk of, a reaction to the identified substance.</td></tr><tr><td>1</td><td style="white-space:nowrap">inactive<a name="allergyintolerance-clinical-inactive"> </a></td><td>Inactive</td><td>The subject is no longer at risk of a reaction to the identified substance.</td></tr><tr><td>2</td><td style="white-space:nowrap">  resolved<a name="allergyintolerance-clinical-resolved"> </a></td><td>Resolved</td><td>A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1373",
    },
  ],
  version: "4.3.0",
  name: "AllergyIntoleranceClinicalStatusCodes",
  title: "AllergyIntolerance Clinical Status Codes",
  status: "draft",
  experimental: false,
  description: "Preferred value set for AllergyIntolerance Clinical Status.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/allergyintolerance-clinical",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition:
        "The subject is currently experiencing, or is at risk of, a reaction to the identified substance.",
    },
    {
      code: "inactive",
      display: "Inactive",
      definition:
        "The subject is no longer at risk of a reaction to the identified substance.",
      concept: [
        {
          code: "resolved",
          display: "Resolved",
          definition:
            "A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.",
        },
      ],
    },
  ],
};
