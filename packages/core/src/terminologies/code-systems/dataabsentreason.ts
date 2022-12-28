/**
 * Used to specify why the normally expected content of the data element is missing.
 * http://terminology.hl7.org/CodeSystem/data-absent-reason
 */
export const DataAbsentReasonCodeSystem = {
  resourceType: "CodeSystem",
  id: "data-absent-reason",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "extensions",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/data-absent-reason defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td><td><b>Comments</b></td></tr><tr><td>1</td><td style="white-space:nowrap">unknown<a name="data-absent-reason-unknown"> </a></td><td>Unknown</td><td>The value is expected to exist but is not known.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  asked-unknown<a name="data-absent-reason-asked-unknown"> </a></td><td>Asked But Unknown</td><td>The source was asked but does not know the value.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  temp-unknown<a name="data-absent-reason-temp-unknown"> </a></td><td>Temporarily Unknown</td><td>There is reason to expect (from the workflow) that the value may become known.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  not-asked<a name="data-absent-reason-not-asked"> </a></td><td>Not Asked</td><td>The workflow didn\'t lead to this value being known.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  asked-declined<a name="data-absent-reason-asked-declined"> </a></td><td>Asked But Declined</td><td>The source was asked but declined to answer.</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">masked<a name="data-absent-reason-masked"> </a></td><td>Masked</td><td>The information is not available due to security, privacy or related reasons.</td><td>Using &quot;masked&quot; may be breach of security or confidentiality, but there are times when its use is required to support alternate workflows for gaining access to denied information.</td></tr><tr><td>1</td><td style="white-space:nowrap">not-applicable<a name="data-absent-reason-not-applicable"> </a></td><td>Not Applicable</td><td>There is no proper value for this element (e.g. last menstrual period for a male).</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">unsupported<a name="data-absent-reason-unsupported"> </a></td><td>Unsupported</td><td>The source system wasn\'t capable of supporting this element.</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">as-text<a name="data-absent-reason-as-text"> </a></td><td>As Text</td><td>The content of the data is represented in the resource narrative.</td><td>It may be linked by internal references (e.g. xml:id). This usually implies that the value could not be represented in the correct format - this may be due to system limitations, or this particular data value.</td></tr><tr><td>1</td><td style="white-space:nowrap">error<a name="data-absent-reason-error"> </a></td><td>Error</td><td>Some system or workflow process error means that the information is not available.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  not-a-number<a name="data-absent-reason-not-a-number"> </a></td><td>Not a Number (NaN)</td><td>The numeric value is undefined or unrepresentable due to a floating point processing error.</td><td>This is sometimes an output value from measuring devices.</td></tr><tr><td>2</td><td style="white-space:nowrap">  negative-infinity<a name="data-absent-reason-negative-infinity"> </a></td><td>Negative Infinity (NINF)</td><td>The numeric value is excessively low and unrepresentable due to a floating point processing error.</td><td>This is sometimes an output value from measuring devices.</td></tr><tr><td>2</td><td style="white-space:nowrap">  positive-infinity<a name="data-absent-reason-positive-infinity"> </a></td><td>Positive Infinity (PINF)</td><td>The numeric value is excessively high and unrepresentable due to a floating point processing error.</td><td>This is sometimes an output value from measuring devices.</td></tr><tr><td>1</td><td style="white-space:nowrap">not-performed<a name="data-absent-reason-not-performed"> </a></td><td>Not Performed</td><td>The value is not available because the observation procedure (test, etc.) was not performed.</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">not-permitted<a name="data-absent-reason-not-permitted"> </a></td><td>Not Permitted</td><td>The value is not permitted in this context (e.g. due to profiles, or the base data types).</td><td>This is most often associated with required bindings that do not include the actual code used, but may be used with other data types.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1048",
    },
  ],
  version: "4.3.0",
  name: "DataAbsentReason",
  title: "DataAbsentReason",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description:
    "Used to specify why the normally expected content of the data element is missing.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/data-absent-reason",
  content: "complete",
  concept: [
    {
      code: "unknown",
      display: "Unknown",
      definition: "The value is expected to exist but is not known.",
      concept: [
        {
          code: "asked-unknown",
          display: "Asked But Unknown",
          definition: "The source was asked but does not know the value.",
        },
        {
          code: "temp-unknown",
          display: "Temporarily Unknown",
          definition:
            "There is reason to expect (from the workflow) that the value may become known.",
        },
        {
          code: "not-asked",
          display: "Not Asked",
          definition: "The workflow didn't lead to this value being known.",
        },
        {
          code: "asked-declined",
          display: "Asked But Declined",
          definition: "The source was asked but declined to answer.",
        },
      ],
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            'Using "masked" may be breach of security or confidentiality, but there are times when its use is required to support alternate workflows for gaining access to denied information.',
        },
      ],
      code: "masked",
      display: "Masked",
      definition:
        "The information is not available due to security, privacy or related reasons.",
    },
    {
      code: "not-applicable",
      display: "Not Applicable",
      definition:
        "There is no proper value for this element (e.g. last menstrual period for a male).",
    },
    {
      code: "unsupported",
      display: "Unsupported",
      definition:
        "The source system wasn't capable of supporting this element.",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "It may be linked by internal references (e.g. xml:id). This usually implies that the value could not be represented in the correct format - this may be due to system limitations, or this particular data value.",
        },
      ],
      code: "as-text",
      display: "As Text",
      definition:
        "The content of the data is represented in the resource narrative.",
    },
    {
      code: "error",
      display: "Error",
      definition:
        "Some system or workflow process error means that the information is not available.",
      concept: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
              valueString:
                "This is sometimes an output value from measuring devices.",
            },
          ],
          code: "not-a-number",
          display: "Not a Number (NaN)",
          definition:
            "The numeric value is undefined or unrepresentable due to a floating point processing error.",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
              valueString:
                "This is sometimes an output value from measuring devices.",
            },
          ],
          code: "negative-infinity",
          display: "Negative Infinity (NINF)",
          definition:
            "The numeric value is excessively low and unrepresentable due to a floating point processing error.",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
              valueString:
                "This is sometimes an output value from measuring devices.",
            },
          ],
          code: "positive-infinity",
          display: "Positive Infinity (PINF)",
          definition:
            "The numeric value is excessively high and unrepresentable due to a floating point processing error.",
        },
      ],
    },
    {
      code: "not-performed",
      display: "Not Performed",
      definition:
        "The value is not available because the observation procedure (test, etc.) was not performed.",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "This is most often associated with required bindings that do not include the actual code used, but may be used with other data types.",
        },
      ],
      code: "not-permitted",
      display: "Not Permitted",
      definition:
        "The value is not permitted in this context (e.g. due to profiles, or the base data types).",
    },
  ],
};
