/**
 * Example set of codes that can be used for billing purposes.
 * http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes
 */
export const ChargeItemCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "chargeitem-billingcodes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ChargeItemCode</h2>\n      \n      <div>\n        \n        <p>Example set of codes that can be used for billing purposes.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">1100\n            \n            <a name="chargeitem-billingcodes-1100"> </a>\n          \n          </td>\n          \n          <td>Unvorhergesehene Inanspruchnahme</td>\n          \n          <td>From German EBM billing system:\nUnvorhergesehene Inanspruchnahme des Vertragsarztes durch einen Patienten;zwischen 19:00 und 22:00 Uhr;an Samstagen, Sonntagen und gesetzlichen Feiertagen, am 24.12. und 31.12. zwischen 07:00 und 19:00 Uhr.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">1210\n            \n            <a name="chargeitem-billingcodes-1210"> </a>\n          \n          </td>\n          \n          <td>Notfallpauschale</td>\n          \n          <td>From German EBM billing system:\nNotfallpauschale im organisierten Not(-fall)dienst und für nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte, Institute und Krankenhäuser bei Inanspruchnahme;zwischen 07:00 und 19:00 Uhr.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">1320\n            \n            <a name="chargeitem-billingcodes-1320"> </a>\n          \n          </td>\n          \n          <td>Grundpauschale</td>\n          \n          <td>From German EBM billing system:\nGrundpauschale für Ärzte, Institute und Krankenhäuser, die zur Erbringung von Leistungen innerhalb mindestens eines der Fachgebiete Anästhesiologie, Frauenheilkunde und Geburtshilfe, Haut- und Geschlechtskrankheiten, Mund-, Kiefer- und Gesichtschirurgie und Humangenetik ermächtigt sind.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/chargeitem-billingcodes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1257",
    },
  ],
  version: "4.3.0",
  name: "ChargeItemCode",
  title: "ChargeItemCode",
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
  description: "Example set of codes that can be used for billing purposes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/chargeitem-billingcodes",
  content: "complete",
  concept: [
    {
      code: "1100",
      display: "Unvorhergesehene Inanspruchnahme",
      definition:
        "From German EBM billing system:\nUnvorhergesehene Inanspruchnahme des Vertragsarztes durch einen Patienten;zwischen 19:00 und 22:00 Uhr;an Samstagen, Sonntagen und gesetzlichen Feiertagen, am 24.12. und 31.12. zwischen 07:00 und 19:00 Uhr.",
    },
    {
      code: "1210",
      display: "Notfallpauschale",
      definition:
        "From German EBM billing system:\nNotfallpauschale im organisierten Not(-fall)dienst und für nicht an der vertragsärztlichen Versorgung teilnehmende Ärzte, Institute und Krankenhäuser bei Inanspruchnahme;zwischen 07:00 und 19:00 Uhr.",
    },
    {
      code: "1320",
      display: "Grundpauschale",
      definition:
        "From German EBM billing system:\nGrundpauschale für Ärzte, Institute und Krankenhäuser, die zur Erbringung von Leistungen innerhalb mindestens eines der Fachgebiete Anästhesiologie, Frauenheilkunde und Geburtshilfe, Haut- und Geschlechtskrankheiten, Mund-, Kiefer- und Gesichtschirurgie und Humangenetik ermächtigt sind.",
    },
  ],
};
