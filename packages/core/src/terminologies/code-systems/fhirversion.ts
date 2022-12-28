/**
 * All published FHIR Versions.
 * http://hl7.org/fhir/FHIR-version
 */
export const FHIRVersionCodeSystem = {
  resourceType: "CodeSystem",
  id: "FHIR-version",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/FHIR-version defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">0.01<a name="FHIR-version-0.4601"> </a></td><td>0.01</td><td>Oldest archived version of FHIR.</td></tr><tr><td style="white-space:nowrap">0.05<a name="FHIR-version-0.4605"> </a></td><td>0.05</td><td>1st Draft for Comment (Sept 2012 Ballot).</td></tr><tr><td style="white-space:nowrap">0.06<a name="FHIR-version-0.4606"> </a></td><td>0.06</td><td>2nd Draft for Comment (January 2013 Ballot).</td></tr><tr><td style="white-space:nowrap">0.11<a name="FHIR-version-0.4611"> </a></td><td>0.11</td><td>DSTU 1 Ballot version.</td></tr><tr><td style="white-space:nowrap">0.0.80<a name="FHIR-version-0.460.4680"> </a></td><td>0.0.80</td><td>DSTU 1 Official version.</td></tr><tr><td style="white-space:nowrap">0.0.81<a name="FHIR-version-0.460.4681"> </a></td><td>0.0.81</td><td>DSTU 1 Official version Technical Errata #1.</td></tr><tr><td style="white-space:nowrap">0.0.82<a name="FHIR-version-0.460.4682"> </a></td><td>0.0.82</td><td>DSTU 1 Official version Technical Errata #2.</td></tr><tr><td style="white-space:nowrap">0.4.0<a name="FHIR-version-0.464.460"> </a></td><td>0.4.0</td><td>Draft For Comment (January 2015 Ballot).</td></tr><tr><td style="white-space:nowrap">0.5.0<a name="FHIR-version-0.465.460"> </a></td><td>0.5.0</td><td>DSTU 2 Ballot version (May 2015 Ballot).</td></tr><tr><td style="white-space:nowrap">1.0.0<a name="FHIR-version-1.460.460"> </a></td><td>1.0.0</td><td>DSTU 2 QA Preview + CQIF Ballot (Sep 2015).</td></tr><tr><td style="white-space:nowrap">1.0.1<a name="FHIR-version-1.460.461"> </a></td><td>1.0.1</td><td>DSTU 2 (Official version).</td></tr><tr><td style="white-space:nowrap">1.0.2<a name="FHIR-version-1.460.462"> </a></td><td>1.0.2</td><td>DSTU 2 (Official version) with 1 technical errata.</td></tr><tr><td style="white-space:nowrap">1.1.0<a name="FHIR-version-1.461.460"> </a></td><td>1.1.0</td><td>GAO Ballot + draft changes to main FHIR standard.</td></tr><tr><td style="white-space:nowrap">1.4.0<a name="FHIR-version-1.464.460"> </a></td><td>1.4.0</td><td>CQF on FHIR Ballot + Connectathon 12 (Montreal).</td></tr><tr><td style="white-space:nowrap">1.6.0<a name="FHIR-version-1.466.460"> </a></td><td>1.6.0</td><td>FHIR STU3 Ballot + Connectathon 13 (Baltimore).</td></tr><tr><td style="white-space:nowrap">1.8.0<a name="FHIR-version-1.468.460"> </a></td><td>1.8.0</td><td>FHIR STU3 Candidate + Connectathon 14 (San Antonio).</td></tr><tr><td style="white-space:nowrap">3.0.0<a name="FHIR-version-3.460.460"> </a></td><td>3.0.0</td><td>FHIR Release 3 (STU).</td></tr><tr><td style="white-space:nowrap">3.0.1<a name="FHIR-version-3.460.461"> </a></td><td>3.0.1</td><td>FHIR Release 3 (STU) with 1 technical errata.</td></tr><tr><td style="white-space:nowrap">3.0.2<a name="FHIR-version-3.460.462"> </a></td><td>3.0.2</td><td>FHIR Release 3 (STU) with 2 technical errata.</td></tr><tr><td style="white-space:nowrap">3.3.0<a name="FHIR-version-3.463.460"> </a></td><td>3.3.0</td><td>R4 Ballot #1.</td></tr><tr><td style="white-space:nowrap">3.5.0<a name="FHIR-version-3.465.460"> </a></td><td>3.5.0</td><td>R4 Ballot #2.</td></tr><tr><td style="white-space:nowrap">4.0.0<a name="FHIR-version-4.460.460"> </a></td><td>4.0.0</td><td>FHIR Release 4 (Normative + STU).</td></tr><tr><td style="white-space:nowrap">4.0.1<a name="FHIR-version-4.460.461"> </a></td><td>4.0.1</td><td>FHIR Release 4 Technical Correction.</td></tr><tr><td style="white-space:nowrap">4.1.0<a name="FHIR-version-4.461.460"> </a></td><td>4.1.0</td><td>FHIR Release 4B Ballot #1.</td></tr><tr><td style="white-space:nowrap">4.3.0-cibuild<a name="FHIR-version-4.463.460-cibuild"> </a></td><td>4.3.0-cibuild</td><td>FHIR Release 4B CI-Build.</td></tr><tr><td style="white-space:nowrap">4.3.0-snapshot1<a name="FHIR-version-4.463.460-snapshot1"> </a></td><td>4.3.0-snapshot1</td><td>FHIR Release 4B Snapshot #1.</td></tr><tr><td style="white-space:nowrap">4.3.0<a name="FHIR-version-4.463.460"> </a></td><td>4.3.0</td><td>FHIR Release 4B.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
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
  url: "http://hl7.org/fhir/FHIR-version",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1310",
    },
  ],
  version: "4.3.0",
  name: "FHIRVersion",
  title: "FHIRVersion",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description: "All published FHIR Versions.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/FHIR-version",
  content: "complete",
  concept: [
    {
      code: "0.01",
      display: "0.01",
      definition: "Oldest archived version of FHIR.",
    },
    {
      code: "0.05",
      display: "0.05",
      definition: "1st Draft for Comment (Sept 2012 Ballot).",
    },
    {
      code: "0.06",
      display: "0.06",
      definition: "2nd Draft for Comment (January 2013 Ballot).",
    },
    { code: "0.11", display: "0.11", definition: "DSTU 1 Ballot version." },
    {
      code: "0.0.80",
      display: "0.0.80",
      definition: "DSTU 1 Official version.",
    },
    {
      code: "0.0.81",
      display: "0.0.81",
      definition: "DSTU 1 Official version Technical Errata #1.",
    },
    {
      code: "0.0.82",
      display: "0.0.82",
      definition: "DSTU 1 Official version Technical Errata #2.",
    },
    {
      code: "0.4.0",
      display: "0.4.0",
      definition: "Draft For Comment (January 2015 Ballot).",
    },
    {
      code: "0.5.0",
      display: "0.5.0",
      definition: "DSTU 2 Ballot version (May 2015 Ballot).",
    },
    {
      code: "1.0.0",
      display: "1.0.0",
      definition: "DSTU 2 QA Preview + CQIF Ballot (Sep 2015).",
    },
    {
      code: "1.0.1",
      display: "1.0.1",
      definition: "DSTU 2 (Official version).",
    },
    {
      code: "1.0.2",
      display: "1.0.2",
      definition: "DSTU 2 (Official version) with 1 technical errata.",
    },
    {
      code: "1.1.0",
      display: "1.1.0",
      definition: "GAO Ballot + draft changes to main FHIR standard.",
    },
    {
      code: "1.4.0",
      display: "1.4.0",
      definition: "CQF on FHIR Ballot + Connectathon 12 (Montreal).",
    },
    {
      code: "1.6.0",
      display: "1.6.0",
      definition: "FHIR STU3 Ballot + Connectathon 13 (Baltimore).",
    },
    {
      code: "1.8.0",
      display: "1.8.0",
      definition: "FHIR STU3 Candidate + Connectathon 14 (San Antonio).",
    },
    { code: "3.0.0", display: "3.0.0", definition: "FHIR Release 3 (STU)." },
    {
      code: "3.0.1",
      display: "3.0.1",
      definition: "FHIR Release 3 (STU) with 1 technical errata.",
    },
    {
      code: "3.0.2",
      display: "3.0.2",
      definition: "FHIR Release 3 (STU) with 2 technical errata.",
    },
    { code: "3.3.0", display: "3.3.0", definition: "R4 Ballot #1." },
    { code: "3.5.0", display: "3.5.0", definition: "R4 Ballot #2." },
    {
      code: "4.0.0",
      display: "4.0.0",
      definition: "FHIR Release 4 (Normative + STU).",
    },
    {
      code: "4.0.1",
      display: "4.0.1",
      definition: "FHIR Release 4 Technical Correction.",
    },
    {
      code: "4.1.0",
      display: "4.1.0",
      definition: "FHIR Release 4B Ballot #1.",
    },
    {
      code: "4.3.0-cibuild",
      display: "4.3.0-cibuild",
      definition: "FHIR Release 4B CI-Build.",
    },
    {
      code: "4.3.0-snapshot1",
      display: "4.3.0-snapshot1",
      definition: "FHIR Release 4B Snapshot #1.",
    },
    { code: "4.3.0", display: "4.3.0", definition: "FHIR Release 4B." },
  ],
};
