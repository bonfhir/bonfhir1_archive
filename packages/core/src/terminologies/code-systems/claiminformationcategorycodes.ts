/**
 * This value set includes sample Information Category codes.
 * http://terminology.hl7.org/CodeSystem/claiminformationcategory
 */
export const ClaimInformationCategoryCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "claim-informationcategory",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/claiminformationcategory defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">info<a name="claim-informationcategory-info"> </a></td><td>Information</td><td>Codes conveying additional situation and condition information.</td></tr><tr><td style="white-space:nowrap">discharge<a name="claim-informationcategory-discharge"> </a></td><td>Discharge</td><td>Discharge status and discharge to locations.</td></tr><tr><td style="white-space:nowrap">onset<a name="claim-informationcategory-onset"> </a></td><td>Onset</td><td>Period, start or end dates of aspects of the Condition.</td></tr><tr><td style="white-space:nowrap">related<a name="claim-informationcategory-related"> </a></td><td>Related Services</td><td>Nature and date of the related event e.g. Last exam, service, X-ray etc.</td></tr><tr><td style="white-space:nowrap">exception<a name="claim-informationcategory-exception"> </a></td><td>Exception</td><td>Insurance policy exceptions.</td></tr><tr><td style="white-space:nowrap">material<a name="claim-informationcategory-material"> </a></td><td>Materials Forwarded</td><td>Materials being forwarded, e.g. Models, molds, images, documents.</td></tr><tr><td style="white-space:nowrap">attachment<a name="claim-informationcategory-attachment"> </a></td><td>Attachment</td><td>Materials attached such as images, documents and resources.</td></tr><tr><td style="white-space:nowrap">missingtooth<a name="claim-informationcategory-missingtooth"> </a></td><td>Missing Tooth</td><td>Teeth which are missing for any reason, for example: prior extraction, never developed.</td></tr><tr><td style="white-space:nowrap">prosthesis<a name="claim-informationcategory-prosthesis"> </a></td><td>Prosthesis</td><td>The type of prosthesis and date of supply if a previously supplied prosthesis.</td></tr><tr><td style="white-space:nowrap">other<a name="claim-informationcategory-other"> </a></td><td>Other</td><td>Other information identified by the type.system.</td></tr><tr><td style="white-space:nowrap">hospitalized<a name="claim-informationcategory-hospitalized"> </a></td><td>Hospitalized</td><td>An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).</td></tr><tr><td style="white-space:nowrap">employmentimpacted<a name="claim-informationcategory-employmentimpacted"> </a></td><td>EmploymentImpacted</td><td>An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).</td></tr><tr><td style="white-space:nowrap">externalcause<a name="claim-informationcategory-externalcause"> </a></td><td>External Caause</td><td>The external cause of an illness or injury.</td></tr><tr><td style="white-space:nowrap">patientreasonforvisit<a name="claim-informationcategory-patientreasonforvisit"> </a></td><td>Patient Reason for Visit</td><td>The reason for the patient visit.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1163",
    },
  ],
  version: "4.3.0",
  name: "ClaimInformationCategoryCodes",
  title: "Claim Information Category Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Information Category codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "info",
      display: "Information",
      definition:
        "Codes conveying additional situation and condition information.",
    },
    {
      code: "discharge",
      display: "Discharge",
      definition: "Discharge status and discharge to locations.",
    },
    {
      code: "onset",
      display: "Onset",
      definition: "Period, start or end dates of aspects of the Condition.",
    },
    {
      code: "related",
      display: "Related Services",
      definition:
        "Nature and date of the related event e.g. Last exam, service, X-ray etc.",
    },
    {
      code: "exception",
      display: "Exception",
      definition: "Insurance policy exceptions.",
    },
    {
      code: "material",
      display: "Materials Forwarded",
      definition:
        "Materials being forwarded, e.g. Models, molds, images, documents.",
    },
    {
      code: "attachment",
      display: "Attachment",
      definition: "Materials attached such as images, documents and resources.",
    },
    {
      code: "missingtooth",
      display: "Missing Tooth",
      definition:
        "Teeth which are missing for any reason, for example: prior extraction, never developed.",
    },
    {
      code: "prosthesis",
      display: "Prosthesis",
      definition:
        "The type of prosthesis and date of supply if a previously supplied prosthesis.",
    },
    {
      code: "other",
      display: "Other",
      definition: "Other information identified by the type.system.",
    },
    {
      code: "hospitalized",
      display: "Hospitalized",
      definition:
        "An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).",
    },
    {
      code: "employmentimpacted",
      display: "EmploymentImpacted",
      definition:
        "An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).",
    },
    {
      code: "externalcause",
      display: "External Caause",
      definition: "The external cause of an illness or injury.",
    },
    {
      code: "patientreasonforvisit",
      display: "Patient Reason for Visit",
      definition: "The reason for the patient visit.",
    },
  ],
};
