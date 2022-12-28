export const QualityOfEvidenceRating = {
  resourceType: "CodeSystem",
  id: "evidence-quality",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/evidence-quality defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">high<a name="evidence-quality-high"> </a></td><td>High quality</td><td>High quality evidence.</td></tr><tr><td style="white-space:nowrap">moderate<a name="evidence-quality-moderate"> </a></td><td>Moderate quality</td><td>Moderate quality evidence.</td></tr><tr><td style="white-space:nowrap">low<a name="evidence-quality-low"> </a></td><td>Low quality</td><td>Low quality evidence.</td></tr><tr><td style="white-space:nowrap">very-low<a name="evidence-quality-very-low"> </a></td><td>Very low quality</td><td>Very low quality evidence.</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/evidence-quality",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1267",
    },
  ],
  version: "4.3.0",
  name: "QualityOfEvidenceRating",
  title: "QualityOfEvidenceRating",
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
    "A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/evidence-quality",
  content: "complete",
  concept: [
    {
      code: "high",
      display: "High quality",
      definition: "High quality evidence.",
    },
    {
      code: "moderate",
      display: "Moderate quality",
      definition: "Moderate quality evidence.",
    },
    {
      code: "low",
      display: "Low quality",
      definition: "Low quality evidence.",
    },
    {
      code: "very-low",
      display: "Very low quality",
      definition: "Very low quality evidence.",
    },
  ],
};
