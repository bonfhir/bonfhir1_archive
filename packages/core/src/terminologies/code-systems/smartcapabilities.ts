/**
 * Codes that define what the server is capable of.
 * http://terminology.hl7.org/CodeSystem/smart-capabilities
 */
export const SmartCapabilitiesCodeSystem = {
  resourceType: "CodeSystem",
  id: "smart-capabilities",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/smart-capabilities defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">launch-ehr<a name="smart-capabilities-launch-ehr"> </a></td><td>EHR Launch Mode</td><td>support for SMART’s EHR Launch mode.</td></tr><tr><td style="white-space:nowrap">launch-standalone<a name="smart-capabilities-launch-standalone"> </a></td><td>Standalone Launch Mode</td><td>support for SMART’s Standalone Launch mode.</td></tr><tr><td style="white-space:nowrap">client-public<a name="smart-capabilities-client-public"> </a></td><td>Public Client Profile</td><td>support for SMART’s public client profile (no client authentication).</td></tr><tr><td style="white-space:nowrap">client-confidential-symmetric<a name="smart-capabilities-client-confidential-symmetric"> </a></td><td>Confidential Client Profile</td><td>support for SMART’s confidential client profile (symmetric client secret authentication).</td></tr><tr><td style="white-space:nowrap">sso-openid-connect<a name="smart-capabilities-sso-openid-connect"> </a></td><td>Supports OpenID Connect</td><td>support for SMART’s OpenID Connect profile.</td></tr><tr><td style="white-space:nowrap">context-passthrough-banner<a name="smart-capabilities-context-passthrough-banner"> </a></td><td>Allows &quot;Need Patient Banner&quot;</td><td>support for “need patient banner” launch context (conveyed via need_patient_banner token parameter).</td></tr><tr><td style="white-space:nowrap">context-passthrough-style<a name="smart-capabilities-context-passthrough-style"> </a></td><td>Allows &quot;Smart Style Style&quot;</td><td>support for “SMART style URL” launch context (conveyed via smart_style_url token parameter).</td></tr><tr><td style="white-space:nowrap">context-ehr-patient<a name="smart-capabilities-context-ehr-patient"> </a></td><td>Allows &quot;Patient Level Launch Context (EHR)&quot;</td><td>support for patient-level launch context (requested by launch/patient scope, conveyed via patient token parameter).</td></tr><tr><td style="white-space:nowrap">context-ehr-encounter<a name="smart-capabilities-context-ehr-encounter"> </a></td><td>Allows &quot;Encounter Level Launch Context (EHR)&quot;</td><td>support for encounter-level launch context (requested by launch/encounter scope, conveyed via encounter token parameter).</td></tr><tr><td style="white-space:nowrap">context-standalone-patient<a name="smart-capabilities-context-standalone-patient"> </a></td><td>Allows &quot;Patient Level Launch Context (STANDALONE)&quot;</td><td>support for patient-level launch context (requested by launch/patient scope, conveyed via patient token parameter).</td></tr><tr><td style="white-space:nowrap">context-standalone-encounter<a name="smart-capabilities-context-standalone-encounter"> </a></td><td>Allows &quot;Encounter Level Launch Context (STANDALONE)&quot;</td><td>support for encounter-level launch context (requested by launch/encounter scope, conveyed via encounter token parameter).</td></tr><tr><td style="white-space:nowrap">permission-offline<a name="smart-capabilities-permission-offline"> </a></td><td>Supports Refresh Token</td><td>support for refresh tokens (requested by offline_access scope).</td></tr><tr><td style="white-space:nowrap">permission-patient<a name="smart-capabilities-permission-patient"> </a></td><td>Supports Patient Level Scopes</td><td>support for patient-level scopes (e.g. patient/Observation.read).</td></tr><tr><td style="white-space:nowrap">permission-user<a name="smart-capabilities-permission-user"> </a></td><td>Supports User Level Scopes</td><td>support for user-level scopes (e.g. user/Appointment.read).</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/smart-capabilities",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1265",
    },
  ],
  version: "4.3.0",
  name: "SmartCapabilities",
  title: "SmartCapabilities",
  status: "draft",
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
  description: "Codes that define what the server is capable of.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/smart-capabilities",
  content: "complete",
  concept: [
    {
      code: "launch-ehr",
      display: "EHR Launch Mode",
      definition: "support for SMART’s EHR Launch mode.",
    },
    {
      code: "launch-standalone",
      display: "Standalone Launch Mode",
      definition: "support for SMART’s Standalone Launch mode.",
    },
    {
      code: "client-public",
      display: "Public Client Profile",
      definition:
        "support for SMART’s public client profile (no client authentication).",
    },
    {
      code: "client-confidential-symmetric",
      display: "Confidential Client Profile",
      definition:
        "support for SMART’s confidential client profile (symmetric client secret authentication).",
    },
    {
      code: "sso-openid-connect",
      display: "Supports OpenID Connect",
      definition: "support for SMART’s OpenID Connect profile.",
    },
    {
      code: "context-passthrough-banner",
      display: 'Allows "Need Patient Banner"',
      definition:
        "support for “need patient banner” launch context (conveyed via need_patient_banner token parameter).",
    },
    {
      code: "context-passthrough-style",
      display: 'Allows "Smart Style Style"',
      definition:
        "support for “SMART style URL” launch context (conveyed via smart_style_url token parameter).",
    },
    {
      code: "context-ehr-patient",
      display: 'Allows "Patient Level Launch Context (EHR)"',
      definition:
        "support for patient-level launch context (requested by launch/patient scope, conveyed via patient token parameter).",
    },
    {
      code: "context-ehr-encounter",
      display: 'Allows "Encounter Level Launch Context (EHR)"',
      definition:
        "support for encounter-level launch context (requested by launch/encounter scope, conveyed via encounter token parameter).",
    },
    {
      code: "context-standalone-patient",
      display: 'Allows "Patient Level Launch Context (STANDALONE)"',
      definition:
        "support for patient-level launch context (requested by launch/patient scope, conveyed via patient token parameter).",
    },
    {
      code: "context-standalone-encounter",
      display: 'Allows "Encounter Level Launch Context (STANDALONE)"',
      definition:
        "support for encounter-level launch context (requested by launch/encounter scope, conveyed via encounter token parameter).",
    },
    {
      code: "permission-offline",
      display: "Supports Refresh Token",
      definition:
        "support for refresh tokens (requested by offline_access scope).",
    },
    {
      code: "permission-patient",
      display: "Supports Patient Level Scopes",
      definition:
        "support for patient-level scopes (e.g. patient/Observation.read).",
    },
    {
      code: "permission-user",
      display: "Supports User Level Scopes",
      definition: "support for user-level scopes (e.g. user/Appointment.read).",
    },
  ],
};
