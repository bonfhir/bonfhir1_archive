export const DaysOfWeek = {
  resourceType: "CodeSystem",
  id: "days-of-week",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>DaysOfWeek</h2>\n      \n      <div>\n        \n        <p>The days of the week.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/days-of-week defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mon\n            \n            <a name="days-of-week-mon"> </a>\n          \n          </td>\n          \n          <td>Monday</td>\n          \n          <td>Monday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">tue\n            \n            <a name="days-of-week-tue"> </a>\n          \n          </td>\n          \n          <td>Tuesday</td>\n          \n          <td>Tuesday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">wed\n            \n            <a name="days-of-week-wed"> </a>\n          \n          </td>\n          \n          <td>Wednesday</td>\n          \n          <td>Wednesday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">thu\n            \n            <a name="days-of-week-thu"> </a>\n          \n          </td>\n          \n          <td>Thursday</td>\n          \n          <td>Thursday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fri\n            \n            <a name="days-of-week-fri"> </a>\n          \n          </td>\n          \n          <td>Friday</td>\n          \n          <td>Friday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">sat\n            \n            <a name="days-of-week-sat"> </a>\n          \n          </td>\n          \n          <td>Saturday</td>\n          \n          <td>Saturday.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">sun\n            \n            <a name="days-of-week-sun"> </a>\n          \n          </td>\n          \n          <td>Sunday</td>\n          \n          <td>Sunday.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
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
  url: "http://hl7.org/fhir/days-of-week",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.513",
    },
  ],
  version: "4.3.0",
  name: "DaysOfWeek",
  title: "DaysOfWeek",
  status: "active",
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
  description: "The days of the week.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/days-of-week",
  content: "complete",
  concept: [
    { code: "mon", display: "Monday", definition: "Monday." },
    { code: "tue", display: "Tuesday", definition: "Tuesday." },
    { code: "wed", display: "Wednesday", definition: "Wednesday." },
    { code: "thu", display: "Thursday", definition: "Thursday." },
    { code: "fri", display: "Friday", definition: "Friday." },
    { code: "sat", display: "Saturday", definition: "Saturday." },
    { code: "sun", display: "Sunday", definition: "Sunday." },
  ],
};
