/**
 * The status of a subscription.
 * http://hl7.org/fhir/subscription-status
 */
export const SubscriptionStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "subscription-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>SubscriptionStatus</h2>\n      <div>\n        <p>The status of a subscription.</p>\n      </div>\n      <p>This code system http://hl7.org/fhir/subscription-status defines the following codes:</p>\n      <table class="codes">\n        <tr>\n          <td style="white-space:nowrap">\n            <b>Code</b>\n          </td>\n          <td>\n            <b>Display</b>\n          </td>\n          <td>\n            <b>Definition</b>\n          </td>\n        </tr>\n        <tr>\n          <td style="white-space:nowrap">requested\n            <a name="subscription-status-requested"> </a>\n          </td>\n          <td>Requested</td>\n          <td>The client has requested the subscription, and the server has not yet set it up.</td>\n        </tr>\n        <tr>\n          <td style="white-space:nowrap">active\n            <a name="subscription-status-active"> </a>\n          </td>\n          <td>Active</td>\n          <td>The subscription is active.</td>\n        </tr>\n        <tr>\n          <td style="white-space:nowrap">error\n            <a name="subscription-status-error"> </a>\n          </td>\n          <td>Error</td>\n          <td>The server has an error executing the notification.</td>\n        </tr>\n        <tr>\n          <td style="white-space:nowrap">off\n            <a name="subscription-status-off"> </a>\n          </td>\n          <td>Off</td>\n          <td>Too many errors have occurred or the subscription has expired.</td>\n        </tr>\n      </table>\n    </div>',
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
  url: "http://hl7.org/fhir/subscription-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.503",
    },
  ],
  version: "4.3.0",
  name: "SubscriptionStatus",
  title: "SubscriptionStatus",
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
  description: "The status of a subscription.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/subscription-status",
  content: "complete",
  concept: [
    {
      code: "requested",
      display: "Requested",
      definition:
        "The client has requested the subscription, and the server has not yet set it up.",
    },
    {
      code: "active",
      display: "Active",
      definition: "The subscription is active.",
    },
    {
      code: "error",
      display: "Error",
      definition: "The server has an error executing the notification.",
    },
    {
      code: "off",
      display: "Off",
      definition:
        "Too many errors have occurred or the subscription has expired.",
    },
  ],
};
