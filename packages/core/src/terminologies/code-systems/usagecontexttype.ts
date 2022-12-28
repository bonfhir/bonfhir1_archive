/**
 * A code that specifies a type of context being specified by a usage context.
 * http://terminology.hl7.org/CodeSystem/usage-context-type
 */
export const UsageContextTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "usage-context-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/usage-context-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">gender<a name="usage-context-type-gender"> </a></td><td>Gender</td><td>The gender of the patient. For this context type, appropriate values can be found in the http://hl7.org/fhir/ValueSet/administrative-gender value set.</td></tr><tr><td style="white-space:nowrap">age<a name="usage-context-type-age"> </a></td><td>Age Range</td><td>The age of the patient. For this context type, the value could be a range that specifies the applicable ages or a code from an appropriate value set such as the MeSH value set http://terminology.hl7.org/ValueSet/v3-AgeGroupObservationValue.</td></tr><tr><td style="white-space:nowrap">focus<a name="usage-context-type-focus"> </a></td><td>Clinical Focus</td><td>The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.</td></tr><tr><td style="white-space:nowrap">user<a name="usage-context-type-user"> </a></td><td>User Type</td><td>The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from a specialty value set such as the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.</td></tr><tr><td style="white-space:nowrap">workflow<a name="usage-context-type-workflow"> </a></td><td>Workflow Setting</td><td>The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://terminology.hl7.org/ValueSet/v3-ActEncounterCode.</td></tr><tr><td style="white-space:nowrap">task<a name="usage-context-type-task"> </a></td><td>Workflow Task</td><td>The context for the clinical task(s) represented by this artifact. For example, this could be any task context represented by the HL7 ActTaskCode value set http://terminology.hl7.org/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.</td></tr><tr><td style="white-space:nowrap">venue<a name="usage-context-type-venue"> </a></td><td>Clinical Venue</td><td>The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from the HL7 ServiceDeliveryLocationRoleType value set (http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType).</td></tr><tr><td style="white-space:nowrap">species<a name="usage-context-type-species"> </a></td><td>Species</td><td>The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).</td></tr><tr><td style="white-space:nowrap">program<a name="usage-context-type-program"> </a></td><td>Program</td><td>A program/project of work for which this artifact is applicable.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/usage-context-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1068",
    },
  ],
  version: "4.3.0",
  name: "UsageContextType",
  title: "UsageContextType",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description:
    "A code that specifies a type of context being specified by a usage context.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/usage-context-type",
  content: "complete",
  concept: [
    {
      code: "gender",
      display: "Gender",
      definition:
        "The gender of the patient. For this context type, appropriate values can be found in the http://hl7.org/fhir/ValueSet/administrative-gender value set.",
    },
    {
      code: "age",
      display: "Age Range",
      definition:
        "The age of the patient. For this context type, the value could be a range that specifies the applicable ages or a code from an appropriate value set such as the MeSH value set http://terminology.hl7.org/ValueSet/v3-AgeGroupObservationValue.",
    },
    {
      code: "focus",
      display: "Clinical Focus",
      definition:
        "The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.",
    },
    {
      code: "user",
      display: "User Type",
      definition:
        "The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from a specialty value set such as the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.",
    },
    {
      code: "workflow",
      display: "Workflow Setting",
      definition:
        "The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://terminology.hl7.org/ValueSet/v3-ActEncounterCode.",
    },
    {
      code: "task",
      display: "Workflow Task",
      definition:
        "The context for the clinical task(s) represented by this artifact. For example, this could be any task context represented by the HL7 ActTaskCode value set http://terminology.hl7.org/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.",
    },
    {
      code: "venue",
      display: "Clinical Venue",
      definition:
        "The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from the HL7 ServiceDeliveryLocationRoleType value set (http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType).",
    },
    {
      code: "species",
      display: "Species",
      definition:
        "The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).",
    },
    {
      code: "program",
      display: "Program",
      definition:
        "A program/project of work for which this artifact is applicable.",
    },
  ],
};
