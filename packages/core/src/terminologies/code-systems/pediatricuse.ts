/**
 * Suitability for age groups, in particular children.
 * http://hl7.org/fhir/medicinal-product-pediatric-use
 */
export const PediatricUseCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicinal-product-pediatric-use",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/medicinal-product-pediatric-use defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">InUtero<a name="medicinal-product-pediatric-use-InUtero"> </a></td><td>In utero</td><td>In utero</td></tr><tr><td style="white-space:nowrap">PretermNewborn<a name="medicinal-product-pediatric-use-PretermNewborn"> </a></td><td>Preterm newborn infants (0 – 27 days)</td><td>Preterm newborn infants (0 – 27 days)</td></tr><tr><td style="white-space:nowrap">TermNewborn<a name="medicinal-product-pediatric-use-TermNewborn"> </a></td><td>Term newborn infants (0 – 27 days)</td><td>Term newborn infants (0 – 27 days)</td></tr><tr><td style="white-space:nowrap">Infants<a name="medicinal-product-pediatric-use-Infants"> </a></td><td>Infants and toddlers (28 days – 23 months)</td><td>Infants and toddlers (28 days – 23 months)</td></tr><tr><td style="white-space:nowrap">Children<a name="medicinal-product-pediatric-use-Children"> </a></td><td>Children (2 to &lt; 12 years)</td><td>Children (2 to &lt; 12 years)</td></tr><tr><td style="white-space:nowrap">Adolescents<a name="medicinal-product-pediatric-use-Adolescents"> </a></td><td>Adolescents (12 to &lt; 18 years)</td><td>Adolescents (12 to &lt; 18 years)</td></tr><tr><td style="white-space:nowrap">Adults<a name="medicinal-product-pediatric-use-Adults"> </a></td><td>Adults (18 to &lt; 65 years)</td><td>Adults (18 to &lt; 65 years)</td></tr><tr><td style="white-space:nowrap">Elderly<a name="medicinal-product-pediatric-use-Elderly"> </a></td><td>Elderly (≥ 65 years)</td><td>Elderly (≥ 65 years)</td></tr><tr><td style="white-space:nowrap">Neonate<a name="medicinal-product-pediatric-use-Neonate"> </a></td><td>Neonate</td><td>Neonate</td></tr><tr><td style="white-space:nowrap">PediatricPopulation<a name="medicinal-product-pediatric-use-PediatricPopulation"> </a></td><td>Pediatric Population (&lt; 18 years)</td><td>Pediatric Population (&lt; 18 years)</td></tr><tr><td style="white-space:nowrap">All<a name="medicinal-product-pediatric-use-All"> </a></td><td>All</td><td>All</td></tr><tr><td style="white-space:nowrap">Prepubertal<a name="medicinal-product-pediatric-use-Prepubertal"> </a></td><td>Prepubertal children (2 years to onset of puberty)</td><td>Prepubertal children (2 years to onset of puberty)</td></tr><tr><td style="white-space:nowrap">AdultsAndElderly<a name="medicinal-product-pediatric-use-AdultsAndElderly"> </a></td><td>Adult and elderly population (&gt; 18 years)</td><td>Adult and elderly population (&gt; 18 years)</td></tr><tr><td style="white-space:nowrap">PubertalAndPostpubertal<a name="medicinal-product-pediatric-use-PubertalAndPostpubertal"> </a></td><td>Pubertal and postpubertal adolescents (onset of puberty to &lt; 18 years)</td><td>Pubertal and postpubertal adolescents (onset of puberty to &lt; 18 years)</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/medicinal-product-pediatric-use",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1577",
    },
  ],
  version: "4.3.0",
  name: "PediatricUse",
  title: "PediatricUse",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Suitability for age groups, in particular children.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicinal-product-pediatric-use",
  content: "complete",
  concept: [
    { code: "InUtero", display: "In utero", definition: "In utero" },
    {
      code: "PretermNewborn",
      display: "Preterm newborn infants (0 – 27 days)",
      definition: "Preterm newborn infants (0 – 27 days)",
    },
    {
      code: "TermNewborn",
      display: "Term newborn infants (0 – 27 days)",
      definition: "Term newborn infants (0 – 27 days)",
    },
    {
      code: "Infants",
      display: "Infants and toddlers (28 days – 23 months)",
      definition: "Infants and toddlers (28 days – 23 months)",
    },
    {
      code: "Children",
      display: "Children (2 to < 12 years)",
      definition: "Children (2 to < 12 years)",
    },
    {
      code: "Adolescents",
      display: "Adolescents (12 to < 18 years)",
      definition: "Adolescents (12 to < 18 years)",
    },
    {
      code: "Adults",
      display: "Adults (18 to < 65 years)",
      definition: "Adults (18 to < 65 years)",
    },
    {
      code: "Elderly",
      display: "Elderly (≥ 65 years)",
      definition: "Elderly (≥ 65 years)",
    },
    { code: "Neonate", display: "Neonate", definition: "Neonate" },
    {
      code: "PediatricPopulation",
      display: "Pediatric Population (< 18 years)",
      definition: "Pediatric Population (< 18 years)",
    },
    { code: "All", display: "All", definition: "All" },
    {
      code: "Prepubertal",
      display: "Prepubertal children (2 years to onset of puberty)",
      definition: "Prepubertal children (2 years to onset of puberty)",
    },
    {
      code: "AdultsAndElderly",
      display: "Adult and elderly population (> 18 years)",
      definition: "Adult and elderly population (> 18 years)",
    },
    {
      code: "PubertalAndPostpubertal",
      display:
        "Pubertal and postpubertal adolescents (onset of puberty to < 18 years)",
      definition:
        "Pubertal and postpubertal adolescents (onset of puberty to < 18 years)",
    },
  ],
};
