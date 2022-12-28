export const MeasurePopulationType = {
  resourceType: "CodeSystem",
  id: "measure-population",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/measure-population defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">initial-population\n            \n            <a name="measure-population-initial-population"> </a>\n          \n          </td>\n          \n          <td>Initial Population</td>\n          \n          <td>The initial population refers to all patients or events to be evaluated by a quality measure involving patients who share a common set of specified characterstics. All patients or events counted (for example, as numerator, as denominator) are drawn from the initial population.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">numerator\n            \n            <a name="measure-population-numerator"> </a>\n          \n          </td>\n          \n          <td>Numerator</td>\n          \n          <td>The upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">numerator-exclusion\n            \n            <a name="measure-population-numerator-exclusion"> </a>\n          \n          </td>\n          \n          <td>Numerator Exclusion</td>\n          \n          <td>Numerator exclusion criteria define patients or events to be removed from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">denominator\n            \n            <a name="measure-population-denominator"> </a>\n          \n          </td>\n          \n          <td>Denominator</td>\n          \n          <td>The lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">denominator-exclusion\n            \n            <a name="measure-population-denominator-exclusion"> </a>\n          \n          </td>\n          \n          <td>Denominator Exclusion</td>\n          \n          <td>Denominator exclusion criteria define patients or events that should be removed from the denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">denominator-exception\n            \n            <a name="measure-population-denominator-exception"> </a>\n          \n          </td>\n          \n          <td>Denominator Exception</td>\n          \n          <td>Denominator exceptions are conditions that should remove a patient or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">measure-population\n            \n            <a name="measure-population-measure-population"> </a>\n          \n          </td>\n          \n          <td>Measure Population</td>\n          \n          <td>Measure population criteria define the patients or events for which the individual observation for the measure should be taken. Measure populations are used for continuous variable measures rather than numerator and denominator criteria.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">measure-population-exclusion\n            \n            <a name="measure-population-measure-population-exclusion"> </a>\n          \n          </td>\n          \n          <td>Measure Population Exclusion</td>\n          \n          <td>Measure population criteria define the patients or events that should be removed from the measure population before determining the outcome of one or more continuous variables defined for the measure observation. Measure population exclusion criteria are used within continuous variable measures to help narrow the measure population.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">measure-observation\n            \n            <a name="measure-population-measure-observation"> </a>\n          \n          </td>\n          \n          <td>Measure Observation</td>\n          \n          <td>Defines the individual observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cqi",
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
  url: "http://terminology.hl7.org/CodeSystem/measure-population",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1231",
    },
  ],
  version: "4.3.0",
  name: "MeasurePopulationType",
  title: "MeasurePopulationType",
  status: "draft",
  experimental: false,
  date: "2020-12-28T16:55:11+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The type of population.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-population",
  content: "complete",
  concept: [
    {
      code: "initial-population",
      display: "Initial Population",
      definition:
        "The initial population refers to all patients or events to be evaluated by a quality measure involving patients who share a common set of specified characterstics. All patients or events counted (for example, as numerator, as denominator) are drawn from the initial population.",
    },
    {
      code: "numerator",
      display: "Numerator",
      definition:
        "The upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure.",
    },
    {
      code: "numerator-exclusion",
      display: "Numerator Exclusion",
      definition:
        "Numerator exclusion criteria define patients or events to be removed from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).",
    },
    {
      code: "denominator",
      display: "Denominator",
      definition:
        "The lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.",
    },
    {
      code: "denominator-exclusion",
      display: "Denominator Exclusion",
      definition:
        "Denominator exclusion criteria define patients or events that should be removed from the denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.",
    },
    {
      code: "denominator-exception",
      display: "Denominator Exception",
      definition:
        "Denominator exceptions are conditions that should remove a patient or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.",
    },
    {
      code: "measure-population",
      display: "Measure Population",
      definition:
        "Measure population criteria define the patients or events for which the individual observation for the measure should be taken. Measure populations are used for continuous variable measures rather than numerator and denominator criteria.",
    },
    {
      code: "measure-population-exclusion",
      display: "Measure Population Exclusion",
      definition:
        "Measure population criteria define the patients or events that should be removed from the measure population before determining the outcome of one or more continuous variables defined for the measure observation. Measure population exclusion criteria are used within continuous variable measures to help narrow the measure population.",
    },
    {
      code: "measure-observation",
      display: "Measure Observation",
      definition:
        "Defines the individual observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.",
    },
  ],
};
