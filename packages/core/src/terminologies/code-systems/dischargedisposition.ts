export const DischargeDisposition = {
  resourceType: "CodeSystem",
  id: "encounter-discharge-disposition",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/discharge-disposition defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">home<a name="encounter-discharge-disposition-home"> </a></td><td>Home</td><td>The patient was dicharged and has indicated that they are going to return home afterwards.</td></tr><tr><td style="white-space:nowrap">alt-home<a name="encounter-discharge-disposition-alt-home"> </a></td><td>Alternative home</td><td>The patient was discharged and has indicated that they are going to return home afterwards, but not the patient\'s home - e.g. a family member\'s home.</td></tr><tr><td style="white-space:nowrap">other-hcf<a name="encounter-discharge-disposition-other-hcf"> </a></td><td>Other healthcare facility</td><td>The patient was transferred to another healthcare facility.</td></tr><tr><td style="white-space:nowrap">hosp<a name="encounter-discharge-disposition-hosp"> </a></td><td>Hospice</td><td>The patient has been discharged into palliative care.</td></tr><tr><td style="white-space:nowrap">long<a name="encounter-discharge-disposition-long"> </a></td><td>Long-term care</td><td>The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.</td></tr><tr><td style="white-space:nowrap">aadvice<a name="encounter-discharge-disposition-aadvice"> </a></td><td>Left against advice</td><td>The patient self discharged against medical advice.</td></tr><tr><td style="white-space:nowrap">exp<a name="encounter-discharge-disposition-exp"> </a></td><td>Expired</td><td>The patient has deceased during this encounter.</td></tr><tr><td style="white-space:nowrap">psy<a name="encounter-discharge-disposition-psy"> </a></td><td>Psychiatric hospital</td><td>The patient has been transferred to a psychiatric facility.</td></tr><tr><td style="white-space:nowrap">rehab<a name="encounter-discharge-disposition-rehab"> </a></td><td>Rehabilitation</td><td>The patient was discharged and is to receive post acute care rehabilitation services.</td></tr><tr><td style="white-space:nowrap">snf<a name="encounter-discharge-disposition-snf"> </a></td><td>Skilled nursing facility</td><td>The patient has been discharged to a skilled nursing facility for the patient to receive additional care.</td></tr><tr><td style="white-space:nowrap">oth<a name="encounter-discharge-disposition-oth"> </a></td><td>Other</td><td>The discharge disposition has not otherwise defined.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1093",
    },
  ],
  version: "4.3.0",
  name: "DischargeDisposition",
  status: "draft",
  experimental: false,
  description:
    "This codesystem defines a set of codes that can be used to where the patient left the hospital.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "home",
      display: "Home",
      definition:
        "The patient was dicharged and has indicated that they are going to return home afterwards.",
    },
    {
      code: "alt-home",
      display: "Alternative home",
      definition:
        "The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home.",
    },
    {
      code: "other-hcf",
      display: "Other healthcare facility",
      definition: "The patient was transferred to another healthcare facility.",
    },
    {
      code: "hosp",
      display: "Hospice",
      definition: "The patient has been discharged into palliative care.",
    },
    {
      code: "long",
      display: "Long-term care",
      definition:
        "The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.",
    },
    {
      code: "aadvice",
      display: "Left against advice",
      definition: "The patient self discharged against medical advice.",
    },
    {
      code: "exp",
      display: "Expired",
      definition: "The patient has deceased during this encounter.",
    },
    {
      code: "psy",
      display: "Psychiatric hospital",
      definition: "The patient has been transferred to a psychiatric facility.",
    },
    {
      code: "rehab",
      display: "Rehabilitation",
      definition:
        "The patient was discharged and is to receive post acute care rehabilitation services.",
    },
    {
      code: "snf",
      display: "Skilled nursing facility",
      definition:
        "The patient has been discharged to a skilled nursing facility for the patient to receive additional care.",
    },
    {
      code: "oth",
      display: "Other",
      definition: "The discharge disposition has not otherwise defined.",
    },
  ],
};
