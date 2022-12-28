/**
 * A set of generally useful codes defined so they can be included in value sets.
 * http://terminology.hl7.org/CodeSystem/special-values
 */
export const SpecialValuesCodeSystem = {
  resourceType: "CodeSystem",
  id: "special-values",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "extensions",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/special-values defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td><td><b>Comments</b></td></tr><tr><td style="white-space:nowrap">true<a name="special-values-true"> </a></td><td>true</td><td>Boolean true.</td><td/></tr><tr><td style="white-space:nowrap">false<a name="special-values-false"> </a></td><td>false</td><td>Boolean false.</td><td/></tr><tr><td style="white-space:nowrap">trace<a name="special-values-trace"> </a></td><td>Trace Amount Detected</td><td>The content is greater than zero, but too small to be quantified.</td><td/></tr><tr><td style="white-space:nowrap">sufficient<a name="special-values-sufficient"> </a></td><td>Sufficient Quantity</td><td>The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.</td><td>used in formulations (e.g. \'Add 10mg of ingredient X, 50mg of ingredient Y, and sufficient quantity of water to 100mL.\' This code would be used to express the quantity of water. )</td></tr><tr><td style="white-space:nowrap">withdrawn<a name="special-values-withdrawn"> </a></td><td>Value Withdrawn</td><td>The value is no longer available.</td><td/></tr><tr><td style="white-space:nowrap">nil-known<a name="special-values-nil-known"> </a></td><td>Nil Known</td><td>The are no known applicable values in this context.</td><td>The existence of this subject to review</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/special-values",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1049",
    },
  ],
  version: "4.3.0",
  name: "SpecialValues",
  title: "SpecialValues",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description:
    "A set of generally useful codes defined so they can be included in value sets.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/special-values",
  content: "complete",
  concept: [
    { code: "true", display: "true", definition: "Boolean true." },
    { code: "false", display: "false", definition: "Boolean false." },
    {
      code: "trace",
      display: "Trace Amount Detected",
      definition:
        "The content is greater than zero, but too small to be quantified.",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "used in formulations (e.g. 'Add 10mg of ingredient X, 50mg of ingredient Y, and sufficient quantity of water to 100mL.' This code would be used to express the quantity of water. )",
        },
      ],
      code: "sufficient",
      display: "Sufficient Quantity",
      definition:
        "The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.",
    },
    {
      code: "withdrawn",
      display: "Value Withdrawn",
      definition: "The value is no longer available.",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString: "The existence of this subject to review",
        },
      ],
      code: "nil-known",
      display: "Nil Known",
      definition: "The are no known applicable values in this context.",
    },
  ],
};
