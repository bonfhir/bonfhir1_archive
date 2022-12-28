/**
 * This value set is suitable for use with the provenance resource. It is derived from, but not compatible with, the HL7 v3 Purpose of use Code system.
 * http://healthit.gov/nhin/purposeofuse
 */
export const NHINPurposeOfUseCodeSystem = {
  resourceType: "CodeSystem",
  id: "nhin-purposeofuse",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://healthit.gov/nhin/purposeofuse defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">TREATMENT<a name="nhin-purposeofuse-TREATMENT"> </a></td><td>Treatment</td><td>Treatment</td></tr><tr><td style="white-space:nowrap">PAYMENT<a name="nhin-purposeofuse-PAYMENT"> </a></td><td>Payment</td><td>Payment</td></tr><tr><td style="white-space:nowrap">OPERATIONS<a name="nhin-purposeofuse-OPERATIONS"> </a></td><td>Operations</td><td>Healthcare Operations</td></tr><tr><td style="white-space:nowrap">SYSADMIN<a name="nhin-purposeofuse-SYSADMIN"> </a></td><td>Sysadmin</td><td>System Administration</td></tr><tr><td style="white-space:nowrap">FRAUD<a name="nhin-purposeofuse-FRAUD"> </a></td><td>Fraud</td><td>Fraud detection</td></tr><tr><td style="white-space:nowrap">PSYCHOTHERAPY<a name="nhin-purposeofuse-PSYCHOTHERAPY"> </a></td><td>Psychotherapy</td><td>Use or disclosure of Psychotherapy Notes</td></tr><tr><td style="white-space:nowrap">TRAINING<a name="nhin-purposeofuse-TRAINING"> </a></td><td>Training</td><td>Use or disclosure by the covered entity for its own training programs</td></tr><tr><td style="white-space:nowrap">LEGAL<a name="nhin-purposeofuse-LEGAL"> </a></td><td>Legal</td><td>Use or disclosure by the covered entity to defend itself in a legal action</td></tr><tr><td style="white-space:nowrap">MARKETING<a name="nhin-purposeofuse-MARKETING"> </a></td><td>Marketing</td><td>Marketing</td></tr><tr><td style="white-space:nowrap">DIRECTORY<a name="nhin-purposeofuse-DIRECTORY"> </a></td><td>Directory</td><td>Use and disclosure for facility directories</td></tr><tr><td style="white-space:nowrap">FAMILY<a name="nhin-purposeofuse-FAMILY"> </a></td><td>Family</td><td>Disclose to a family member, other relative, or a close personal friend of the individual</td></tr><tr><td style="white-space:nowrap">PRESENT<a name="nhin-purposeofuse-PRESENT"> </a></td><td>Present</td><td>Uses and disclosures with the individual present.</td></tr><tr><td style="white-space:nowrap">EMERGENCY<a name="nhin-purposeofuse-EMERGENCY"> </a></td><td>Emergency</td><td>Permission cannot practicably be provided because of the individual\'s incapacity or an emergency.</td></tr><tr><td style="white-space:nowrap">DISASTER<a name="nhin-purposeofuse-DISASTER"> </a></td><td>Disaster</td><td>Use and disclosures for disaster relief purposes.</td></tr><tr><td style="white-space:nowrap">PUBLICHEALTH<a name="nhin-purposeofuse-PUBLICHEALTH"> </a></td><td>Public Health</td><td>Uses and disclosures for public health activities.</td></tr><tr><td style="white-space:nowrap">ABUSE<a name="nhin-purposeofuse-ABUSE"> </a></td><td>Abuse</td><td>Disclosures about victims of abuse, neglect or domestic violence.</td></tr><tr><td style="white-space:nowrap">OVERSIGHT<a name="nhin-purposeofuse-OVERSIGHT"> </a></td><td>Oversight</td><td>Uses and disclosures for health oversight activities.</td></tr><tr><td style="white-space:nowrap">JUDICIAL<a name="nhin-purposeofuse-JUDICIAL"> </a></td><td>Judicial</td><td>Disclosures for judicial and administrative proceedings.</td></tr><tr><td style="white-space:nowrap">LAW<a name="nhin-purposeofuse-LAW"> </a></td><td>Law Enforcement</td><td>Disclosures for law enforcement purposes.</td></tr><tr><td style="white-space:nowrap">DECEASED<a name="nhin-purposeofuse-DECEASED"> </a></td><td>Deceased</td><td>Uses and disclosures about decedents.</td></tr><tr><td style="white-space:nowrap">DONATION<a name="nhin-purposeofuse-DONATION"> </a></td><td>Donation</td><td>Uses and disclosures for cadaveric organ,  eye or tissue donation purposes</td></tr><tr><td style="white-space:nowrap">RESEARCH<a name="nhin-purposeofuse-RESEARCH"> </a></td><td>Research</td><td>Uses and disclosures for research purposes.</td></tr><tr><td style="white-space:nowrap">THREAT<a name="nhin-purposeofuse-THREAT"> </a></td><td>Threat</td><td>Uses and disclosures to avert a serious threat to health or safety.</td></tr><tr><td style="white-space:nowrap">GOVERNMENT<a name="nhin-purposeofuse-GOVERNMENT"> </a></td><td>Government</td><td>Uses and disclosures for specialized government functions.</td></tr><tr><td style="white-space:nowrap">WORKERSCOMP<a name="nhin-purposeofuse-WORKERSCOMP"> </a></td><td>Worker\'s Comp</td><td>Disclosures for workers\' compensation.</td></tr><tr><td style="white-space:nowrap">COVERAGE<a name="nhin-purposeofuse-COVERAGE"> </a></td><td>Coverage</td><td>Disclosures for insurance or disability coverage determination</td></tr><tr><td style="white-space:nowrap">REQUEST<a name="nhin-purposeofuse-REQUEST"> </a></td><td>Request</td><td>Request of the Individual</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://healthit.gov/nhin/purposeofuse",
  version: "2.0",
  name: "NHIN PurposeOfUse",
  status: "active",
  experimental: false,
  date: "2010-01-29",
  publisher: "Nationwide Health Information Network (NHIN)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value:
            "https://www.healthit.gov/sites/default/files/nhin-authorization-framework-production-specification-v2.0-1.pdf",
        },
      ],
    },
  ],
  description:
    "This value set is suitable for use with the provenance resource. It is derived from, but not compatible with, the HL7 v3 Purpose of use Code system.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/nhin-purposeofuse",
  content: "complete",
  concept: [
    { code: "TREATMENT", display: "Treatment", definition: "Treatment" },
    { code: "PAYMENT", display: "Payment", definition: "Payment" },
    {
      code: "OPERATIONS",
      display: "Operations",
      definition: "Healthcare Operations",
    },
    {
      code: "SYSADMIN",
      display: "Sysadmin",
      definition: "System Administration",
    },
    { code: "FRAUD", display: "Fraud", definition: "Fraud detection" },
    {
      code: "PSYCHOTHERAPY",
      display: "Psychotherapy",
      definition: "Use or disclosure of Psychotherapy Notes",
    },
    {
      code: "TRAINING",
      display: "Training",
      definition:
        "Use or disclosure by the covered entity for its own training programs",
    },
    {
      code: "LEGAL",
      display: "Legal",
      definition:
        "Use or disclosure by the covered entity to defend itself in a legal action",
    },
    { code: "MARKETING", display: "Marketing", definition: "Marketing" },
    {
      code: "DIRECTORY",
      display: "Directory",
      definition: "Use and disclosure for facility directories",
    },
    {
      code: "FAMILY",
      display: "Family",
      definition:
        "Disclose to a family member, other relative, or a close personal friend of the individual",
    },
    {
      code: "PRESENT",
      display: "Present",
      definition: "Uses and disclosures with the individual present.",
    },
    {
      code: "EMERGENCY",
      display: "Emergency",
      definition:
        "Permission cannot practicably be provided because of the individual's incapacity or an emergency.",
    },
    {
      code: "DISASTER",
      display: "Disaster",
      definition: "Use and disclosures for disaster relief purposes.",
    },
    {
      code: "PUBLICHEALTH",
      display: "Public Health",
      definition: "Uses and disclosures for public health activities.",
    },
    {
      code: "ABUSE",
      display: "Abuse",
      definition:
        "Disclosures about victims of abuse, neglect or domestic violence.",
    },
    {
      code: "OVERSIGHT",
      display: "Oversight",
      definition: "Uses and disclosures for health oversight activities.",
    },
    {
      code: "JUDICIAL",
      display: "Judicial",
      definition: "Disclosures for judicial and administrative proceedings.",
    },
    {
      code: "LAW",
      display: "Law Enforcement",
      definition: "Disclosures for law enforcement purposes.",
    },
    {
      code: "DECEASED",
      display: "Deceased",
      definition: "Uses and disclosures about decedents.",
    },
    {
      code: "DONATION",
      display: "Donation",
      definition:
        "Uses and disclosures for cadaveric organ,  eye or tissue donation purposes",
    },
    {
      code: "RESEARCH",
      display: "Research",
      definition: "Uses and disclosures for research purposes.",
    },
    {
      code: "THREAT",
      display: "Threat",
      definition:
        "Uses and disclosures to avert a serious threat to health or safety.",
    },
    {
      code: "GOVERNMENT",
      display: "Government",
      definition: "Uses and disclosures for specialized government functions.",
    },
    {
      code: "WORKERSCOMP",
      display: "Worker's Comp",
      definition: "Disclosures for workers' compensation.",
    },
    {
      code: "COVERAGE",
      display: "Coverage",
      definition:
        "Disclosures for insurance or disability coverage determination",
    },
    {
      code: "REQUEST",
      display: "Request",
      definition: "Request of the Individual",
    },
  ],
};
