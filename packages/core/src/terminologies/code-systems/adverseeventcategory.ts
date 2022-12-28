/**
 * Overall categorization of the event, e.g. product-related or situational.
 * http://terminology.hl7.org/CodeSystem/adverse-event-category
 */
export const AdverseEventCategoryCodeSystem = {
  resourceType: "CodeSystem",
  id: "adverse-event-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>AdverseEventCategory</h2>\n      \n      \n      <div>\n        \n        \n        <p>Overall categorization of the event, e.g. product-related or situational.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-category defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">product-problem\n            \n            \n            <a name="adverse-event-category-product-problem"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Product Problem</td>\n          \n          \n          <td>The adverse event pertains to a product problem.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">product-quality\n            \n            \n            <a name="adverse-event-category-product-quality"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Product Quality</td>\n          \n          \n          <td>The adverse event pertains to product quality.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">product-use-error\n            \n            \n            <a name="adverse-event-category-product-use-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Product Use Error</td>\n          \n          \n          <td>The adverse event pertains to a product use error.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-dose\n            \n            \n            <a name="adverse-event-category-wrong-dose"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Dose</td>\n          \n          \n          <td>The adverse event pertains to a wrong dose.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  incorrect-prescribing-information\n            \n            \n            <a name="adverse-event-category-incorrect-prescribing-information"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Incorrect Prescribing Information</td>\n          \n          \n          <td>The adverse event pertains to incorrect perscribing information.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-technique\n            \n            \n            <a name="adverse-event-category-wrong-technique"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Technique</td>\n          \n          \n          <td>The adverse event pertains to a wrong technique.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-route-of-administration\n            \n            \n            <a name="adverse-event-category-wrong-route-of-administration"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Route of Administration</td>\n          \n          \n          <td>The adverse event pertains to a wrong route of administration.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-rate\n            \n            \n            <a name="adverse-event-category-wrong-rate"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Rate</td>\n          \n          \n          <td>The adverse event pertains to a wrong rate.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-duration\n            \n            \n            <a name="adverse-event-category-wrong-duration"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Duration</td>\n          \n          \n          <td>The adverse event pertains to a wrong duration.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  wrong-time\n            \n            \n            <a name="adverse-event-category-wrong-time"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Wrong Time</td>\n          \n          \n          <td>The adverse event pertains to a wrong time.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  expired-drug\n            \n            \n            <a name="adverse-event-category-expired-drug"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Expired Drug</td>\n          \n          \n          <td>The adverse event pertains to an expired drug.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">medical-device-use-error\n            \n            \n            <a name="adverse-event-category-medical-device-use-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Medical Device Use Error</td>\n          \n          \n          <td>The adverse event pertains to a medical device use error.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">problem-different-manufacturer\n            \n            \n            <a name="adverse-event-category-problem-different-manufacturer"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Problem with Different Manufacturer of Same Medicine</td>\n          \n          \n          <td>The adverse event pertains to a problem with a different manufacturer of the same medication.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">unsafe-physical-environment\n            \n            \n            <a name="adverse-event-category-unsafe-physical-environment"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Unsafe Physical Environment</td>\n          \n          \n          <td>The adverse event pertains to an unsafe physical environment.</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1251",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventCategory",
  title: "AdverseEventCategory",
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
    "Overall categorization of the event, e.g. product-related or situational.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-category",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "product-problem",
      display: "Product Problem",
      definition: "The adverse event pertains to a product problem.",
    },
    {
      code: "product-quality",
      display: "Product Quality",
      definition: "The adverse event pertains to product quality.",
    },
    {
      code: "product-use-error",
      display: "Product Use Error",
      definition: "The adverse event pertains to a product use error.",
      concept: [
        {
          code: "wrong-dose",
          display: "Wrong Dose",
          definition: "The adverse event pertains to a wrong dose.",
        },
        {
          code: "incorrect-prescribing-information",
          display: "Incorrect Prescribing Information",
          definition:
            "The adverse event pertains to incorrect perscribing information.",
        },
        {
          code: "wrong-technique",
          display: "Wrong Technique",
          definition: "The adverse event pertains to a wrong technique.",
        },
        {
          code: "wrong-route-of-administration",
          display: "Wrong Route of Administration",
          definition:
            "The adverse event pertains to a wrong route of administration.",
        },
        {
          code: "wrong-rate",
          display: "Wrong Rate",
          definition: "The adverse event pertains to a wrong rate.",
        },
        {
          code: "wrong-duration",
          display: "Wrong Duration",
          definition: "The adverse event pertains to a wrong duration.",
        },
        {
          code: "wrong-time",
          display: "Wrong Time",
          definition: "The adverse event pertains to a wrong time.",
        },
        {
          code: "expired-drug",
          display: "Expired Drug",
          definition: "The adverse event pertains to an expired drug.",
        },
      ],
    },
    {
      code: "medical-device-use-error",
      display: "Medical Device Use Error",
      definition: "The adverse event pertains to a medical device use error.",
    },
    {
      code: "problem-different-manufacturer",
      display: "Problem with Different Manufacturer of Same Medicine",
      definition:
        "The adverse event pertains to a problem with a different manufacturer of the same medication.",
    },
    {
      code: "unsafe-physical-environment",
      display: "Unsafe Physical Environment",
      definition:
        "The adverse event pertains to an unsafe physical environment.",
    },
  ],
};
