export const ContactPointSystem = {
  resourceType: "CodeSystem",
  id: "contact-point-system",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contact-point-system defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">phone<a name="contact-point-system-phone"> </a></td><td>Phone</td><td>The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.</td></tr><tr><td style="white-space:nowrap">fax<a name="contact-point-system-fax"> </a></td><td>Fax</td><td>The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.</td></tr><tr><td style="white-space:nowrap">email<a name="contact-point-system-email"> </a></td><td>Email</td><td>The value is an email address.</td></tr><tr><td style="white-space:nowrap">pager<a name="contact-point-system-pager"> </a></td><td>Pager</td><td>The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.</td></tr><tr><td style="white-space:nowrap">url<a name="contact-point-system-url"> </a></td><td>URL</td><td>A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.</td></tr><tr><td style="white-space:nowrap">sms<a name="contact-point-system-sms"> </a></td><td>SMS</td><td>A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).</td></tr><tr><td style="white-space:nowrap">other<a name="contact-point-system-other"> </a></td><td>Other</td><td>A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish &quot;other&quot; contact types.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
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
  url: "http://hl7.org/fhir/contact-point-system",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.72",
    },
  ],
  version: "4.3.0",
  name: "ContactPointSystem",
  title: "ContactPointSystem",
  status: "active",
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
  description: "Telecommunications form for contact point.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/contact-point-system",
  content: "complete",
  concept: [
    {
      code: "phone",
      display: "Phone",
      definition:
        "The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.",
    },
    {
      code: "fax",
      display: "Fax",
      definition:
        "The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.",
    },
    {
      code: "email",
      display: "Email",
      definition: "The value is an email address.",
    },
    {
      code: "pager",
      display: "Pager",
      definition:
        "The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.",
    },
    {
      code: "url",
      display: "URL",
      definition:
        "A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.",
    },
    {
      code: "sms",
      display: "SMS",
      definition:
        "A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).",
    },
    {
      code: "other",
      display: "Other",
      definition:
        'A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.',
    },
  ],
};
