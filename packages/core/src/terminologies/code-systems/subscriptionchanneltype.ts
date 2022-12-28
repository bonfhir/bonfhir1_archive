/**
 * The type of method used to execute a subscription.
 * http://hl7.org/fhir/subscription-channel-type
 */
export const SubscriptionChannelTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "subscription-channel-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SubscriptionChannelType</h2>\n      \n      <div>\n        \n        <p>The type of method used to execute a subscription.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/subscription-channel-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">rest-hook\n            \n            <a name="subscription-channel-type-rest-hook"> </a>\n          \n          </td>\n          \n          <td>Rest Hook</td>\n          \n          <td>The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">websocket\n            \n            <a name="subscription-channel-type-websocket"> </a>\n          \n          </td>\n          \n          <td>Websocket</td>\n          \n          <td>The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">email\n            \n            <a name="subscription-channel-type-email"> </a>\n          \n          </td>\n          \n          <td>Email</td>\n          \n          <td>The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">sms\n            \n            <a name="subscription-channel-type-sms"> </a>\n          \n          </td>\n          \n          <td>SMS</td>\n          \n          <td>The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">message\n            \n            <a name="subscription-channel-type-message"> </a>\n          \n          </td>\n          \n          <td>Message</td>\n          \n          <td>The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/subscription-channel-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.501",
    },
  ],
  version: "4.3.0",
  name: "SubscriptionChannelType",
  title: "SubscriptionChannelType",
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
  description: "The type of method used to execute a subscription.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/subscription-channel-type",
  content: "complete",
  concept: [
    {
      code: "rest-hook",
      display: "Rest Hook",
      definition:
        "The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.",
    },
    {
      code: "websocket",
      display: "Websocket",
      definition:
        "The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.",
    },
    {
      code: "email",
      display: "Email",
      definition:
        "The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).",
    },
    {
      code: "sms",
      display: "SMS",
      definition:
        "The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).",
    },
    {
      code: "message",
      display: "Message",
      definition:
        "The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.",
    },
  ],
};
