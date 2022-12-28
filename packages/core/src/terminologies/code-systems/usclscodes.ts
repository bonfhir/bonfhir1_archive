export const USCLSCodes = {
  resourceType: "CodeSystem",
  id: "service-uscls",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-USCLS defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1101<a name="service-uscls-1101"> </a></td><td>Exam, comp, primary</td><td>Exam, comp, primary</td></tr><tr><td style="white-space:nowrap">1102<a name="service-uscls-1102"> </a></td><td>Exam, comp, mixed</td><td>Exam, comp, mixed</td></tr><tr><td style="white-space:nowrap">1103<a name="service-uscls-1103"> </a></td><td>Exam, comp, permanent</td><td>Exam, comp, permanent</td></tr><tr><td style="white-space:nowrap">1201<a name="service-uscls-1201"> </a></td><td>Exam, recall</td><td>Exam, recall</td></tr><tr><td style="white-space:nowrap">1205<a name="service-uscls-1205"> </a></td><td>Exam, emergency</td><td>Exam, emergency</td></tr><tr><td style="white-space:nowrap">2101<a name="service-uscls-2101"> </a></td><td>Radiograph, series (12)</td><td>Radiograph, series (12)</td></tr><tr><td style="white-space:nowrap">2102<a name="service-uscls-2102"> </a></td><td>Radiograph, series (16)</td><td>Radiograph, series (16)</td></tr><tr><td style="white-space:nowrap">2141<a name="service-uscls-2141"> </a></td><td>Radiograph, bitewing</td><td>Radiograph, bitewing</td></tr><tr><td style="white-space:nowrap">2601<a name="service-uscls-2601"> </a></td><td>Radiograph, panoramic</td><td>Radiograph, panoramic</td></tr><tr><td style="white-space:nowrap">11101<a name="service-uscls-11101"> </a></td><td>Polishing, 1 unit</td><td>Polishing, 1 unit</td></tr><tr><td style="white-space:nowrap">11102<a name="service-uscls-11102"> </a></td><td>Polishing, 2 unit</td><td>Polishing, 2 unit</td></tr><tr><td style="white-space:nowrap">11103<a name="service-uscls-11103"> </a></td><td>Polishing, 3 unit</td><td>Polishing, 3 unit</td></tr><tr><td style="white-space:nowrap">11104<a name="service-uscls-11104"> </a></td><td>Polishing, 4 unit</td><td>Polishing, 4 unit</td></tr><tr><td style="white-space:nowrap">21211<a name="service-uscls-21211"> </a></td><td>Amalgam, 1 surface</td><td>Amalgam, 1 surface</td></tr><tr><td style="white-space:nowrap">21212<a name="service-uscls-21212"> </a></td><td>Amalgam, 2 surface</td><td>Amalgam, 2 surface</td></tr><tr><td style="white-space:nowrap">27211<a name="service-uscls-27211"> </a></td><td>Crown, PFM</td><td>Crown, PFM</td></tr><tr><td style="white-space:nowrap">67211<a name="service-uscls-67211"> </a></td><td>Maryland Bridge</td><td>Maryland Bridge</td></tr><tr><td style="white-space:nowrap">99111<a name="service-uscls-99111"> </a></td><td>Lab, commercial</td><td>Lab, commercial</td></tr><tr><td style="white-space:nowrap">99333<a name="service-uscls-99333"> </a></td><td>Lab, in office</td><td>Lab, in office</td></tr><tr><td style="white-space:nowrap">99555<a name="service-uscls-99555"> </a></td><td>Expense</td><td>Expense</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-USCLS",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1153",
    },
  ],
  version: "4.3.0",
  name: "USCLSCodes",
  title: "USCLS Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of USCLS codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "1101",
      display: "Exam, comp, primary",
      definition: "Exam, comp, primary",
    },
    {
      code: "1102",
      display: "Exam, comp, mixed",
      definition: "Exam, comp, mixed",
    },
    {
      code: "1103",
      display: "Exam, comp, permanent",
      definition: "Exam, comp, permanent",
    },
    { code: "1201", display: "Exam, recall", definition: "Exam, recall" },
    { code: "1205", display: "Exam, emergency", definition: "Exam, emergency" },
    {
      code: "2101",
      display: "Radiograph, series (12)",
      definition: "Radiograph, series (12)",
    },
    {
      code: "2102",
      display: "Radiograph, series (16)",
      definition: "Radiograph, series (16)",
    },
    {
      code: "2141",
      display: "Radiograph, bitewing",
      definition: "Radiograph, bitewing",
    },
    {
      code: "2601",
      display: "Radiograph, panoramic",
      definition: "Radiograph, panoramic",
    },
    {
      code: "11101",
      display: "Polishing, 1 unit",
      definition: "Polishing, 1 unit",
    },
    {
      code: "11102",
      display: "Polishing, 2 unit",
      definition: "Polishing, 2 unit",
    },
    {
      code: "11103",
      display: "Polishing, 3 unit",
      definition: "Polishing, 3 unit",
    },
    {
      code: "11104",
      display: "Polishing, 4 unit",
      definition: "Polishing, 4 unit",
    },
    {
      code: "21211",
      display: "Amalgam, 1 surface",
      definition: "Amalgam, 1 surface",
    },
    {
      code: "21212",
      display: "Amalgam, 2 surface",
      definition: "Amalgam, 2 surface",
    },
    { code: "27211", display: "Crown, PFM", definition: "Crown, PFM" },
    {
      code: "67211",
      display: "Maryland Bridge",
      definition: "Maryland Bridge",
    },
    {
      code: "99111",
      display: "Lab, commercial",
      definition: "Lab, commercial",
    },
    { code: "99333", display: "Lab, in office", definition: "Lab, in office" },
    { code: "99555", display: "Expense", definition: "Expense" },
  ],
};
