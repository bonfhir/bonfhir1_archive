/**
 * Starter set of user interface control/display mechanisms that might be used when rendering an item in a questionnaire.
 * http://hl7.org/fhir/questionnaire-item-control
 */
export const QuestionnaireItemUIControlCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "questionnaire-item-control",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Properties</b></p><table class="grid"><tr><td><b>Code</b></td><td><b>Type</b></td><td><b>Description</b></td></tr><tr><td>abstract</td><td>boolean</td><td>True if an element is considered \'abstract\' - that is the code is not for use as a real concept</td></tr></table><p>This code system http://hl7.org/fhir/questionnaire-item-control defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td><td><b>abstract</b></td></tr><tr><td>1</td><td style="white-space:nowrap">group<a name="questionnaire-item-control-group"> </a></td><td/><td>UI controls relevant to organizing groups of questions</td><td>true</td></tr><tr><td>2</td><td style="white-space:nowrap">  list<a name="questionnaire-item-control-list"> </a></td><td>List</td><td>Questions within the group should be listed sequentially</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  table<a name="questionnaire-item-control-table"> </a></td><td>Vertical Answer Table</td><td>Questions within the group are rows in the table with possible answers as columns.  Used for \'choice\' questions.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  htable<a name="questionnaire-item-control-htable"> </a></td><td>Horizontal Answer Table</td><td>Questions within the group are columns in the table with possible answers as rows.  Used for \'choice\' questions.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  gtable<a name="questionnaire-item-control-gtable"> </a></td><td>Group Table</td><td>Questions within the group are columns in the table with each group repetition as a row.  Used for single-answer questions.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  atable<a name="questionnaire-item-control-atable"> </a></td><td>Answer Table</td><td>This table has one row - for the question.  Permitted answers are columns.  Used for choice questions.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  header<a name="questionnaire-item-control-header"> </a></td><td>Header</td><td>The group is to be continuously visible at the top of the questionnaire</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  footer<a name="questionnaire-item-control-footer"> </a></td><td>Footer</td><td>The group is to be continuously visible at the bottom of the questionnaire</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">text<a name="questionnaire-item-control-text"> </a></td><td/><td>UI controls relevant to rendering questionnaire text items</td><td>true</td></tr><tr><td>2</td><td style="white-space:nowrap">  inline<a name="questionnaire-item-control-inline"> </a></td><td>In-line</td><td>Text is displayed as a paragraph in a sequential position between sibling items (default behavior)</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  prompt<a name="questionnaire-item-control-prompt"> </a></td><td>Prompt</td><td>Text is displayed immediately below or within the answer-entry area of the containing question item (typically as a guide for what to enter)</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  unit<a name="questionnaire-item-control-unit"> </a></td><td>Unit</td><td>Text is displayed adjacent (horizontally or vertically) to the answer space for the parent question, typically to indicate a unit of measure</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  lower<a name="questionnaire-item-control-lower"> </a></td><td>Lower-bound</td><td>Text is displayed to the left of the set of answer choices or a scaling control for the parent question item to indicate the meaning of the \'lower\' bound.  E.g. \'Strongly disagree\'</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  upper<a name="questionnaire-item-control-upper"> </a></td><td>Upper-bound</td><td>Text is displayed to the right of the set of answer choices or a scaling control for the parent question item to indicate the meaning of the \'upper\' bound.  E.g. \'Strongly agree\'</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  flyover<a name="questionnaire-item-control-flyover"> </a></td><td>Fly-over</td><td>Text is temporarily visible over top of an item if the mouse is positioned over top of the text for the containing item</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  help<a name="questionnaire-item-control-help"> </a></td><td>Help-Button</td><td>Text is displayed in a dialog box or similar control if invoked by pushing a button or some other UI-appropriate action to request \'help\' for a question, group or the questionnaire as a whole (depending what the text is nested within)</td><td/></tr><tr><td>1</td><td style="white-space:nowrap">question<a name="questionnaire-item-control-question"> </a></td><td/><td>UI controls relevant to capturing question data</td><td>true</td></tr><tr><td>2</td><td style="white-space:nowrap">  autocomplete<a name="questionnaire-item-control-autocomplete"> </a></td><td>Auto-complete</td><td>A control which provides a list of potential matches based on text entered into a control.  Used for large choice sets where text-matching is an appropriate discovery mechanism.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  drop-down<a name="questionnaire-item-control-drop-down"> </a></td><td>Drop down</td><td>A control where an item (or multiple items) can be selected from a list that is only displayed when the user is editing the field.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  check-box<a name="questionnaire-item-control-check-box"> </a></td><td>Check-box</td><td>A control where choices are listed with a box beside them.  The box can be toggled to select or de-select a given choice.  Multiple selections may be possible.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  lookup<a name="questionnaire-item-control-lookup"> </a></td><td>Lookup</td><td>A control where editing an item spawns a separate dialog box or screen permitting a user to navigate, filter or otherwise discover an appropriate match.  Useful for large choice sets where text matching is not an appropriate discovery mechanism.  Such screens must generally be tuned for the specific choice list structure.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  radio-button<a name="questionnaire-item-control-radio-button"> </a></td><td>Radio Button</td><td>A control where choices are listed with a button beside them.  The button can be toggled to select or de-select a given choice.  Selecting one item deselects all others.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  slider<a name="questionnaire-item-control-slider"> </a></td><td>Slider</td><td>A control where an axis is displayed between the high and low values and the control can be visually manipulated to select a value anywhere on the axis.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  spinner<a name="questionnaire-item-control-spinner"> </a></td><td>Spinner</td><td>A control where a list of numeric or other ordered values can be scrolled through via arrows.</td><td/></tr><tr><td>2</td><td style="white-space:nowrap">  text-box<a name="questionnaire-item-control-text-box"> </a></td><td>Text Box</td><td>A control where a user can type in their answer freely.</td><td/></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://hl7.org/fhir/questionnaire-item-control",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.932",
    },
  ],
  version: "4.3.0",
  name: "QuestionnaireItemUIControlCodes",
  title: "Questionnaire Item UI Control Codes",
  status: "draft",
  experimental: false,
  description:
    "Starter set of user interface control/display mechanisms that might be used when rendering an item in a questionnaire.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/questionnaire-item-control",
  hierarchyMeaning: "is-a",
  content: "complete",
  property: [
    {
      code: "abstract",
      description:
        "True if an element is considered 'abstract' - that is the code is not for use as a real concept",
      type: "boolean",
    },
  ],
  concept: [
    {
      code: "group",
      definition: "UI controls relevant to organizing groups of questions",
      property: [{ code: "abstract", valueBoolean: true }],
      concept: [
        {
          code: "list",
          display: "List",
          definition:
            "Questions within the group should be listed sequentially",
        },
        {
          code: "table",
          display: "Vertical Answer Table",
          definition:
            "Questions within the group are rows in the table with possible answers as columns.  Used for 'choice' questions.",
        },
        {
          code: "htable",
          display: "Horizontal Answer Table",
          definition:
            "Questions within the group are columns in the table with possible answers as rows.  Used for 'choice' questions.",
        },
        {
          code: "gtable",
          display: "Group Table",
          definition:
            "Questions within the group are columns in the table with each group repetition as a row.  Used for single-answer questions.",
        },
        {
          code: "atable",
          display: "Answer Table",
          definition:
            "This table has one row - for the question.  Permitted answers are columns.  Used for choice questions.",
        },
        {
          code: "header",
          display: "Header",
          definition:
            "The group is to be continuously visible at the top of the questionnaire",
        },
        {
          code: "footer",
          display: "Footer",
          definition:
            "The group is to be continuously visible at the bottom of the questionnaire",
        },
      ],
    },
    {
      code: "text",
      definition: "UI controls relevant to rendering questionnaire text items",
      property: [{ code: "abstract", valueBoolean: true }],
      concept: [
        {
          code: "inline",
          display: "In-line",
          definition:
            "Text is displayed as a paragraph in a sequential position between sibling items (default behavior)",
        },
        {
          code: "prompt",
          display: "Prompt",
          definition:
            "Text is displayed immediately below or within the answer-entry area of the containing question item (typically as a guide for what to enter)",
        },
        {
          code: "unit",
          display: "Unit",
          definition:
            "Text is displayed adjacent (horizontally or vertically) to the answer space for the parent question, typically to indicate a unit of measure",
        },
        {
          code: "lower",
          display: "Lower-bound",
          definition:
            "Text is displayed to the left of the set of answer choices or a scaling control for the parent question item to indicate the meaning of the 'lower' bound.  E.g. 'Strongly disagree'",
        },
        {
          code: "upper",
          display: "Upper-bound",
          definition:
            "Text is displayed to the right of the set of answer choices or a scaling control for the parent question item to indicate the meaning of the 'upper' bound.  E.g. 'Strongly agree'",
        },
        {
          code: "flyover",
          display: "Fly-over",
          definition:
            "Text is temporarily visible over top of an item if the mouse is positioned over top of the text for the containing item",
        },
        {
          code: "help",
          display: "Help-Button",
          definition:
            "Text is displayed in a dialog box or similar control if invoked by pushing a button or some other UI-appropriate action to request 'help' for a question, group or the questionnaire as a whole (depending what the text is nested within)",
        },
      ],
    },
    {
      code: "question",
      definition: "UI controls relevant to capturing question data",
      property: [{ code: "abstract", valueBoolean: true }],
      concept: [
        {
          code: "autocomplete",
          display: "Auto-complete",
          definition:
            "A control which provides a list of potential matches based on text entered into a control.  Used for large choice sets where text-matching is an appropriate discovery mechanism.",
        },
        {
          code: "drop-down",
          display: "Drop down",
          definition:
            "A control where an item (or multiple items) can be selected from a list that is only displayed when the user is editing the field.",
        },
        {
          code: "check-box",
          display: "Check-box",
          definition:
            "A control where choices are listed with a box beside them.  The box can be toggled to select or de-select a given choice.  Multiple selections may be possible.",
        },
        {
          code: "lookup",
          display: "Lookup",
          definition:
            "A control where editing an item spawns a separate dialog box or screen permitting a user to navigate, filter or otherwise discover an appropriate match.  Useful for large choice sets where text matching is not an appropriate discovery mechanism.  Such screens must generally be tuned for the specific choice list structure.",
        },
        {
          code: "radio-button",
          display: "Radio Button",
          definition:
            "A control where choices are listed with a button beside them.  The button can be toggled to select or de-select a given choice.  Selecting one item deselects all others.",
        },
        {
          code: "slider",
          display: "Slider",
          definition:
            "A control where an axis is displayed between the high and low values and the control can be visually manipulated to select a value anywhere on the axis.",
        },
        {
          code: "spinner",
          display: "Spinner",
          definition:
            "A control where a list of numeric or other ordered values can be scrolled through via arrows.",
        },
        {
          code: "text-box",
          display: "Text Box",
          definition: "A control where a user can type in their answer freely.",
        },
      ],
    },
  ],
};
