/**
 * Preferred value set for Condition Clinical Status.
 * http://terminology.hl7.org/CodeSystem/condition-clinical
 */
export const ConditionClinicalStatusCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "condition-clinical",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/condition-clinical defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">active<a name="condition-clinical-active"> </a></td><td>Active</td><td>The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.</td></tr><tr><td>2</td><td style="white-space:nowrap">  recurrence<a name="condition-clinical-recurrence"> </a></td><td>Recurrence</td><td>The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.</td></tr><tr><td>2</td><td style="white-space:nowrap">  relapse<a name="condition-clinical-relapse"> </a></td><td>Relapse</td><td>The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.</td></tr><tr><td>1</td><td style="white-space:nowrap">inactive<a name="condition-clinical-inactive"> </a></td><td>Inactive</td><td>The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.</td></tr><tr><td>2</td><td style="white-space:nowrap">  remission<a name="condition-clinical-remission"> </a></td><td>Remission</td><td>The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.</td></tr><tr><td>2</td><td style="white-space:nowrap">  resolved<a name="condition-clinical-resolved"> </a></td><td>Resolved</td><td>The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/condition-clinical",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1074",
    },
  ],
  version: "4.3.0",
  name: "ConditionClinicalStatusCodes",
  title: "Condition Clinical Status Codes",
  status: "draft",
  experimental: false,
  description: "Preferred value set for Condition Clinical Status.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/condition-clinical",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition:
        "The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.",
      concept: [
        {
          code: "recurrence",
          display: "Recurrence",
          definition:
            "The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.",
        },
        {
          code: "relapse",
          display: "Relapse",
          definition:
            "The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.",
        },
      ],
    },
    {
      code: "inactive",
      display: "Inactive",
      definition:
        "The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.",
      concept: [
        {
          code: "remission",
          display: "Remission",
          definition:
            "The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.",
        },
        {
          code: "resolved",
          display: "Resolved",
          definition:
            "The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.",
        },
      ],
    },
  ],
};
