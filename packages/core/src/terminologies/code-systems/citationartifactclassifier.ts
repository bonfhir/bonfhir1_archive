/**
 * Citation artifact classifier
 * http://terminology.hl7.org/CodeSystem/citation-artifact-classifier
 */
export const CitationArtifactClassifierCodeSystem = {
  resourceType: "CodeSystem",
  id: "citation-artifact-classifier",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/citation-artifact-classifier defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">dataset\n            \n            <a name="citation-artifact-classifier-dataset"> </a>\n          \n          </td>\n          \n          <td>Dataset</td>\n          \n          <td>Dataset</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">webpage\n            \n            <a name="citation-artifact-classifier-webpage"> </a>\n          \n          </td>\n          \n          <td>Webpage</td>\n          \n          <td>Webpage</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D016428\n            \n            <a name="citation-artifact-classifier-D016428"> </a>\n          \n          </td>\n          \n          <td>Journal Article</td>\n          \n          <td>Journal Article</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D016422\n            \n            <a name="citation-artifact-classifier-D016422"> </a>\n          \n          </td>\n          \n          <td>Letter</td>\n          \n          <td>Letter</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D016420\n            \n            <a name="citation-artifact-classifier-D016420"> </a>\n          \n          </td>\n          \n          <td>Comment</td>\n          \n          <td>Comment</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D016425\n            \n            <a name="citation-artifact-classifier-D016425"> </a>\n          \n          </td>\n          \n          <td>Published Erratum</td>\n          \n          <td>Published Erratum</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">executable-app\n            \n            <a name="citation-artifact-classifier-executable-app"> </a>\n          \n          </td>\n          \n          <td>Executable app</td>\n          \n          <td>Executable app</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D000076942\n            \n            <a name="citation-artifact-classifier-D000076942"> </a>\n          \n          </td>\n          \n          <td>Preprint</td>\n          \n          <td>Scientific manuscript made available prior to PEER REVIEW.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D019991\n            \n            <a name="citation-artifact-classifier-D019991"> </a>\n          \n          </td>\n          \n          <td>Database</td>\n          \n          <td>A structured file of information or a set of logically related data stored and retrieved using computer-based means.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D001877\n            \n            <a name="citation-artifact-classifier-D001877"> </a>\n          \n          </td>\n          \n          <td>Book</td>\n          \n          <td>Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D064886\n            \n            <a name="citation-artifact-classifier-D064886"> </a>\n          \n          </td>\n          \n          <td>Dataset</td>\n          \n          <td>Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">68059040\n            \n            <a name="citation-artifact-classifier-68059040"> </a>\n          \n          </td>\n          \n          <td>Video-Audio Media</td>\n          \n          <td>Used with articles which include video files or clips, or for articles which are entirely video.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">audio\n            \n            <a name="citation-artifact-classifier-audio"> </a>\n          \n          </td>\n          \n          <td>Audio file</td>\n          \n          <td>The article cited is an audio file.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">image\n            \n            <a name="citation-artifact-classifier-image"> </a>\n          \n          </td>\n          \n          <td>Image file</td>\n          \n          <td>The article cited is an audio file.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">machine-code\n            \n            <a name="citation-artifact-classifier-machine-code"> </a>\n          \n          </td>\n          \n          <td>Machine code</td>\n          \n          <td>The article cited is machine code.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">protocol\n            \n            <a name="citation-artifact-classifier-protocol"> </a>\n          \n          </td>\n          \n          <td>Protocol</td>\n          \n          <td>The article cited is the protocol of an activity and not the results or findings.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fhir-resource\n            \n            <a name="citation-artifact-classifier-fhir-resource"> </a>\n          \n          </td>\n          \n          <td>FHIR Resource</td>\n          \n          <td>The article cited is a FHIR resource.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">Print\n            \n            \n            <a name="citation-artifact-classifier-Print"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Print</td>\n          \n          \n          <td>the journal is published in print format only</td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">Print Electronic\n            \n            \n            <a name="citation-artifact-classifier-Print-Electronic"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Print Electronic</td>\n          \n          \n          <td>the journal is published in both print and electronic format</td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">Electronic\n            \n            \n            <a name="citation-artifact-classifier-Electronic"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Electronic</td>\n          \n          \n          <td>the journal is published in electronic format only</td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">Electronic-Print\n            \n            \n            <a name="citation-artifact-classifier-Electronic-Print"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Electronic-Print</td>\n          \n          \n          <td>the journal is published first in electronic format followed by print (this value is currently used for just one journal, Nucleic Acids Research)</td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">Electronic-eCollection\n            \n            \n            <a name="citation-artifact-classifier-Electronic-eCollection"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Electronic-eCollection</td>\n          \n          \n          <td>used for electronic-only journals that publish individual articles first and then later collect them into an &quot;issue&quot; date that is typically called an eCollection.</td>\n        \n        \n        </tr>\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">medline-base\n            \n            \n            <a name="citation-artifact-classifier-medline-base"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Medline Base</td>\n          \n          \n          <td>Citation Resource containing only data from Medline</td>\n        \n        \n        </tr>\n\t\t\n        <tr>\n          \n          \n          <td style="white-space:nowrap">common-share\n            \n            \n            <a name="citation-artifact-classifier-common-share"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Common Share</td>\n          \n          \n          <td>Citation Resource containing value added data that is openly shared</td>\n        \n        \n        </tr>\n\t\t\n        <tr>\n          \n          \n          <td style="white-space:nowrap">project-specific\n            \n            \n            <a name="citation-artifact-classifier-project-specific"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Project Specific</td>\n          \n          \n          <td>Citation Resource containing value added data specific to a project</td>\n        \n        \n        </tr>\n        \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/citation-artifact-classifier",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "CitationArtifactClassifier",
  title: "CitationArtifactClassifier",
  status: "draft",
  experimental: false,
  date: "2021-03-11T10:55:11.085+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Citation artifact classifier",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/citation-artifact-classifier",
  content: "complete",
  concept: [
    { code: "webpage", display: "Webpage", definition: "Webpage" },
    {
      code: "D016428",
      display: "Journal Article",
      definition: "Journal Article",
    },
    { code: "D016422", display: "Letter", definition: "Letter" },
    { code: "D016420", display: "Comment", definition: "Comment" },
    {
      code: "D016425",
      display: "Published Erratum",
      definition: "Published Erratum",
    },
    {
      code: "executable-app",
      display: "Executable app",
      definition: "Executable app",
    },
    {
      code: "D000076942",
      display: "Preprint",
      definition: "Scientific manuscript made available prior to PEER REVIEW.",
    },
    {
      code: "D019991",
      display: "Database",
      definition:
        "A structured file of information or a set of logically related data stored and retrieved using computer-based means.",
    },
    {
      code: "D001877",
      display: "Book",
      definition:
        "Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.",
    },
    {
      code: "D064886",
      display: "Dataset",
      definition:
        "Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.",
    },
    {
      code: "68059040",
      display: "Video-Audio Media",
      definition:
        "Used with articles which include video files or clips, or for articles which are entirely video.",
    },
    {
      code: "audio",
      display: "Audio file",
      definition: "The article cited is an audio file.",
    },
    {
      code: "image",
      display: "Image file",
      definition: "The article cited is an audio file.",
    },
    {
      code: "machine-code",
      display: "Machine code",
      definition: "The article cited is machine code.",
    },
    {
      code: "protocol",
      display: "Protocol",
      definition:
        "The article cited is the protocol of an activity and not the results or findings.",
    },
    {
      code: "fhir-resource",
      display: "FHIR Resource",
      definition: "The article cited is a FHIR resource.",
    },
    {
      code: "Print",
      display: "Print",
      definition: "the journal is published in print format only",
    },
    {
      code: "Print-Electronic",
      display: "Print Electronic",
      definition:
        "the journal is published in both print and electronic format",
    },
    {
      code: "Electronic",
      display: "Electronic",
      definition: "the journal is published in electronic format only",
    },
    {
      code: "Electronic-Print",
      display: "Electronic-Print",
      definition:
        "the journal is published first in electronic format followed by print (this value is currently used for just one journal, Nucleic Acids Research)",
    },
    {
      code: "Electronic-eCollection",
      display: "Electronic-eCollection",
      definition:
        'used for electronic-only journals that publish individual articles first and then later collect them into an "issue" date that is typically called an eCollection.',
    },
    {
      code: "medline-base",
      display: "Medline Base",
      definition: "Citation Resource containing only data from Medline",
    },
    {
      code: "common-share",
      display: "Common Share",
      definition:
        "Citation Resource containing value added data that is openly shared",
    },
    {
      code: "project-specific",
      display: "Project Specific",
      definition:
        "Citation Resource containing value added data specific to a project",
    },
  ],
};
