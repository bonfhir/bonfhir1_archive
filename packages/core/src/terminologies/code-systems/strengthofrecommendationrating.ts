export const StrengthOfRecommendationRating = {
  resourceType: "CodeSystem",
  id: "recommendation-strength",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/recommendation-strength defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">strong<a name="recommendation-strength-strong"> </a></td><td>Strong</td><td>Strong recommendation.</td></tr><tr><td style="white-space:nowrap">weak<a name="recommendation-strength-weak"> </a></td><td>Weak</td><td>Weak recommendation.</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/recommendation-strength",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1268",
    },
  ],
  version: "4.3.0",
  name: "StrengthOfRecommendationRating",
  title: "StrengthOfRecommendationRating",
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
    "A rating system that describes the strength of the recommendation, such as the GRADE, DynaMed, or HGPS systems.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/recommendation-strength",
  content: "complete",
  concept: [
    { code: "strong", display: "Strong", definition: "Strong recommendation." },
    { code: "weak", display: "Weak", definition: "Weak recommendation." },
  ],
};
