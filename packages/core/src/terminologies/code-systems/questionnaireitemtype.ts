export const QuestionnaireItemType = {
  resourceType: "CodeSystem",
  id: "item-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>QuestionnaireItemType</h2>\n      \n      \n      <div>\n        \n        \n        <p>Distinguishes groups from questions and display text and indicates data type for questions.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>\n        \n        \n        <b>Properties</b>\n      \n      \n      </p>\n      \n      \n      <table class="grid">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>URL</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Description</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Type</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>notSelectable</td>\n          \n          \n          <td>http://hl7.org/fhir/concept-properties#notSelectable</td>\n          \n          \n          <td>Indicates that the code is abstract - only intended to be used as a selector for other concepts</td>\n          \n          \n          <td>boolean</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n      \n      \n      <p>This code system http://hl7.org/fhir/item-type defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">group\n            \n            \n            <a name="item-type-group"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Group</td>\n          \n          \n          <td>An item with no direct answer but should have at least one child item.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">display\n            \n            \n            <a name="item-type-display"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Display</td>\n          \n          \n          <td>Text for display that will not capture an answer or have child items.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">question\n            \n            \n            <a name="item-type-question"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Question</td>\n          \n          \n          <td>An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  boolean\n            \n            \n            <a name="item-type-boolean"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Boolean</td>\n          \n          \n          <td>Question with a yes/no answer (valueBoolean).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  decimal\n            \n            \n            <a name="item-type-decimal"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Decimal</td>\n          \n          \n          <td>Question with is a real number answer (valueDecimal).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  integer\n            \n            \n            <a name="item-type-integer"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Integer</td>\n          \n          \n          <td>Question with an integer answer (valueInteger).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  date\n            \n            \n            <a name="item-type-date"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Date</td>\n          \n          \n          <td>Question with a date answer (valueDate).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  dateTime\n            \n            \n            <a name="item-type-dateTime"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Date Time</td>\n          \n          \n          <td>Question with a date and time answer (valueDateTime).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  time\n            \n            \n            <a name="item-type-time"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Time</td>\n          \n          \n          <td>Question with a time (hour:minute:second) answer independent of date. (valueTime).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  string\n            \n            \n            <a name="item-type-string"> </a>\n          \n          \n          </td>\n          \n          \n          <td>String</td>\n          \n          \n          <td>Question with a short (few words to short sentence) free-text entry answer (valueString).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  text\n            \n            \n            <a name="item-type-text"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Text</td>\n          \n          \n          <td>Question with a long (potentially multi-paragraph) free-text entry answer (valueString).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  url\n            \n            \n            <a name="item-type-url"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Url</td>\n          \n          \n          <td>Question with a URL (website, FTP site, etc.) answer (valueUri).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  choice\n            \n            \n            <a name="item-type-choice"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Choice</td>\n          \n          \n          <td>Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  open-choice\n            \n            \n            <a name="item-type-open-choice"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Open Choice</td>\n          \n          \n          <td>Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  attachment\n            \n            \n            <a name="item-type-attachment"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Attachment</td>\n          \n          \n          <td>Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  reference\n            \n            \n            <a name="item-type-reference"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Reference</td>\n          \n          \n          <td>Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  quantity\n            \n            \n            <a name="item-type-quantity"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Quantity</td>\n          \n          \n          <td>Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension \'http://hl7.org/fhir/StructureDefinition/questionnaire-unit\' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
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
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/item-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.445",
    },
  ],
  version: "4.3.0",
  name: "QuestionnaireItemType",
  title: "QuestionnaireItemType",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
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
    "Distinguishes groups from questions and display text and indicates data type for questions.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/item-type",
  hierarchyMeaning: "is-a",
  content: "complete",
  property: [
    {
      code: "notSelectable",
      uri: "http://hl7.org/fhir/concept-properties#notSelectable",
      description:
        "Indicates that the code is abstract - only intended to be used as a selector for other concepts",
      type: "boolean",
    },
  ],
  concept: [
    {
      code: "group",
      display: "Group",
      definition:
        "An item with no direct answer but should have at least one child item.",
    },
    {
      code: "display",
      display: "Display",
      definition:
        "Text for display that will not capture an answer or have child items.",
    },
    {
      code: "question",
      display: "Question",
      definition:
        "An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).",
      property: [{ code: "notSelectable", valueBoolean: true }],
      concept: [
        {
          code: "boolean",
          display: "Boolean",
          definition: "Question with a yes/no answer (valueBoolean).",
        },
        {
          code: "decimal",
          display: "Decimal",
          definition: "Question with is a real number answer (valueDecimal).",
        },
        {
          code: "integer",
          display: "Integer",
          definition: "Question with an integer answer (valueInteger).",
        },
        {
          code: "date",
          display: "Date",
          definition: "Question with a date answer (valueDate).",
        },
        {
          code: "dateTime",
          display: "Date Time",
          definition: "Question with a date and time answer (valueDateTime).",
        },
        {
          code: "time",
          display: "Time",
          definition:
            "Question with a time (hour:minute:second) answer independent of date. (valueTime).",
        },
        {
          code: "string",
          display: "String",
          definition:
            "Question with a short (few words to short sentence) free-text entry answer (valueString).",
        },
        {
          code: "text",
          display: "Text",
          definition:
            "Question with a long (potentially multi-paragraph) free-text entry answer (valueString).",
        },
        {
          code: "url",
          display: "Url",
          definition:
            "Question with a URL (website, FTP site, etc.) answer (valueUri).",
        },
        {
          code: "choice",
          display: "Choice",
          definition:
            "Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).",
        },
        {
          code: "open-choice",
          display: "Open Choice",
          definition:
            "Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).",
        },
        {
          code: "attachment",
          display: "Attachment",
          definition:
            "Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).",
        },
        {
          code: "reference",
          display: "Reference",
          definition:
            "Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).",
        },
        {
          code: "quantity",
          display: "Quantity",
          definition:
            "Question with a combination of a numeric value and unit, potentially with a comparator (<, >, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).",
        },
      ],
    },
  ],
};
