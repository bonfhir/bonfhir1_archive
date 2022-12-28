/**
 * Codes to identify how UDI data was entered.
 * http://hl7.org/fhir/udi-entry-type
 */
export const UDIEntryTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "udi-entry-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>UDIEntryType</h2>\n      \n      <div>\n        \n        <p>Codes to identify how UDI data was entered.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/udi-entry-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">barcode\n            \n            <a name="udi-entry-type-barcode"> </a>\n          \n          </td>\n          \n          <td>Barcode</td>\n          \n          <td>a barcodescanner captured the data from the device label.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">rfid\n            \n            <a name="udi-entry-type-rfid"> </a>\n          \n          </td>\n          \n          <td>RFID</td>\n          \n          <td>An RFID chip reader captured the data from the device label.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">manual\n            \n            <a name="udi-entry-type-manual"> </a>\n          \n          </td>\n          \n          <td>Manual</td>\n          \n          <td>The data was read from the label by a person and manually entered. (e.g.  via a keyboard).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">card\n            \n            <a name="udi-entry-type-card"> </a>\n          \n          </td>\n          \n          <td>Card</td>\n          \n          <td>The data originated from a patient\'s implant card and was read by an operator.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">self-reported\n            \n            <a name="udi-entry-type-self-reported"> </a>\n          \n          </td>\n          \n          <td>Self Reported</td>\n          \n          <td>The data originated from a patient source and was not directly scanned or read from a label or card.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unknown\n            \n            <a name="udi-entry-type-unknown"> </a>\n          \n          </td>\n          \n          <td>Unknown</td>\n          \n          <td>The method of data capture has not been determined.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/udi-entry-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.212",
    },
  ],
  version: "4.3.0",
  name: "UDIEntryType",
  title: "UDIEntryType",
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
  description: "Codes to identify how UDI data was entered.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/udi-entry-type",
  content: "complete",
  concept: [
    {
      code: "barcode",
      display: "Barcode",
      definition: "a barcodescanner captured the data from the device label.",
    },
    {
      code: "rfid",
      display: "RFID",
      definition:
        "An RFID chip reader captured the data from the device label.",
    },
    {
      code: "manual",
      display: "Manual",
      definition:
        "The data was read from the label by a person and manually entered. (e.g.  via a keyboard).",
    },
    {
      code: "card",
      display: "Card",
      definition:
        "The data originated from a patient's implant card and was read by an operator.",
    },
    {
      code: "self-reported",
      display: "Self Reported",
      definition:
        "The data originated from a patient source and was not directly scanned or read from a label or card.",
    },
    {
      code: "unknown",
      display: "Unknown",
      definition: "The method of data capture has not been determined.",
    },
  ],
};
