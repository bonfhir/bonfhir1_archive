export const ExtraActivityType = {
  resourceType: "CodeSystem",
  id: "extra-activity-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/extra-activity-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">aggregate<a name="extra-activity-type-aggregate"> </a></td><td>aggregate</td><td>Activity resulting in a structured collection of preexisting content that does not necessarily result in an integral object with semantic context making it more than the sum of component parts, from which components could be disaggregated without loss of semantic context, e.g., the assembly of multiple stand-alone documents.</td></tr><tr><td style="white-space:nowrap">compose<a name="extra-activity-type-compose"> </a></td><td>compose</td><td>Activity resulting in the structured compilation of new and preexisting content for the purposes of forming an integral object with  semantic context making it more than the sum of component parts, which would be lost if decomposed. For example, the composition of a document that includes in whole or part other documents along with new content that result in a new document that has unique semantic meaning.</td></tr><tr><td style="white-space:nowrap">label<a name="extra-activity-type-label"> </a></td><td>label</td><td>The means used to associate a set of security attributes with a specific information object as part of the data structure for that object. [ISO-10181-3 Access Control]</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/extra-activity-type",
  version: "4.3.0",
  name: "ExtraActivityType",
  status: "draft",
  experimental: true,
  description:
    "This value set includes coded concepts not well covered in any of the included valuesets.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "aggregate",
      display: "aggregate",
      definition:
        "Activity resulting in a structured collection of preexisting content that does not necessarily result in an integral object with semantic context making it more than the sum of component parts, from which components could be disaggregated without loss of semantic context, e.g., the assembly of multiple stand-alone documents.",
    },
    {
      code: "compose",
      display: "compose",
      definition:
        "Activity resulting in the structured compilation of new and preexisting content for the purposes of forming an integral object with  semantic context making it more than the sum of component parts, which would be lost if decomposed. For example, the composition of a document that includes in whole or part other documents along with new content that result in a new document that has unique semantic meaning.",
    },
    {
      code: "label",
      display: "label",
      definition:
        "The means used to associate a set of security attributes with a specific information object as part of the data structure for that object. [ISO-10181-3 Access Control]",
    },
  ],
};
